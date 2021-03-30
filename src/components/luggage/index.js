import { Redirect, Route, Switch, useRouteMatch } from "react-router-dom";
import Address from "../common/address";

const Luggage = () => {
  let { path, url } = useRouteMatch();

  return (
    <div>
      Lets get your luggage moving
      <Switch>
        <Route path={`${path}/source`}>
          <Address
            title="Source"
            location=""
            address=""
            updateAddress={() => {
              console.log("redirecting now");
              <Redirect to={`${path}/destination`} />;
            }}
          />
        </Route>

        <Route path={`${path}/destination`}>
          <Address
            title="Destination"
            location=""
            address=""
            updateAddress={() => {}}
          />
        </Route>

        <Route exact path={path}>
          <Redirect to={`${path}/source`} />
        </Route>
      </Switch>
    </div>
  );
};

export default Luggage;
