import http from 'k6/http';

export default function () {
  let res = http.get('https://httpbin.test.k6.io/get');
  const data = JSON.parse(res.body); // Parse JSON response
  console.log('Parsed URL:', data.url);
}
