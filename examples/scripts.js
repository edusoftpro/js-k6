import http from 'k6/http';

export default function () {
  console.log(`VU: ${__VU}, Iteracja: ${__ITER}`);
  // eslint-disable-next-line no-unused-vars
  let res = http.get(__ENV.MY_URL); // NOSONAR // using environment variable
}
