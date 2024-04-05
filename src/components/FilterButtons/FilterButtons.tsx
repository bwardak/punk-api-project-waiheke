import { ChangeEventHandler } from "react";
import "./FilterButtons.scss";

type FilterButtonsProps = {
  label: string;
  handleCheck: ChangeEventHandler<HTMLInputElement>;
  checked: boolean;
};

const FilterButtons = ({ label, handleCheck, checked }: FilterButtonsProps) => {
  return (
    <div className="filter-buttons">
      <label htmlFor={label} className="filter-buttons__label">
        {label}
      </label>
      <input
        className="filter-buttons__input"
        type="checkbox"
        name={label}
        id={label}
        checked={checked}
        onChange={handleCheck}
      />
    </div>
  );
};

export default FilterButtons;
