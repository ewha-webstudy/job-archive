import { Grommet } from "grommet";
import CategoryPage from "./pages/Category";
import MainPage from "./pages/Main";
import LoginPage from "./pages/Login";
import LoginTemplate from "./components/Login/LoginTemplate";

function App() {
  return (
    <Grommet className="App">
      {/* <MainPage /> */}
      {/* <CategoryPage /> */}
      <LoginPage />
    </Grommet>
  );
}

export default App;
