import React, { Component } from "react";
import { Grommet } from "grommet";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./pages/Main";
import ScrollToTop from "./components/ScrollToTop";
import Footer from "./components/Footer/Footer";
import NavBarContainer from "./containers/NavBarContainer";
import CategoryPage from "./pages/Category";
import DetailInfoPage from "./pages/DetailPage";
import LoginPage from "./pages/Login";
import MyPage from "./pages/MyPage";
import SignupPage from "./pages/Signup";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Switch>
        <>
          <Grommet className="App">
            <NavBarContainer />
            <Route path="/" exact component={Main} />
            <Route path="/category/:category/:search" exact component={CategoryPage} />
            <Route path="/category/:category/" exact component={CategoryPage} />
            <Route path="/job/:id" exact component={DetailInfoPage} />
            <Route path="/member/auth" exact component={LoginPage} />
            <Route path="/member/create" exact component={SignupPage} />
            <Route path="/mypage/:id" exact component={MyPage} />
            <Footer />
          </Grommet>
        </>
      </Switch>
    </Router>
  );
}

export default App;
