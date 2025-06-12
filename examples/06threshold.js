import http from 'k6/http';

export const options = {
  thresholds: {
    http_req_duration: ['p(95)<500'], // 95% żądań musi być poniżej 500ms
    http_req_failed: ['rate<0.01'],   // mniej niż 1% żądań może zakończyć się błędem
  },
};

export default function () {
  http.get('https://test.k6.io');
}
