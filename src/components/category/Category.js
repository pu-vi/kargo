import { Link } from "react-router-dom";
import { Routes } from "../../config/app.config";

const Category = () => (
  <div>
    <h2>choose type</h2>
    <ul>
      <li>
        <Link to={Routes.HOME_OFFICE}>Home &amp; Office</Link>
      </li>
      <li>
        <Link to={Routes.HOME_OFFICE}>Suitcases &amp; bags</Link>
      </li>
      <li>
        <Link to={Routes.HOME_OFFICE}>Full truckload</Link>
      </li>
    </ul>
  </div>
);

export default Category;
