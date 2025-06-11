import { check } from 'k6';
import http from 'k6/http';
import { SharedArray } from 'k6/data';

const n = parseInt(__ENV.N) || 1000; // Default to 1000 if N is not set
function generateArray() {
  const arr = new Array(n);
  for (let i = 0; i < n; i++) {
    arr[i] = { something: 'something else' + i, password: '12314561' };
  }
  return arr;
}

let data;
if (__ENV.SHARED === 'true') {
  data = new SharedArray('my data', generateArray);
} else {
  data = generateArray();
}

export default function () {
  const iterationData = data[Math.floor(Math.random() * data.length)];
  const res = http.post('https://quickpizza.grafana.com/api/post', JSON.stringify(iterationData), {
    headers: { 'Content-type': 'application/json' },
  });
  check(res, { 'status 200': (r) => r.status === 200 });
}
