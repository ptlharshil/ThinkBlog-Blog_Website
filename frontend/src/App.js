import Home from "../src/Pages/Home/home"
import TopBar from "../src/components/TopBar/topbar"
import Single from "./Pages/Single/single"
import Write from "./Pages/Write/Write"
import Settings from "./Pages/Settings/Settings"
import Login from "./Pages/Login/Login"
import SignUp from "./Pages/SignUp/Signup"
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      
        <Switch>
          <Route exact path="/">
          <TopBar/>
            <Home />
          </Route>
        
        
          <Route  path="/login">
          <TopBar/>
            <Login />
          </Route>
        
        
          <Route path="/signup">
          <TopBar/>
            <SignUp  />
          </Route>
        
        
          <Route path="/post/:postId">
          <TopBar/>
            <Single  />
          </Route>
        

        
          <Route path="/write">
          <TopBar/>
            <Write />
          </Route>
        
        
          <Route path="/settings">
          <TopBar/>
            <Settings  />
          </Route>

        </Switch>
    
    </Router>
  );
}

export default App;
