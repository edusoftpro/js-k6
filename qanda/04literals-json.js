import http from 'k6/http';
import { sleep } from 'k6';
import { randomIntBetween } from 'https://jslib.k6.io/k6-utils/1.2.0/index.js';

export const options = {
  vus: 7, // Number of virtual users
  duration: '3s', // Duration of the test
};

export default function () {
  const name = 'k6';
  const endpoint = 'tools.json'; // Endpoint for the Firebase Realtime Database
  const payload = { tool: name, timestamp: Date.now() }; // JSON payload with tool name and timestamp
  const str_payload = JSON.stringify(payload); // Stringify JSON payload
  const url = `https://k6-js-jm-default-rtdb.europe-west1.firebasedatabase.app/${endpoint}`; // Template literal

  let res = http.post(url, str_payload, {
    headers: { 'Content-Type': 'application/json' },
  });

  const data = JSON.parse(res.body); // Parse JSON response
  console.log(`Sent payload: ${str_payload}`);
  console.log(`Response hash: ${data.name}`); // Accessing the name property from the response

  let randomSleepBetween = randomIntBetween(0, 3); // Random sleep between 0 and 3 seconds
  console.log(`Sleeping for ${randomSleepBetween.toFixed(2)} seconds`);
  sleep(randomSleepBetween.toFixed(2)); // Sleep for the random duration, rounded to 2 decimal places
}
