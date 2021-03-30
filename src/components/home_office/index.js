import { Component } from "react";
// import { Redirect, Route, useRouteMatch } from "react-router-dom";
import Address from "../common/address";

class HomeOffice extends Component {
  state = {
    step: "",

    source: {
      location: "",
      address: "",
      updated: false
    },

    destination: {
      location: "",
      address: "",
      updated: false
    }
  };

  updateAddress = (type, location, address) => {
    this.setState({ [type]: { location, address }, updated: true });
  };

  render() {
    const { source, destination, step } = this.state;

    return (
      <>
        <Address
          title="Source address"
          {...source}
          updateAddress={this.updateAddress.bind(this, "source")}
        />

        <Address
          title="Destination address"
          {...destination}
          updateAddress={this.updateAddress.bind(this, "destination")}
        />
      </>
    );
  }
}

export default HomeOffice;
