import { sleep } from 'k6';

const users = JSON.parse(open('./users.json')); // consider using SharedArray for large files

export default function () {
  const user = users[__VU - 1];
  console.log(`${user.username}, ${user.password}`);
  sleep(3);
}
