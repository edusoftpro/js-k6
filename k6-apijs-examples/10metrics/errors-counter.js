import { Counter } from 'k6/metrics';
import { sleep } from 'k6';
import http from 'k6/http';

const allErrors = new Counter('error_counter');

export const options = {
  vus: 1,
  duration: '1m',
  thresholds: {
    'error_counter': [
      'count < 10', // 10 or fewer total errors are tolerated
    ],
    'error_counter{errorType:authError}': [
      // Threshold on a sub-metric (tagged values)
      'count <= 2', // max 2 authentication errors are tolerated
    ],
  },
};

export default function () {
  const auth_resp = http.post('https://quickpizza.grafana.com/api/users/token/login', {
    username: 'default',
    password: 'supersecure',
  });

  if (auth_resp.status >= 400) {
    allErrors.add(1, { errorType: 'authError' }); // tagged value creates submetric (useful for making thresholds specific)
  }

  const other_resp = http.get('https://quickpizza.grafana.com/api/json');
  if (other_resp.status >= 400) {
    allErrors.add(1); // untagged value
  }

  sleep(1);
}
