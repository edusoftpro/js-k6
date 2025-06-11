import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
  scenarios: {
    my_web_test: {
      // the function this scenario will execute
      exec: 'webtest',
      executor: 'constant-vus',
      vus: 5,
      duration: '15s',
    },
  },
};

export function webtest() {
  http.get('https://test.k6.io/contacts.php');
  sleep(Math.random() * 2);
}


export function setup() {
  return { v: 1 };
}

export default function (data) {
  console.log(JSON.stringify(data));
}

export function teardown(data) {
  if (data.v != 1) {
    throw new Error('incorrect data: ' + JSON.stringify(data));
  }
}
