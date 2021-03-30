import { useState } from "react";

const AddressForm = ({ location, address, update }) => {
  const [l, setLocation] = useState(location);
  const [a, setAddress] = useState(address);

  const submitHandler = (e) => {
    e.preventDefault();
    update(l, a);
  };

  return (
    <div className="m-4">
      <form onSubmit={submitHandler}>
        <div className="form-group">
          <label htmlFor="from-address">Location</label>
          <input
            value={l}
            onChange={(e) => {
              setLocation(e.target.value);
            }}
            required="required"
            type="text"
            className="form-control"
            id="from-address"
          />
        </div>

        <div className="form-group">
          <label htmlFor="full-from-address">Complete address</label>
          <textarea
            value={a}
            onChange={(e) => {
              setAddress(e.target.value);
            }}
            required="required"
            className="form-control"
            id="full-from-address"
            rows="3"
          />
        </div>

        <div className="form-group">
          <button type="submit" className="btn btn-primary">
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddressForm;
