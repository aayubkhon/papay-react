import React, { useState } from "react";
import "./css/App.css";
import "./css/navbar.css";
import "./css/footer.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { RestaurantPage } from "./screens/RestaurantPage";
import { CommunityPage } from "./screens/CommunityPage";
import { OrdersPage } from "./screens/OrdersPage";
import { MembersPage } from "./screens/MembersPage";
import { HelpPage } from "./screens/HelpPage";
import { LoginPage } from "./screens/LoginPage";
import { HomePage } from "./screens/HomePage";
import { NavbarHome } from "./components/header";
import { NavbarRestaurant } from "./components/header/restaurant";
import { NavbarOthers } from "./components/header/others";
import { Footer } from "./components/footer";
function App() {
  const [path, setPath] = useState();
  const main_path = window.location.pathname;
  return (
    <Router>
      {main_path == "/" ? (
        <NavbarHome setPath={setPath} />
      ) : main_path.includes("/restaurant") ? (
        <NavbarRestaurant setPath={setPath} />
      ) : (
        <NavbarOthers setPath={setPath} />
      )}

      <Switch>
        <Route path="/restaurant">
          <RestaurantPage />
        </Route>
        <Route path="/community">
          <CommunityPage />
        </Route>
        <Route path="/orders">
          <OrdersPage />
        </Route>
        <Route path="/member_page">
          <MembersPage />
        </Route>
        <Route path="/help">
          <HelpPage />
        </Route>
        <Route path="/login">
          <LoginPage />
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
