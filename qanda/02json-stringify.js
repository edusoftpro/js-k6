import http from 'k6/http';

export default function () {
  const payload = { tool: 'k6', type: 'load test' };
  const url = 'https://httpbin.test.k6.io/post';
  
  let res = http.post(url, JSON.stringify(payload), {
    headers: { 'Content-Type': 'application/json' },
  });
  console.log('Sent payload:', JSON.stringify(payload));
  console.log('Response body:', res.body);
}
