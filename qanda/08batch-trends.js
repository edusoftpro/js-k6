import http from 'k6/http';
import { Trend } from 'k6/metrics';
import { sleep } from 'k6';

const trend1 = new Trend('batch_req_1_duration');
const trend2 = new Trend('batch_req_2_duration');
const trend3 = new Trend('batch_req_3_duration');

export default function () {
  const requests = [
    { method: 'GET', url: 'https://httpbin.test.k6.io/get?req=1' },
    { method: 'GET', url: 'https://httpbin.test.k6.io/get?req=2' },
    { method: 'GET', url: 'https://httpbin.test.k6.io/get?req=3' },
  ];

  const responses = http.batch(requests);

  trend1.add(responses[0].timings.duration);
  trend2.add(responses[1].timings.duration);
  trend3.add(responses[2].timings.duration);

  sleep(1);
}
