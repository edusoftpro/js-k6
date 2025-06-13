import http from 'k6/http';
import { check, sleep } from 'k6';

const BASE_URL =
  'https://k6-js-jm-default-rtdb.europe-west1.firebasedatabase.app/tools';
const headers = { 'Content-Type': 'application/json' };

export const options = {
  vus: 3, // Number of virtual users
  duration: '7s', // Total duration of the test
  thresholds: {
    http_req_duration: ['p(95)<50'], // 95% of requests should be below 200ms
    http_req_failed: ['rate<0.01'], // Less than 1% of requests should fail
  },
};

export default function () {
  // CREATE (POST)
  let createRes = http.post(
    `${BASE_URL}.json`,
    JSON.stringify({ tool: 'k6', ts: Date.now() }),
    { headers }
  );
  const key = JSON.parse(createRes.body).name;
  console.log(`Created: ${key}`);

  // READ (GET)
  let readRes = http.get(`${BASE_URL}/${key}.json`);
  console.log(`Read: ${readRes.body}`);

  // UPDATE (PUT)
  let updateRes = http.put(
    `${BASE_URL}/${key}.json`,
    JSON.stringify({ tool: 'k6', ts: Date.now(), updated: true }),
    { headers }
  );
  console.log(`Updated: ${updateRes.body}`);

  // DELETE (DELETE)
  let deleteRes = http.del(`${BASE_URL}/${key}.json`);
  console.log(`Deleted: ${deleteRes.status}`);

  // Confirm deletion using (GET)
  check(http.get(`${BASE_URL}/${key}.json`), {
    'status is 200': (r) => r.status === 200,
    'body is null': (r) => r.body === 'null'
  });

  let randomSleep = Math.random() * 3;
  console.log(`Sleeping for ${randomSleep.toFixed(2)} seconds`);
  sleep(randomSleep);
}
