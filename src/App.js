import './App.css';
import { Login, Signup } from "./components/index";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { LandingPage } from './pages';

const router = createBrowserRouter([
  {
    path: "/",
    element:<LandingPage />
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/user-page",
    element:<div>User Page</div>
  }
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
