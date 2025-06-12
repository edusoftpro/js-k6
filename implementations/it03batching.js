import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
  vus: 5,              // Number of Virtual Users
  iterations: 10,      // Total number of iterations (requests batches)
};

export default function () {
  // Define the batch of requests
  const requests = [
    ['GET', 'https://test.k6.io', null, { tags: { name: 'Homepage' } }],
    ['GET', 'https://test.k6.io/news.php', null, { tags: { name: 'News' } }],
    ['GET', 'https://test.k6.io/contact.php', null, { tags: { name: 'Contact' } }],
    // Add more endpoints as desired
  ];

  // Send all requests in a single batch
  const responses = http.batch(requests);

  // Optionally, log status codes for verification
  responses.forEach((res, idx) => {
    console.log(`Request ${idx + 1} status: ${res.status}`);
  });

  sleep(1); // Simulate think time between batches
}

// k6 run --summary-mode=full .\it03batching.js  
