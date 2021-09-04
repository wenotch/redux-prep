import { Heading } from "@chakra-ui/layout";
import React from "react";
import { useSelector } from "react-redux";

function Balance() {
    const amount = useSelector(state => state.amount)
  return (
    <div>
      <Heading as="h4"> ${amount}</Heading>
    </div>
  );
}

export default Balance;
