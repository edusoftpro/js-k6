import { group, check } from 'k6';
import http from 'k6/http';

const id = 5;

export default function () {
  // reconsider this type of code
  group('get post', function () {
    http.get(`http://example.com/posts/${id}`);
  });
  group('list posts', function () {
    const res = http.get('http://example.com/posts');
    check(res, {
      'is status 404': (r) => r.status === 404,
    });
  });
}
