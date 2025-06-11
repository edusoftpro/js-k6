import { sleep } from 'k6';
import http from 'k6/http';
import { randomIntBetween } from 'https://jslib.k6.io/k6-utils/1.2.0/index.js';

export default function () {
  http.get('https://k6.io');
  let randomSleepBetween = randomIntBetween(20, 30); // Random sleep between 20 and 30 seconds
  console.log(`Sleeping for ${randomSleepBetween} seconds`);
  sleep(randomSleepBetween);
  http.get('https://k6.io/features');
}
