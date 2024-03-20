const intialData = {
  country:{
  },
  isDark:false
};
export const Reducer = (state = intialData, action) => {
  switch (action.type) {
    case "updateCountryDetails":
      return { 
        ...state,  
        country:action.country,
      }
      case "updateDarkMode":
        return { 
          ...state,  
          isDark:action.isDark,
        }
    default:
      return state;
  }
};
