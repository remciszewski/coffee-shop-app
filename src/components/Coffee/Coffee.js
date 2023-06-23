import { Fragment } from "react";
import CoffeeSummary from "./CoffeeSummary";
import AvailableCoffee from "./AvailableCoffee";

const Coffee = () => {
  return (
    <Fragment>
      <CoffeeSummary />
      <AvailableCoffee />
    </Fragment>
  );
};

export default Coffee;
