const initialState = 0;

export const bankingReducer = (state = initialState, action) => {
  switch (action.type) {
    case "DEPOSIT":
      return state + action.amount;
    case "WITHDRAWAL":
      return state - action.amount;
    case "COLLECT_INTEREST":
      return state * 1.03;
    case "DELETE_ACCOUNT":
      return 0;
    default:
      return state;
  }
};

// // deposit
// {
//   type: "DEPOSIT";
//   amount: 20;
// }

// //withdraw
// {
//   type: "WITHDRAWAL";
//   amount: 10;
// }

// //collect intrest
// {
//   type: "COLLECT_INTEREST";
// }

// // delete account
// {
//   type: "DELETE_ACCOUNT";
// }
