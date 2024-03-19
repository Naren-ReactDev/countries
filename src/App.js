import CountriesList from "./components/countriesList";
import { GlobalStyles } from "./components/styledComponents/globalStyle";
import { ThemeProvider } from "styled-components";
import "./App.css";
import { theme } from "./components/styledComponents/theme";
import Header from "./components/header";
import { Route, Routes } from "react-router-dom";
import CountryDetails from "./components/countryDetails";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { Reducer } from "./components/redux/reducer";

function App() {
  const store =configureStore({
    reducer: Reducer
  })

  return (
    <Provider store={store}>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header/>
      <Routes>
        <Route exact path="/" element={<CountriesList />} />
        <Route exact path="/countryDetails" element={<CountryDetails />} />
      </Routes>
    </ThemeProvider>
    </Provider>
  );
}

export default App;
