import React from "react";
import Nav from "./components/Nav";

import Home from "./pages/Home";
import GlobalStyles from "./components/GlobalStyles";
import {Route} from "react-router-dom";



function App() {


  return (
    <div className="App">
        <Nav />
        <GlobalStyles />
        <Route path={["/game/:id","/"]}>
            <Home />
        </Route>
    </div>
  );
}

export default App;
