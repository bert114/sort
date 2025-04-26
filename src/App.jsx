import "./scss/style.scss";
import {
  BrowserRouter,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import Search from "./components/Search";
import Create from "./components/Create";
import MainLayout from "./layout/MainLayout";
import Dashboard from "./layout/Dashboard";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route index element={<Dashboard />} />
      <Route path="/create" element={<Create />} />
    </>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
