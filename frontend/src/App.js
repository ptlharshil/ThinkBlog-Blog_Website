import Home from "../src/Pages/Home/home"
import TopBar from "../src/components/TopBar/topbar"
import Single from "./Pages/Single/single"
import Write from "./Pages/Write/Write"
import Settings from "./Pages/Settings/Settings"
import Login from "./Pages/Login/Login"
import SignUp from "./Pages/SignUp/Signup"
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

function App() {
const user=false;

  return (
    <Router>
       <TopBar/>
        <Switch>
          <Route exact path="/">

            <Home />
          </Route>
        
        
          <Route  path="/login">
  
          {user ? <Login  />: <Home/>}
          </Route>
        
        
          <Route path="/signup">
      
            {user ? <SignUp  />:<Home/> }
          </Route>
         
        
          <Route path="/post/:postId">
  
            <Single  />
          </Route>
        

        
          <Route path="/write">
          
            {user ? <Write /> : <SignUp/>}
          </Route>
        
        
          <Route path="/settings">
        
          {user ? <Settings /> : <SignUp/>}
          </Route>

        </Switch>
    
    </Router>
  );
}

export default App;
