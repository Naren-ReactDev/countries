
export const updateCountryDetails = (country) => {
  return {
    type: "updateCountryDetails",
    country
  }; 
};


export const updateDarkMode = (isDark) => {
  return {
    type: "updateDarkMode",
    isDark:isDark
  };
};
