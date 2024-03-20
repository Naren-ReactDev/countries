import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { updateCountryDetails } from "./redux/actions";

const CountryCardDiv = styled.div`
  width: 200px;
  border-radius: 4px;
  padding-bottom: 30px;
  &:hover {
    cursor: pointer;
  }
`;
const CountryImage = styled.img`
  width: 200px;
  height: auto;
`;

const CountryCardDetails = styled.div`
  padding: 20px 0 0 20px;
  font-weight: 600;
  font-size: 12px;
`;
const CountryName = styled.div`
  font-weight: 800;
  font-size: 16px;
  padding-bottom: 10px;
`;
const LabelSpan = styled.span`
  font-weight: 800;
  padding-right: 4px;
`;

const CountryCard = ({ country }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const updateCountry = () => {
    dispatch(updateCountryDetails(country));
    navigate("/countryDetails");
  };

  return (
    <CountryCardDiv
      id="coutryCardDiv"
      onClick={() => {
        updateCountry();
      }}
    >
      <div style={{ height: "150px" }}>
        <CountryImage src={country.flag} alt={country.flag}></CountryImage>
      </div>
      <CountryCardDetails>
        <CountryName>{country.name}</CountryName>
        <div>
          <LabelSpan>Population:</LabelSpan>
          {country.population}
        </div>
        <div>
          <LabelSpan>Region:</LabelSpan>
          {country.region}
        </div>
        <div>
          <LabelSpan>Capital:</LabelSpan>
          {country.capital}
        </div>
      </CountryCardDetails>
    </CountryCardDiv>
  );
};
export default CountryCard;
