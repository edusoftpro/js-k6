import { group } from 'k6';
import http from 'k6/http';

export default function () {
  group('Log-in', function () {
    http.post('https://test.k6.io/login', { username: 'user', password: 'pass' });
  });

  group('Data', function () {
    http.get('https://test.k6.io/data');
  });
}
