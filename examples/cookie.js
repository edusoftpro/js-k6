import http from 'k6/http';

export default function () {
  // Serwer ustawia cookie w odpowiedzi
  http.get('https://test.k6.io/cookies/set?mycookie=myvalue');
  // Przy kolejnym requestcie cookie zostanie automatycznie wysłane
  http.get('https://test.k6.io/cookies');

  let jar = http.cookieJar();
  jar.set('https://test.k6.io', 'mycookie', 'myvalue');
  let res = http.get('https://test.k6.io/cookies');
  // Odczyt cookies z odpowiedzi
  console.log(JSON.stringify(res.cookies));

  // ...existing code...
  let resp = http.get('https://test.k6.io/cookies/set?mycookie=myvalue');
  if (resp.cookies && resp.cookies.mycookie && resp.cookies.mycookie[0]) {
    console.log(resp.cookies.mycookie[0].value); // wypisze "myvalue"
  } else {
    console.log('Cookie not found');
  }
  // ...existing code...
}
