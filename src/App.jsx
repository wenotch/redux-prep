import Account from "./components/Account";
import Auth from "./components/Auth";
import Balance from "./components/Balance";
import Banking from "./components/Banking";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <Auth />
        <Balance />
        <Banking />
        <Account />
      </div>{" "}
    </ChakraProvider>
  );
}

export default App;
