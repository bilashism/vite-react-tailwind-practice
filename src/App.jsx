import { useState } from "react";
import "./App.css";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div>
        <figure>
          <picture>
            <source srcSet="../public/setting-up-dev-environment-react-vite-tailwind.webp" />
            <img
              src="../public/setting-up-dev-environment-react-vite-tailwind.webp"
              width="730"
              height="487"
              loading="lazy"
              decoding="async"
              fetchpriority="low"
              className="mx-auto"
              alt="Setting Up Dev Environment with React, Vite, Tailwind"
            />
          </picture>
        </figure>
        <p className="text-center">
          <button onClick={() => setCount(count => count + 1)}>
            count is {count}
          </button>
        </p>
      </div>
    </div>
  );
}

export default App;
