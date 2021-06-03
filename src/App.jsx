import React from "react";
import "./App.css";
import Header from "./Header/Header";
import FiltersMain from "./Filters";

function App() {
  return (
    <div className="container-fluid w-75">
      <Header />
      <main>
        <FiltersMain />
      </main>
    </div>
  );
}

export default App;
