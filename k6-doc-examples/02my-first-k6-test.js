// This script will run 10 iterations, making a GET request to the specified URL and then sleeping for 1 second after each request.
// You can run this script using the k6 command line tool: k6 run my-first-k6-test.js
// This is a simple k6 test script that makes a GET request to a specified URL and sleeps for 1 second after each request.
import http from 'k6/http';
import { sleep } from 'k6';

// Export the options object to configure the test
// The options object allows you to set various parameters for the test, such as the number of iterations.
export const options = {
  iterations: 5,
};

// The default exported function is gonna be picked up by k6 as the entry point for the test script. It will be executed repeatedly in "iterations" for the whole duration of the test.
export default function () {
  // Make a GET request to the target URL
  http.get('https://quickpizza.grafana.com');

  // Sleep for 1 second to simulate real-world usage
  sleep(1);
}
