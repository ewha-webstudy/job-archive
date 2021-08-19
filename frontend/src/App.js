// import { Grommet } from "grommet";
import { Route, Switch } from "react-router-dom";

import MainPage from "./pages/Main";
import CategoryPage from "./pages/Category";
import DetailInfoPage from "./pages/DetailPage";
import LoginPage from "./pages/Login";
import MyPage from "./pages/MyPage";
import { Main } from "grommet";

import axios from "axios";
import { useEffect } from "react";
// function App() {
//   return (
//       <Grommet className="App">
//         <CategoryPage />
//       </Grommet>
//   );
// }

function App() {

  return (
      <Switch>
        <Route path="/" exact>
          <MainPage />
        </Route>
        <Route path="/api/login">
          <LoginPage />
        </Route>
        <Route path="/api/signup">
          <MyPage />
        </Route>
        <Route path="/mypage">
          <MyPage />
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