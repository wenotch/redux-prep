const initialState = {
  amount: 0,
  isSavingsAccount: false,
};

export const bankingReducer = (state = initialState, action) => {
  switch (action.type) {
    case "DEPOSIT":
      return {...state, amount: state.amount + action.amount };
    case "WITHDRAWAL":
      return { ...state, amount: state.amount - action.amount };
    case "COLLECT_INTEREST":
      return { ...state, amount: state.amount * 1.03 };
    case "DELETE":
      return { ...state, amount: 0 };
    case "TOGGLE_ACCOUNT":
      return { ...state, isSavingsAccount: !state.isSavingsAccount };
    default:
      return state;
  }
};
