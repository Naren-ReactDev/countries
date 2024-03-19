import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const BackButton = styled.button`
  width: 100px;
  margin: 30px 30px 30px 30px;
  background-color: #ffffff;
  box-shadow: 0 0 2px 2px hsl(0, 0%, 62%);
  border-radius: 4px;
  border-width: 0px;
  padding: 5px 10px;
`;

const CountryImage = styled.img`
  width: 400px;
  height: auto;
`;
const CountryDetails = () => {
  const navigate = useNavigate();
  const country = useSelector((state) => state);

  console.log(country.name);

  return (
    <>
      <BackButton onClick={() => navigate(-1)}>&lt;&nbsp;&nbsp;Back</BackButton>
      <div style={{ display: "flex",gap:'50px' }}>
        <div>
          <CountryImage src={country.flag}></CountryImage>
        </div>
        <div>
          Name : {country.name}
          <br />
          Population: {country.population}
          <br />
          Region: {country.region}
          <br />
          Subregion: {country.subregion}
          <br />
          Capital: {country.capital}
          <br />
          <h1>Styles in progress</h1>
        </div>
      </div>
    </>
  );
};
export default CountryDetails;
