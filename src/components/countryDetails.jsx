import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import BackArrow from "../images/backArrow.svg";

const BackButton = styled.button`
  width: 100px;
  margin: 40px 40px 40px 40px;
  border-radius: 4px;
  border-width: 0px;
  padding: 5px 10px;
  display: flex;
  gap: 5px;
  align-items: center;
  &:hover {
    cursor: pointer;
  }
`;
const CountryImage = styled.img`
  width: 300px;
`;
const BackArrowImage = styled.img`
  width: 17px;
`;
const LabelSpan = styled.span`
  font-weight: 800;
  padding-right: 4px;
  font-size: 12px;
`;

const CountryNameDIV = styled.div`
  font-weight: 800;
  font-size: 26px;
  padding-bottom: 10px;
`;
const CountryDetailsDiv = styled.div`
  display: flex;
  gap: 80px;
  margin-left: 40px;
  line-height: 23px;
`;
const CountryDetailsDiv2 = styled.div`
  margin-top: 56.5px;
`;
const BorderCountriesDiv = styled.div`
margin-left: 420px;
margin-top:-30px`;

const CountryDetails = () => {
  const navigate = useNavigate();
  const country = useSelector((state) => state.country);

  console.log(country.name);

  return (
    <>
      <BackButton id="backButton" onClick={() => navigate(-1)}>
        <BackArrowImage src={BackArrow} alt="No Image"></BackArrowImage>
        <label>Back</label>
      </BackButton>
      <CountryDetailsDiv id="countryDetailsDiv">
        <div>
          <CountryImage src={country.flag} alt="No Image" />
        </div>
        <div>
          <CountryNameDIV>{country.name}</CountryNameDIV>
          <br />
          <LabelSpan> Native Name:</LabelSpan> {country.nativeName}
          <br />
          <LabelSpan> Population:</LabelSpan> {country.population}
          <br />
          <LabelSpan> Region:</LabelSpan> {country.region}
          <br />
          <LabelSpan>Subregion:</LabelSpan> {country.subregion}
          <br />
          <LabelSpan> Capital:</LabelSpan> {country.capital}
          <br />
        </div>
        <CountryDetailsDiv2>
          <LabelSpan> Top Level Domain:</LabelSpan> {country.topLevelDomain}{" "}
          <br />
          <LabelSpan>Currencies:</LabelSpan>
          {country?.currencies
            ?.map((currenncy) => {
              return currenncy.name;
            })
            .join(", ")}
          <br />
          <LabelSpan>Languages:</LabelSpan>
          {country?.languages
            ?.map((currenncy) => {
              return currenncy.name;
            })
            .join(", ")}
        </CountryDetailsDiv2>
      </CountryDetailsDiv>
      <BorderCountriesDiv id="borderCountriesDiv">
        <LabelSpan>
          Border Countries:  </LabelSpan>
          {country?.borders
            ?.map((border) => {
              return border;
            })
            .join(", ")}
      
      </BorderCountriesDiv>
    </>
  );
};
export default CountryDetails;
