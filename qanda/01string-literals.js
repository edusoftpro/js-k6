import http from 'k6/http';

export default function () {
  const name = 'k6';
  const url = `https://httpbin.test.k6.io/get?tool=${name}`; // Template string literal
  let res = http.get(url);
  console.log(`Requested URL: ${url}`);
  console.log('Response status: ' + res.status); // String concatenation
}
