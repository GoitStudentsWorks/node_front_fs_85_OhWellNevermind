import { useEffect, useState } from "react";
import { StyledSelect } from "./TimeSelector.styled";
import { customStyles } from "./CustomSelect.styled";

export const TimeSelector = ({
  onSelectedOption,
  onSessionTime,
  onDefaultValue,
}) => {
  const getCurrentTime = () => {
    const now = new Date(onSessionTime);
    const hours = now.getHours().toString().padStart(2, "0");
    const minutes = now.getMinutes().toString().padStart(2, "0");
    return `${hours}:${minutes}`;
  };

  const defaultValue = { value: getCurrentTime(), label: getCurrentTime() };

  const [selectedOption, setSelectedOption] = useState(defaultValue);
  useEffect(() => {
    onDefaultValue(getCurrentTime());
  }, [getCurrentTime, onDefaultValue]);

  const generateTimeOptions = () => {
    const options = [];

    for (let hours = 0; hours < 24; hours++) {
      for (let minutes = 0; minutes < 60; minutes += 5) {
        const formattedHours = String(hours).padStart(2, "0");
        const formattedMinutes = String(minutes).padStart(2, "0");
        const timeString = `${formattedHours}:${formattedMinutes}`;

        options.push({ value: timeString, label: timeString });
      }
    }

    return options;
  };

  const handleChange = (selectedOption) => {
    setSelectedOption(selectedOption);
    onSelectedOption(selectedOption);
  };
  const getNewOptions = () => {
    const options = generateTimeOptions();

    const indexValue = options.findIndex(
      (e) => e.value === selectedOption.value
    );

    const firstPart = options.slice(indexValue);
    const secondPart = options.slice(0, indexValue);
    const reorderedArray = firstPart.concat(secondPart);
    console.log(reorderedArray);
    return reorderedArray;
  };

  return (
    <StyledSelect
      styles={customStyles}
      options={getNewOptions()}
      value={selectedOption}
      onChange={handleChange}
    />
  );
};
