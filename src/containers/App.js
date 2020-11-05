import { Switch, Route, Redirect, Link } from "react-router-dom";

import MainContent from "../components/MainContent/MainContent";
import AsideNavbar from "./AsideNavbar/AsideNavbar";
import CardInfo from "../components/CardInfo/CardInfo";
import Logout from '../components/Logout/Logout';
import MainProfile from "./Profile/MainProfile";
import MainItem from "../components/ListItem/MainItem";

// styles
import "./App.scss";

function App() {
  return (
    <div className="App">
      <AsideNavbar />
      <Switch>
        <Route exact path="/" component={MainContent} />
        <Route exact path="/list" component={MainItem} />
        <Route exact path="/detail/:id" component={CardInfo} />
        <MainProfile />
      </Switch>
      <div className="Logout">
        {" "}
        <Logout></Logout>
      </div>
    </div>
  );
}

export default App;
