import { sleep } from 'k6';

export default function () {
  console.log('Hello k6 World!');
  sleep(8);
}
