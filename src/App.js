import axios from "axios";
import { createContext, lazy, Suspense, useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";
import AllServices from "./Components/HomeComponents/AllServices/AllServices";
import Spinner from "./Components/HomeComponents/Spinner/Spinner";
import { getDecodedUser } from "./Components/LoginAuth/LoginManager";
import NotFound from "./Components/NotFound/NotFound";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
const Dashboard = lazy(() => import("./Pages/Dashboard"));
const Home = lazy(() => import("./Pages/Home"));
const Login = lazy(() => import("./Pages/Login"));

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState(getDecodedUser());
  const [selectedService, setSelectedService] = useState([]);
  const [adminLoading, setAdminLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    axios
      .get(
        `https://bike-repair.onrender.com/isAdmin?email=${loggedInUser?.email}`
      )
      .then((res) => {
        setIsAdmin(res.data);
        setAdminLoading(false);
      })
      .catch((error) => toast.error(error.message));
  }, [loggedInUser?.email]);

  return (
    <UserContext.Provider
      value={{
        loggedInUser,
        setLoggedInUser,
        isAdmin,
        selectedService,
        setSelectedService,
      }}
    >
      <Router>
        <Toaster />
        <Suspense fallback={<Spinner />}>
          <Switch>
            <Route path="/home">
              <Home />
            </Route>
            <PrivateRoute path="/dashboard/:panel">
              <Dashboard adminLoading={adminLoading} />
            </PrivateRoute>
            <PrivateRoute path="/services">
              <AllServices />
            </PrivateRoute>
            <Route path="/login">
              <Login />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </Suspense>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
