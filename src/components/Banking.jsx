import React, { useState } from "react";
import {
  Button,
  ButtonGroup,
  Input,
  FormControl,
  Stack,
} from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import {
  collectInterest,
  deleteAccount,
  deposit,
  toggleAccount,
  withdrawal,
} from "../redux/actions/bankingAction";

function Banking() {
  const [amount, setAmount] = useState("");
  const dispatch = useDispatch();
  const handleDeposit = () => {
    dispatch(deposit(amount));
  };
  const handleWithdrawal = () => {
    dispatch(withdrawal(amount));
  };
  const handleInterest = () => {
    dispatch(collectInterest());
  };
  const handleDelete = () => {
    dispatch(deleteAccount());
  };
  const handleAccountType = () => {
    dispatch(toggleAccount());
  };
  return (
    <div>
      <FormControl id="amount">
        <Input
          value={amount}
          onChange={(e) => {
            setAmount(e.target.value);
          }}
          type="email"
        />
        <Stack direction="row" spacing={4} align="center">
          <ButtonGroup>
            <Button onClick={handleDeposit} colorScheme="teal" variant="solid">
              Deposit
            </Button>
            <Button
              onClick={handleWithdrawal}
              colorScheme="green"
              variant="solid"
            >
              Withdraw
            </Button>
            <Button onClick={handleInterest} colorScheme="red" variant="solid">
              Collect Interest
            </Button>
            <Button onClick={handleDelete} colorScheme="red" variant="solid">
              Delete Account
            </Button>
            <Button
              onClick={handleAccountType}
              colorScheme="yellow"
              variant="solid"
            >
              Change account Type
            </Button>
          </ButtonGroup>
        </Stack>
      </FormControl>
    </div>
  );
}

export default Banking;
