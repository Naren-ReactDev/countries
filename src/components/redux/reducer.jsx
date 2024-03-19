const intialData = {};
export const Reducer = (state = intialData, action) => {
  switch (action.type) {
    case "updateCountryDetails":
      return {   
        ...action.country,
      }
    default:
      return state;
  }
};
