import http from 'k6/http';

export default function () {
  for (let id = 1; id <= 100; id++) {
    http.get(`http://example.com/posts/${id}`, {
      tags: { name: 'PostsItemURL' },
    });
  }
}

// tags.name=\"PostsItemURL\",
// tags.name=\"PostsItemURL\",
// https://grafana.com/docs/k6/latest/using-k6/http-requests/#http-request-tags
