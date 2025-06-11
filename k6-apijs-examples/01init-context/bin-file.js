import http from 'k6/http';
import { sleep } from 'k6';

const binFile = open('./file.bin', 'b');

export default function () {
  const data = {
    field: 'this is a standard form field',
    file: http.file(binFile, 'test.bin'),
  };
  http.post('https://example.com/upload', data);
  sleep(3);
}
