export default (state, action) => {
  switch (action.type) {
    case "DELETE_TRANSECTION":
      return {
        ...state,
        transections: state.transections.filter(
          (transaction) => transaction.id !== action.payload
        ),
      };
    case "ADD_TRANSECTION":
      return {
        ...state,
        transections: [action.payload, ...state.transections],
      };
    default:
      return state;
  }
};
