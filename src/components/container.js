import Category from "./category/Category";
import "../static/styles/app.scss";
import {
  HashRouter as Router,
  Redirect,
  Route,
  Switch
} from "react-router-dom";
import { Routes } from "../config/app.config";
import HomeOffice from "./home_office";

const Container = () => {
  return (
    <div className="container">
      <Router>
        <Switch>
          <Route path={Routes.CATEGORIES}>
            <Category />
          </Route>

          <Route path={Routes.HOME_OFFICE}>
            <HomeOffice />
          </Route>

          <Route path="/">
            <Redirect to={Routes.CATEGORIES} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default Container;
