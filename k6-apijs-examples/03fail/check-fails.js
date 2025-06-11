import http from 'k6/http';
import { check, fail } from 'k6';

export default function () {
  const res = http.get('https://k6.io');
  //   fail('status code was *not* 200');  //NOSONAR
  if (
    !check(res, {
      'status code MUST be 200': (res) => res.status == 2000,
    })
  ) {
    fail('status code was *not* 200');
  }
}
