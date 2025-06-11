import http from 'k6/http';
import { tagWithCurrentStageProfile } from 'https://jslib.k6.io/k6-utils/1.3.0/index.js';

export const options = {
  stages: [{ target: 2, duration: '5s' }],
};

export default function () {
  tagWithCurrentStageProfile();

  // all the requests are tagged with a `stage` tag
  // with the index of the stage as value
  http.get('https://test.k6.io'); // {stage_profile: ramp-up}
}
