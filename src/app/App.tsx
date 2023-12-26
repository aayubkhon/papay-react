import React, { useState, useEffect } from "react";
import "./css/App.css";
import "./css/navbar.css";
import "./css/footer.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { RestaurantPage } from "./screens/RestaurantPage";
import { CommunityPage } from "./screens/CommunityPage";
import OrdersPage from "./screens/OrdersPage";
import { MembersPage } from "./screens/MembersPage";
import { HelpPage } from "./screens/HelpPage";
import { LoginPage } from "./screens/LoginPage";
import HomePage from "./screens/HomePage";
import { NavbarHome } from "./components/header";
import { NavbarRestaurant } from "./components/header/restaurant";
import { NavbarOthers } from "./components/header/others";
import { Footer } from "./components/footer";
import AuthenticationModal from "./components/auth";
import { Member } from "./types/user";
import { serverApi } from "../lib/config";
import { sweetFailureProvider, sweetTopSmallSuccessAlert } from "../lib/sweetAlert";
import { Definer } from "../lib/Definer";
import MemberApiService from './apiServices/memberApiService';
import  "../app/apiServices/verify.ts"

function App() {
  // **  INITIALIZATIONS */
  const [virifiedMemberData, setVirifiedMemberData] = useState<Member | null>(
    null
  );
  const [path, setPath] = useState();
  const main_path = window.location.pathname;
  const [signUpOpen, setSignUpOpen] = useState(false);
  const [loginOpne, setLoginOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);



  // * HANDLERS* //
  const handleSignUpOpen = () => setSignUpOpen(true);
  const handleSignUpClose = () => setSignUpOpen(false);
  const handleLoginOpen = () => setLoginOpen(true);
  const handleLoginClose = () => setLoginOpen(false);

  const handleLogOutClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseLogOut = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(null);
  };

  const handleLogoutRequest = async()=>{
    try {
      const memberApiService = new MemberApiService()
      memberApiService.logOutRequest() 
      await sweetTopSmallSuccessAlert('success',700,true)
    } catch (err) {
      console.log(err);
      sweetFailureProvider(Definer.general_err1)
    }
  }
  useEffect(() => {
    console.log("=== useEffect: App ===");
    const memberDataJson: any = localStorage.getItem("member_data")
      ? localStorage.getItem("member_data")
      : null;
    const member_data = memberDataJson ? JSON.parse(memberDataJson) : null;
    if (member_data) {
      member_data.mb_image = member_data.mb_image
        ? `${serverApi}/${member_data.mb_image}`
        : "/auth/avatar.svg";
      setVirifiedMemberData(member_data);
    }
  }, [signUpOpen,loginOpne]);

  return (
    <Router>
      {main_path === "/" ? (
        <NavbarHome
          setPath={setPath}
          handleLoginOpen={handleLoginOpen}
          handleSignUpOpen={handleSignUpOpen}
          anchorEl={anchorEl}
          open={anchorEl}
          handleLogOutClick={handleLogOutClick}
          handleCloseLogOut={handleCloseLogOut}
          handleLogoutRequest={handleLogoutRequest}
          virifiedMemberData={virifiedMemberData}
        />
      ) : main_path.includes("/restaurant") ? (
        <NavbarRestaurant
          setPath={setPath}
          handleLoginOpen={handleLoginOpen}
          handleSignUpOpen={handleSignUpOpen}
          anchorEl={anchorEl}
          open={anchorEl}
          handleLogOutClick={handleLogOutClick}
          handleCloseLogOut={handleCloseLogOut}
          handleLogoutRequest={handleLogoutRequest}
          virifiedMemberData={virifiedMemberData}

        />
      ) : (
        <NavbarOthers
          setPath={setPath}
          handleLoginOpen={handleLoginOpen}
          handleLogOutClick={handleLogOutClick}
          anchorEl={anchorEl}
          open={anchorEl}
          handleCloseLogOut={handleCloseLogOut}
          handleSignUpOpen={handleSignUpOpen}
          handleLogoutRequest={handleLogoutRequest}
          virifiedMemberData={virifiedMemberData}
        />
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
        <Route path="/member-page">
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
      <Footer />
      <AuthenticationModal
        loginOpen={loginOpne}
        handleLoginOpen={handleLoginOpen}
        handleLoginClose={handleLoginClose}
        signUpOpen={signUpOpen}
        handleSignUpOpen={handleSignUpOpen}
        handleSignUpClose={handleSignUpClose}
      />
    </Router>
  );
}

export default App;
