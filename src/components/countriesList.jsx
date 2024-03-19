import styled from "styled-components";
import countryList from "../data.json";
import CountryCard from "./CountryCard";
import { useMemo, useState } from "react";

const SearchBarDiv = styled.div`
  width: auto;
  display: flex;
  justify-content: space-between;
  padding-top: 50px;
`;
const SearchInputText = styled.input`
  width: 300px;
  height: 40px;
  background-color: #ffffff;
  border: none;
  box-shadow: 2px 2px 3px rgb(219, 218, 218);
  border-radius: 4px;
  padding-left: 15px;
  margin-bottom: 50px;
`;
const RegionFiltorSelect = styled.select`
  width: 150px;
  height: 40px;
  background-color: #ffffff;
  border: none;
  box-shadow: 2px 2px 3px rgb(219, 218, 218);
  border-radius: 4px;
  padding-left: 15px;
`;
const CountriesDIV = styled.div`
  display: flex;
  gap: 40px;
  width: 1440px;
  flex-wrap: wrap;
`;
const CountriesList = () => {
  //I should use redux to retain values on back button click on the dtails page.
  const [searchText, setSerachText] = useState();
  const [selectedRegion, setSelectedRegion] = useState();

  const loadCountires = countryList.map((country) => {
    if (
      (!searchText ||
        country.name.toUpperCase().startsWith(searchText.toUpperCase())) &&
      (!selectedRegion || country.region === selectedRegion)
    ) {      
      return <CountryCard country={country} />;
    }else{
      return null;
    }
  });

  const loadRegionOptions = useMemo(() => {
    return ["Africa", "Americas", "Asia", "Europe", "Oceania"].map((region) => {
      return <option key={region}>{region}</option>;
    });
  }, []);

  return (
    <div className="body">
      <SearchBarDiv>
        <SearchInputText
          type="text"
          value={searchText}
          onChange={(e) => {
            setSerachText(e.target.value);
          }}
          placeholder="Search for a country..."
        />
        <RegionFiltorSelect
          onChange={(e) => {
            setSelectedRegion(e.target.value);
          }}
        >
          <option value="">Filter by region</option>
          {loadRegionOptions}
        </RegionFiltorSelect>
      </SearchBarDiv>
      <CountriesDIV>{loadCountires}</CountriesDIV>
    </div>
  );
};
export default CountriesList;
