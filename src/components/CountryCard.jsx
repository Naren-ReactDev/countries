import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { updateCountryDetails } from "./redux/actions";

const CountryCardDiv = styled.div`
  width: 200px;
  border-radius: 4px;
  padding-bottom: 30px;
  box-shadow: 3px 3px 3px hsl(0, 3%, 94%);
  background-color: #ffffff;
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
const Countrylabel = styled.span`
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
      onClick={() => {
        updateCountry();
      }}
    >
      <div style={{ height: "150px" }}>
        <CountryImage src={country.flag}></CountryImage>
      </div>
      <CountryCardDetails>
        <CountryName>{country.name}</CountryName>
        <div>
          <Countrylabel>Population:</Countrylabel>
          {country.population}
        </div>
        <div>
          <Countrylabel>Region:</Countrylabel>
          {country.region}
        </div>
        <div>
          <Countrylabel>Capital:</Countrylabel>
          {country.capital}
        </div>
      </CountryCardDetails>
    </CountryCardDiv>
  );
};
export default CountryCard;
