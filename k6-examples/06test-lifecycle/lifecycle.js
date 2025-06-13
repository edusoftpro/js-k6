// init context: importing modules
import http from 'k6/http';
import { Trend } from 'k6/metrics';

// init context: define k6 options
export const options = {
  vus: 3,
  duration: '10s',
};

// eslint-disable-next-line no-unused-vars
const customTrend = new Trend('oneCustomMetric');

export function setup() {
  const res = http.get('https://quickpizza.grafana.com/api/json');
  return { data: res.json() };
}

export default function (data) {
  console.log(JSON.stringify(data));
}

export function teardown(data) {
  console.log(JSON.stringify(data));
}
