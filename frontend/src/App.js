// import { Grommet } from "grommet";
import { Route, Switch } from "react-router-dom";

import MainPage from "./pages/Main";
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
<<<<<<< HEAD
=======

>>>>>>> d2be117153c18b64c69d0ccb4b14d95c9c801399
  );
}

export default App;
