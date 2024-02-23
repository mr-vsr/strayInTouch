import './App.css';
import { UserLogin, UserSignup, NgoLogin,NgoSignup } from "./components/index";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { LandingPage, LoginType, NgoHomePage } from './pages';

const router = createBrowserRouter([
  {
    path: "/",
    element:<LandingPage />
  },
  {
    path: "/type-of-login",
    element: <LoginType />
  },
  {
    path: "/user-login",
    element: <UserLogin />,
  },
  {
    path: "/user-signup",
    element: <UserSignup />,
  },
  {
    path: "/ngo-login",
    element: <NgoLogin />,
  },
  {
    path: "/ngo-signup",
    element: <NgoSignup />,
  },
  {
    path: "/user-page",
    element:<div>User Page</div>
  },
  {
    path: "/ngo-home-page",
    element:<NgoHomePage />
  }
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
