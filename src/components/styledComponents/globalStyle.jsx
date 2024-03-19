import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
.body{ 
    font-family: "Nunito Sans", sans-serif;
    font-weight: 600;
    font-style: 14px;    
    color:${(props)=>props.theme.lite.LightModeTextColor};
    width:1440px;
    margin:0 50px 0 50px;
    }
 body{
    background-color: ${(props)=>props.theme.lite.LightModeBackgroundColor};   
 }   
`;
