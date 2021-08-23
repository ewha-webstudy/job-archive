import { Grommet } from "grommet";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Main from "./pages/Main";
import ScrollToTop from "./components/ScrollToTop";
import Footer from "./components/Footer/Footer";
import NavBar from "./components/NavBar/NavBar";
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
            <NavBar />
            <Route path="/" exact component={Main} />
            <Route path="/category" exact component={CategoryPage} />
            <Route path="/detail" exact component={DetailInfoPage} />
            <Route path="/login" exact component={LoginPage} />
            <Route path="/signup" exact component={MyPage} />
            <Route path="/mypage" component={MyPage} />
            <Route path="/detail/:id" exact component={DetailInfoPage} />

            <Footer />
          </Grommet>
        </>
      </Switch>
    </Router>
  );
}

export default App;
