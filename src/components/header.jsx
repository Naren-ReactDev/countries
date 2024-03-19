import styled from "styled-components";
const HeaderDiv = styled.div`
background-color: white;
height: 50px;
display: flex;
justify-content: space-between;
align-items: center;
padding: 0 30px 0 50px;
border:none;
box-shadow: 0px 2px 0px hsl(0, 3%, 94%);
`;
const HeaderTitleText = styled.p`
font-weight: 800;
font-size: 18px;
`;

const DarkModeText = styled.p`
font-size: 13px;
`;
const Header = () => {
 

  return (
    <HeaderDiv>
      <div>
        <HeaderTitleText>Where in the world?</HeaderTitleText>
      </div>
      <div>
        <DarkModeText>Dark Mode</DarkModeText>
      </div>
    </HeaderDiv>
  );
};
export default Header;
