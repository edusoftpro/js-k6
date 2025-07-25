import http from 'k6/http';
import { Trend } from 'k6/metrics';
import { check } from 'k6';

const myTrend = new Trend('my_trend');

export default function () {
  // Add tag to request metric data
  const res = http.get('https://quickpizza.grafana.com/', {
    tags: {
      my_tag: 'I\'m a req tag',
    },
  });

  // Add tag to check
  check(res, { 'status is 200': (r) => r.status === 200 }, { my_tag: 'I\'m a check tag' });

  // Add tag to custom metric
  myTrend.add(res.timings.connecting, { my_tag: 'I\'m a metric tag' });
}
