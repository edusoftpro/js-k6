import exec from 'k6/execution';

export const options = {
  tags: {
    name: 'value',
  },
};

export default function () {
  const tag = exec.vu.tags['scenario'];
  console.log(tag); // default
}
