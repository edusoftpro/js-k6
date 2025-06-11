import http from 'k6/http';
import { check, fail } from 'k6';

export default function () {
  const res = http.get('https://quickpizza.grafana.com/');
  const checkOutput = check(
    res,
    {
      'response code was 200': (res) => res.status == 200,
      'body size was larger than 123 bytes': (res) => res.body.length > 123,
    },
    { myTag: 'I\'m a tag' }
  );

  if (!checkOutput) {
    fail('unexpected response');
  }
}
