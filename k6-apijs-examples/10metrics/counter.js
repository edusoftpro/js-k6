import { Counter } from 'k6/metrics';

const myCounter = new Counter('my_counter');

export default function () {
  myCounter.add(1);
  myCounter.add(2, { tag1: 'myValue', tag2: 'myValue2' });
}
