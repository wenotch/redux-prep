import { Heading } from "@chakra-ui/layout";
import React from "react";
import { useSelector } from "react-redux";

function Account() {
  const isSavingsAccount = useSelector((state) => state.isSavingsAccount);
  return (
    <div>
      <Heading as="h4">
        {isSavingsAccount ? "Saving Account" : "checking account"}
      </Heading>
    </div>
  );
}

export default Account;
