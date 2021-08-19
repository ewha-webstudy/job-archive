import { Route, Switch } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";

import MainPage from "./pages/Main";
import CategoryPage from "./pages/Category";
import DetailInfoPage from "./pages/DetailPage";
import LoginPage from "./pages/Login";
import MyPage from "./pages/MyPage";
import Withdrawal from "./components/MyPage/Withdrawal";

function App() {
  const callApi = async () => {
    axios.get("/api/jobs").then((res) => console.log(res.data.test));
  };

  useEffect(() => {
    callApi();
  }, []);

  return (
    <Switch>
      <Route path="/" exact>
        <MainPage />
      </Route>
      <Route path="/login">
        <LoginPage />
      </Route>
      <Route path="/signup">
        <MyPage />
      </Route>
      <Route path="/mypage">
        <Withdrawal />
      </Route>
      <Route path="/category">
        <CategoryPage />
      </Route>
      <Route path="/detail">
        <DetailInfoPage />
      </Route>
    </Switch>
  );
}

export default App;
