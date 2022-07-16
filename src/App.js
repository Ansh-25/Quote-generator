import React from "react";
import HomePage from "./HomePage";
import AuthorPage from "./AuthorPage";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<HomePage/>} />
        <Route path="/:name" element={<AuthorPage/>} />
      </Routes>
    </Router>
  );
}

export default App;