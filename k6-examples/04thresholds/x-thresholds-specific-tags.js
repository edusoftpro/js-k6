import http from "k6/http";
import { sleep } from "k6";

export const options = {
  thresholds: {
    "http_req_duration{type:API}": ["p(95)<500"], // threshold on API requests only
    "http_req_duration{type:staticContent}": ["p(95)<200"], // threshold on static content only
  },
};

export default function () {
  // eslint-disable-next-line no-unused-vars
  const res1 = http.get("https://quickpizza.grafana.com/api/headers", {  // NOSONAR
    tags: { type: "API" },
  });

  // eslint-disable-next-line no-unused-vars
  const res2 = http.get("https://quickpizza.grafana.com/api/json", {  // NOSONAR
    tags: { type: "API" },
  });

  // eslint-disable-next-line no-unused-vars
  const responses = http.batch([  // NOSONAR
    [
      "GET",
      "https://quickpizza.grafana.com/favicon.ico",
      null,
      { tags: { type: "staticContent" } },
    ],
    [
      "GET",
      "https://quickpizza.grafana.com/admin",
      null,
      { tags: { type: "staticContent" } },
    ],
  ]);

  sleep(1);
}
