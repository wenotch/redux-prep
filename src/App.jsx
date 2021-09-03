import Account from "./components/Account";
import Auth from "./components/Auth";
import Balance from "./components/Balance";
import Banking from "./components/Banking";

function App() {
  return (
    <div className="App">
      <Auth />
      <Balance />
      <Banking />
      <Account />
    </div>
  );
}

export default App;
