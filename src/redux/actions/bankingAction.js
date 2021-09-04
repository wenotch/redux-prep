export const toggleAccount = () => {
  return {
    type: "TOGGLE_ACCOUNT",
  };
};
export const deposit = (amount) => {
  return { type: "DEPOSIT", amount: parseInt(amount) };
};
export const withdrawal = (amount) => {
  return { type: "WITHDRAWAL", amount: parseInt(amount) };
};
export const collectInterest = () => {
  return { type: "COLLECT_INTEREST" };
};
export const deleteAccount = () => {
  return { type: "DELETE" };
};
