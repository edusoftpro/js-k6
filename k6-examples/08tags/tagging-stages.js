import http from 'k6/http';
import { tagWithCurrentStageIndex } from 'https://jslib.k6.io/k6-utils/1.3.0/index.js';

export const options = {
  stages: [
    { target: 5, duration: '2s' },
    { target: 10, duration: '5s' },
  ],
};

export default function () {
  tagWithCurrentStageIndex();

  // all the requests will have a `stage` tag
  // with its value equal to the index of the stage
  http.get('https://test.k6.io'); // e.g. {stage: "1"}
}
