import { useState } from "react";
import AddressForm from "./address_form";

const Address = ({ title, location, address, updateAddress }) => {
  const [edit, editMode] = useState(true);

  const update = (l, a) => {
    updateAddress(l, a);
    editMode(false);
  };

  return (
    <div>
      <h3>{title}</h3>

      {(edit && (
        <AddressForm location={location} address={address} update={update} />
      )) || (
        <div>
          <div className="card">
            <div className="card-body">{address}</div>
            <div className="card-footer">Location - {location}</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Address;
