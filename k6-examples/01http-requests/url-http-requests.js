import http from 'k6/http';

export default function () {
  for (let id = 1; id <= 10; id++) {
    http.get(http.url`http://example.com/posts/${id}`);
  }
}
// tags.name="http://example.com/posts/${}",
// tags.name="http://example.com/posts/${}",
