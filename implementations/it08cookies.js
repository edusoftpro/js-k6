import http from "k6/http";

export default function () {
  const url = "https://httpbin.test.k6.io/cookies";

  // 1. Create a cookie jar and set a custom cookie
  const jar = http.cookieJar();
  jar.set(url, "mycookie", "hello_k6", { path: "/" });

  // 2. Send a request with the custom cookie
  let res = http.get(url, { jar: jar });
  console.log("Request #1 - Sent cookies:", jar.cookiesForURL(url));
  console.log(
    "Request #1 - Request headers:",
    JSON.stringify(res.request.headers, null, 2)
  );
  console.log("Request #1 - Response body:", res.body);

  // 3. Retrieve the cookie after the request
  const cookies = jar.cookiesForURL(url);
  console.log("Retrieved cookie:", JSON.stringify(cookies, null, 2));

  // 4. Clear all cookies from the jar
  jar.set(url, "mycookie", "", { path: "/", expires: new Date(0) });

  // 5. Send another request; cookie should not be sent
  res = http.get(url, { jar: jar });
  console.log(
    "Request #2 - Sent cookies (should be empty):",
    jar.cookiesForURL(url)
  );
  console.log(
    "Request #2 - Request headers:",
    JSON.stringify(res.request.headers, null, 2)
  );
  console.log("Request #2 - Response body:", res.body);
}
