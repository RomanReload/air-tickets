import React from "react";
import "./App.css";
import Header from "./Header/Header";
import MainBlock from "./Filters";

function App() {
  return (
    <div className="container-fluid w-80">
      <header>
        <Header />
      </header>
      <main>
        <MainBlock />
      </main>
    </div>
  );
}

export default App;
