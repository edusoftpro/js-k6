export function isTruthy(value) {
  // Check if the value is truthy
  return !!value;
}

export default function () {
  // Truthy values
  const truthy = [true, 1, 'k6', [], {}, function () {}];

  truthy.forEach((v) => {
    console.log(`[Truthy ${v}] is truthy:`, isTruthy(v));
  });
  console.log();

  // Falsy values
  const falsy = [false, 0, '', null, undefined, NaN];
  falsy.forEach((v) => {
    console.log(`[Falsy ${v}] is falsy:`, isTruthy(v));
  });
  console.log();

  // == vs === with numbers and strings
  console.log('\'1\' == 1:', '1' == 1); // true (type coercion)
  console.log('\'1\' === 1:', '1' === 1); // false (strict equality)
  console.log('0 == false:', 0 == false); // true
  console.log('0 === false:', 0 === false); // false
}
