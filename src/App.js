import CountriesList from "./components/countriesList";
import { GlobalStyles } from "./components/styledComponents/globalStyle";
import { ThemeProvider } from "styled-components";
import "./App.css";
import { theme } from "./components/styledComponents/theme";
import Header from "./components/header";
import { Route, Routes } from "react-router-dom";
import CountryDetails from "./components/countryDetails";
import { useSelector } from "react-redux";


function App() {


const isDark=useSelector((state)=>{
 return state.isDark;
})
  

  console.log("isDark===>" + isDark);
  return (
 
      <ThemeProvider theme={theme}>
        <GlobalStyles isDark={isDark} />
        <Header  isDark={isDark} />
        <Routes>
          <Route exact path="/countries" element={<CountriesList />} />
          <Route exact path="/countryDetails" element={<CountryDetails />} />
        </Routes>
      </ThemeProvider>

  );
}

export default App;
