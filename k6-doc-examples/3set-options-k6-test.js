import http from 'k6/http';
import { sleep } from 'k6';

// This script sets options for a k6 test, specifying the number of virtual users (VUs) and the duration of the test.
// The script will run with 7 VUs for 15 seconds, making a GET request to the specified URL and then sleeping for 1 second after each request.
export const options = {
  vus: 7,
  duration: '15s',
};

export default function () {
  http.get('http://test.k6.io');
  sleep(1);
}