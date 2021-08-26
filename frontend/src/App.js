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

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Switch>
        <>
          <Grommet className="App">
            <NavBarContainer />
            <Route path="/" exact component={Main} />
            <Route
              path="/api/category/:category"
              exact
              component={CategoryPage}
            />
            <Route path="/api/job/:id" exact component={DetailInfoPage} />
            <Route path="/login" exact component={LoginPage} />
            <Route path="/api/mypage/profile" exact component={MyPage} />
            <Footer />
          </Grommet>
        </>
      </Switch>
    </Router>
  );
}

export default App;
