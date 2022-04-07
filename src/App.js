import React, { Suspense } from 'react';
import "./App.css";
//import Comment from "./components/comments/Comment";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Dashboard from "./components/dashboard/Dashboard";
import Tasks from "./components/tasks/Tasks";
import Admin from "./components/admin/Admin";
import Home from "./components/Home/Home";
import NavigationBar from "./components/navigation/Navigation";
import Map from "./components/comments/map/Map";
import Profile from './components/profile/Profile';
const Comment = React.lazy(() => import("./components/comments/Comment"));

function App() {
  return (
    <Router>
      <NavigationBar />
      <div className="App-body">
        <Switch>
          <Route path="/map">
            <Map />
          </Route>
          <Route path="/task">
            <Tasks />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/comments">
            <Suspense fallback={<div>Loading...</div>}>
              <Comment />
            </Suspense>
          </Route>
          <Route path="/admin">
            <Admin />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
