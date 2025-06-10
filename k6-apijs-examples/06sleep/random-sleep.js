import { sleep } from 'k6';
import http from 'k6/http';

export default function () {
  http.get('https://k6.io');
  let randomSleep = Math.random() * 30;
  console.log(`Sleeping for ${randomSleep} seconds`);
  sleep(randomSleep); // Sleep for a random time between 0 and 30 seconds
  http.get('https://k6.io/features');
}
