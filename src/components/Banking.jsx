import React from "react";
import {
  Button,
  ButtonGroup,
  Input,
  FormControl,
  Stack,
} from "@chakra-ui/react";
function Banking() {
  return (
    <div>
      <FormControl id="amount">
        <Input type="email" />
        <Stack direction="row" spacing={4} align="center">
          <ButtonGroup>
                 <Button colorScheme="teal" variant="solid">
              Deposit
            </Button>
            <Button colorScheme="green" variant="solid">
              Withdraw
            </Button>
            <Button colorScheme="red" variant="solid">
              Collect Interest
            </Button>
            <Button colorScheme="yellow" variant="solid">
              Change account Type
            </Button>
          </ButtonGroup>
        </Stack>
      </FormControl>
    </div>
  );
}

export default Banking;
