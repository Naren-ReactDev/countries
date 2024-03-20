import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
.body{    
    width:1440px;
    margin:0 50px 0 50px;
    }
 body{
   font-family: "Nunito Sans", sans-serif;
   font-weight: 400;
   font-size: 12px; 
    background-color: ${(props) =>
      props.isDark===true
        ? props.theme.dark.DarkModeBackgroundColor
        : props.theme.lite.LightModeBackgroundColor};   
 }
 div #coutryCardDiv,#headerDiv,#regionFiltorSelect,#searchInputText,#backButton,{
   background-color: ${(props) =>
      props.isDark===true
        ? props.theme.dark.DarkModeElementsColor
        : props.theme.lite.LightModeElementsColor};
   color:  ${(props) =>
      props.isDark===true
        ? props.theme.dark.DarkModeTextColor:props.theme.lite.LightModeTextColor};
        box-shadow: ${(props) =>
         props.isDark===true
           ? props.theme.dark.DarkModeTextColor:' 2px 2px 3px rgb(219, 218, 218)'};     
 }
 div #headerDiv{

   box-shadow: ${(props) =>
      props.isDark===true
        ? props.theme.dark.DarkModeTextColor:'0px 2px 0px hsl(0, 3%, 94%)'}; 
 }   

 div #backButton{
   box-shadow: ${(props) =>
      props.isDark===true
        ? props.theme.dark.DarkModeTextColor:'0 0 2px 2px hsl(0, 0%, 62%)'}; 
 } 

 div #countryDetailsDiv,#borderCountriesDiv{
   color:  ${(props) =>
      props.isDark===true
        ? props.theme.dark.DarkModeTextColor:props.theme.lite.LightModeTextColor};
 }   

`;


  
