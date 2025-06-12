import http from 'k6/http';

export default function () {
  console.log(`VU: ${__VU}, Iteracja: ${__ITER}`);
  let res = http.get(__ENV.MY_URL); // użycie zmiennej środowiskowej
}
