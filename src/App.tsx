import React from 'react';
import './App.css';
import {AddText} from "./components/addtext/AddTodu";
import {ShowTodo} from "./components/showtodu/showTodo";
import {Link, Route, Switch} from "react-router-dom";
import {JsonComponent} from "./components/json/JsonComponent";

function App() {
  return (
    <div className="App">
        <Switch>
            <Route  path='/post'>
                <JsonComponent/>
            </Route>
            <Route path='/'>
                <AddText/>
                <ShowTodo/>
            </Route>
        </Switch>


        </div>
  );
}

export default App;
