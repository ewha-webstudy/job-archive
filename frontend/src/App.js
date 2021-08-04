// import { Grommet } from "grommet";
import { Route, Switch } from "react-router-dom";

import MainPage from "./pages/Main";
<<<<<<< HEAD
import CategoryPage from "./pages/Category";
import DetailInfoPage from "./pages/DetailPage";
import { Main } from "grommet";

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
      <Route path="/category">
        <CategoryPage />
      </Route>
      <Route path="/detail">
        <DetailInfoPage />
      </Route>
    </Switch>
=======
import LoginPage from "./pages/Login";
import MyPage from "./pages/MyPage";

function App() {
  return (
    <Grommet className="App">
      {/* <MainPage /> */}
      {/* <CategoryPage /> */}
      {/* <LoginPage /> */}
      <MyPage />
    </Grommet>
>>>>>>> feature/login-page
  );
}

export default App;
