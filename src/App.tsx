import reactLogo from "./assets/react.svg";
import twaLogo from "./assets/tapps.png";
import viteLogo from "/vite.svg";
import "./App.css";

import WebApp from "@twa-dev/sdk";

const geTLocalTime = () => {
  // Get the current date and time
  const now = new Date();

  // Format the time as needed
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  // Format the date as needed
  const year = now.getFullYear();
  const month = now.getMonth() + 1; // Months are zero-based
  const day = now.getDate();

  // Display the local time
  const time = `Local Time: ${hours}:${minutes}:${seconds}`;
  const date = `Local Date: ${month}/${day}/${year}`;

  return `${date}, ${time}`;
};

function App() {
  return (
    <>
      <div>
        <a href="https://ton.org/dev" target="_blank">
          <img src={twaLogo} className="logo" alt="TWA logo" />
        </a>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>dev-kbpsystem</h1>
      <div className="card">
        <button
          onClick={() =>
            WebApp.showAlert(
              `Hello! the current time in your location is ${geTLocalTime()}`
            )
          }
        >
          Say hello!
        </button>
      </div>
    </>
  );
}

export default App;
