export default function debounce(fn, delayTime) {
  let timeout;

  return function (...args) {
    if (timeout) {
      clearTimeout(timeout);
    }

    timeout = setTimeout(() => fn(...args), delayTime);
  };
}
