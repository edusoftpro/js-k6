import { randomSeed, sleep } from 'k6';

export const options = {
  vus: 10,
  duration: '3s',
};

export default function () {
//   randomSeed(Date.now());  // This will generate the random number
  randomSeed(123456789);  // This will always generate the same "random" number
  const rnd = Math.random();
  console.log(rnd);
  sleep(1);  // Sleep for 1 second to simulate some processing time
}
