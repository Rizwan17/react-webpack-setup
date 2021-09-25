import React from "react";
import { 
    BrowserRouter as Router, 
    Switch, 
    Link, 
    Route 
} from "react-router-dom";
import Profile from "./components/Profile";

const App = props => {
    return (
        <Router>
            <Link to={`/`}>Home</Link>
            <Link to={`/profile`}>Profile</Link>
            <Link to={`/about`}>About</Link>
           
            <div>
                <Switch>
                    <Route exact path="/">
                        <h1>home</h1>
                    </Route>
                    <Route path="/profile">
                        <Profile />
                    </Route>
                    <Route path="/about">
                        <h1>About</h1>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;