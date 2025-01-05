import { useState, useMemo } from "react";
import Select, { SingleValue } from "react-select";
import countryList from "react-select-country-list";

interface SelectedOption {
  value: string;
  label: string;
}

function CountrySelector() {
  const [value, setValue] = useState<SingleValue<SelectedOption>>(null);
  const options = useMemo(() => countryList().getData(), []);

  const changeHandler = (selectedOption: SingleValue<SelectedOption>) => {
    setValue(selectedOption);
  };

  return (
    <Select
      placeholder="Select a country / region "
      className="w-72 placeholder:text-[#ACACAC] "
      options={options}
      value={value}
      onChange={changeHandler}
    />
  );
}

export default CountrySelector;
