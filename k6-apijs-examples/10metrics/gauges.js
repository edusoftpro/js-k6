import http from 'k6/http';
import { sleep } from 'k6';
import { Gauge } from 'k6/metrics';

const GaugeContentSize = new Gauge('ContentSize');

export const options = {
  thresholds: {
    ContentSize: ['value<4000'],
  },
};

export default function () {
  const res = http.get('https://quickpizza.grafana.com');
  GaugeContentSize.add(res.body.length);
  sleep(1);
}
