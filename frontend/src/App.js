import React, { Component } from "react";
import { Grommet } from "grommet";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./pages/Main";
import ScrollToTop from "./components/ScrollToTop";
import Footer from "./components/Footer/Footer";
import NavBar from "./components/NavBar/NavBar";
import CategoryPage from "./pages/Category";
import DetailInfoPage from "./pages/DetailPage";
import LoginPage from "./pages/Login";
import MyPage from "./pages/MyPage";
import Signup from "./components/Login/Signup";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // user id state 생성
      userId: "",
      logged: false, // 로그인 여부 default: false
      onLogin: this.onLogin,
      onLogout: this.onLogout,
    };
  }

  // 로그인 로직 처리
  onLogin = (userId) => {
    this.setState({
      userId: userId,
      logged: true,
    });
  };

  // 로그아웃 로직 처리
  onLogout = (userId) => {
    this.setState({
      logged: false,
    });

    // localStorage 지우기
    window.localStorage.clear();
  };

  componentDidMount() {
    const userId = window.localStorage.getItem("id");
    if (userId) {
      this.onLogin(userId);
    } else {
      this.onLogout();
    }
  }

  // 컴포넌트에 props 값 전달하는 함수
  _withProps = function (Component, props) {
    return function (matchProps) {
      return <Component {...props} {...matchProps} />;
    };
  };

  render() {
    const { logged, onLogout, userId } = this.state;
    return (
      <Router>
        <ScrollToTop />
        <Switch>
          <Grommet className="App">
            <NavBar logged={logged} onLogout={onLogout} />
            {/* user id를 Main 컴포넌트로 전달 */}
            <Route
              path="/"
              exact
              component={this._withProps(Main, logged, userId)}
            />
            <Route
              path="/api/category/:category"
              exact
              component={CategoryPage}
            />
            <Route path="/api/job/:id" exact component={DetailInfoPage} />
            <Route path="/login" exact component={LoginPage} />
            <Route path="/signup" exact component={MyPage} />
            <Route path="/mypage" component={MyPage} />
            <Footer />
          </Grommet>
        </Switch>
      </Router>
    );
  }
}

export default App;
