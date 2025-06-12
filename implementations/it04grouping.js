import http from "k6/http";
import { group, sleep } from "k6";

export const options = {
  vus: 2,
  iterations: 4,
};

export default function () {
  group("Public Homepage", function () {
    http.get("https://test.k6.io");
    sleep(1);
  });

  group("News Section", function () {
    http.get("https://test.k6.io/news.php");
    sleep(1);
  });

  group("Contact Page", function () {
    http.get("https://test.k6.io/contact.php");
    sleep(1);
  });
}

// k6 run .\it04grouping.js --out json=output.json
