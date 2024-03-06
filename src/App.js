import { useState } from 'react';

export default function RequestTracker() {
  const [pending, setPending] = useState(0);
  const [Completed, setCompleted] = useState(0);

  async function handleClick() {
    setPending (p => p + 1);
    await delay(2000);
    setPending(p => p - 1);
    setCompleted(C => C + 1);
  }

  return (
    <>
    <h3>
      pending: {pending}
      </h3>
      <h3>
        Completed: {Completed}
      </h3>
      <button onClick={handleClick}>
        Buy
      </button>
      </>
  );
}

function delay(ms) {
  return new Promise(resolve => {
    setTimeout(resolve, ms);
  });
}
