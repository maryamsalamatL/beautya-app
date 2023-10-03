import "./App.scss";
import Layout from "./layout/Layout";
import { Route, Routes } from "react-router-dom";
import routes from "./routes";
function App() {
  console.log("dumyy text");
  return (
    <Layout>
      <Routes>
        {routes.map((route) => (
          <Route {...route} key={route.path} />
        ))}
      </Routes>
    </Layout>
  );
}

export default App;
