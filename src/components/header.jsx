import styled from "styled-components";
import DarkModeImage from "../images/darkMode.svg";
import { useDispatch } from "react-redux";
import { updateDarkMode } from "./redux/actions";
const HeaderDiv = styled.div`
  background-color: white;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px 0 50px;
  border: none;
`;
const HeaderTitleText = styled.p`
  font-weight: 800;
  font-size: 18px;
`;

const DarkModeText = styled.p`
  font-size: 13px;
  &:hover {
    cursor: pointer;
  }
`;
const DarkImageTag = styled.img`
  width: 20px;
`;

const DarkThemeDIV = styled.div`
  display: flex;
  gap: 10px;
`;
const Header = ({ isDark }) => {

  const dispatch=useDispatch();
  return (
    <HeaderDiv id="headerDiv">
      <div>
        <HeaderTitleText>Where in the world?</HeaderTitleText>
      </div>
      <DarkThemeDIV>
        <DarkImageTag src={DarkModeImage} alt=""></DarkImageTag>
        <DarkModeText onClick={() => dispatch(updateDarkMode(!isDark))}>
          {isDark ? "Light mode" : "Dark Mode"}
        </DarkModeText>
      </DarkThemeDIV>
    </HeaderDiv>
  );
};
export default Header;
