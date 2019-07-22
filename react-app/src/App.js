import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        {/* only if href attribute is present. Shows the relationship between current document and linked document. "nofollow" links to an endorsed documene like a paid link. Google uses "nofollow" to specify that the Google search spider should not follow that link. "noreferrer" - Requires that the browser should not send an HTTP referer header if theb user follows the hyperlink. "noopener" - Requires that any browsing context created by the following hyperlink must not have an opener browsing context.  */}
      </header>
    </div>
  );
}

export default App;
