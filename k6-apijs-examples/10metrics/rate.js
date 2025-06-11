import { Rate } from 'k6/metrics';

const myRate = new Rate('my_rate');

export default function () {
  myRate.add(true);
  myRate.add(false);
  myRate.add(1);
  myRate.add(0, { tag1: 'value', tag2: 'value2' });
}
