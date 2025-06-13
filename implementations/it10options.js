import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
  stages: [
    // 1. Warm-up: 5 VUs for 20s
    { duration: '20s', target: 5 },
    // 2. Spike: 50 VUs for 15s
    { duration: '15s', target: 50 },
    // 3. Recovery: 5 VUs for 25s
    { duration: '25s', target: 5 },
  ],
};

export default function () {
  http.get('https://test.k6.io');
  sleep(1);
}
