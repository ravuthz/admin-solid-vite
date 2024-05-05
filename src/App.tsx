import { createSignal } from "solid-js";

import viteLogo from "/vite.svg";
import solidLogo from "./assets/solid.svg";

function App() {
  const [count, setCount] = createSignal(0);

  return (
    <div data-testid="App" class="container mx-auto">
      <div class="flex flex-col justify-center items-center mt-10">
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} class="logo" alt="Vite logo" />
        </a>
        <a href="https://solidjs.com" target="_blank">
          <img src={solidLogo} class="logo solid" alt="Solid logo" />
        </a>
      </div>
      <div class="flex flex-col justify-center items-center">
        <h1 class="text-3xl font-bold my-5">Vite + Solid</h1>
        <button
          class="g-blue-500 bg-blue-500 hover:bg-blue-300 text-white font-bold py-2 px-4 rounded"
          onClick={() => setCount((count) => count + 1)}
        >
          count is {count()}
        </button>
        <div class="mt-5 flex flex-col justify-center items-center">
          <p>
            Edit <code>src/App.tsx</code> and save to test HMR
          </p>
          <p class="read-the-docs">
            Click on the Vite and Solid logos to learn more
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
