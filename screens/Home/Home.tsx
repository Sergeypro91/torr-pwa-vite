import { useState } from 'react';

import { ReactLogo, ReloadPrompt, Vite } from '@torr/shared';

import './Home.css';

export const Home = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <Vite className="logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <ReactLogo className="logo react" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <ReloadPrompt />
    </>
  );
};