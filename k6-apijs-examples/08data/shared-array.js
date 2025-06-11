import { SharedArray } from 'k6/data';

const data = new SharedArray('some name', function () {
  // All heavy work (opening and processing big files for example) should be done inside here.
  // This way it will happen only once and the result will be shared between all VUs, saving time and memory.
  const f = JSON.parse(open('./somefile.json'));
  return f; // f must be an array
});

export default function () {
  const element = data[Math.floor(Math.random() * data.length)];
  console.log(`Element: ${element}`); // Use the element in your test
}
