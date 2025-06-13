import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
  vus: 2,
  iterations: 4,
};

export default function () {
  // Request with tags for production API
  http.get('https://test.k6.io', {
    tags: { stage: 'production', service: 'api', endpoint: 'homepage' },
  });
  sleep(1);

  // Request with tags for staging API
  http.get('https://test.k6.io/news.php', {
    tags: { stage: 'staging', service: 'api', endpoint: 'news' },
  });
  sleep(1);

  // Request with tags for production auth
  http.get('https://test.k6.io/login', {
    tags: { stage: 'production', service: 'auth', endpoint: 'login' },
  });
  sleep(1);
}

// k6 run .\it09tags.js --out json=output.json
