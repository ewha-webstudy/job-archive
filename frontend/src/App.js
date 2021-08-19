import { Route, Switch } from "react-router-dom";

import MainPage from "./pages/Main";
import CategoryPage from "./pages/Category";
import DetailInfoPage from "./pages/DetailPage";
import LoginPage from "./pages/Login";
import MyPage from "./pages/MyPage";

function App() {
<<<<<<< HEAD

=======
>>>>>>> origin/backend/settings
  return (
<<<<<<< HEAD
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
=======
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
        <MyPage />
      </Route>
      <Route path="/category">
        <CategoryPage />
      </Route>
      <Route path="/detail">
        <DetailInfoPage />
      </Route>
    </Switch>
>>>>>>> origin/feature/my-page
  );
}



export default App;