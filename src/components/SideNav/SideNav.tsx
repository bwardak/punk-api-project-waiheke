import { useState } from "react";
import { FormEvent } from "react";
import SearchBox from "../SearchBox/SearchBox";
import "./SideNav.scss";
import FilterButtons from "../FilterButtons/FilterButtons";
import { Button } from "../Button/Button";

type SearchValue = {
  onSearchTermChange: (value: string) => void;
  onAbvCheckBoxChange: (value: boolean) => void;
  onClassicCheckBoxChange: (value: boolean) => void;
  onAcidityCheckBoxChange: (value: boolean) => void;
  onSideNavMenuToggle: (value: boolean) => void;
};

const SideNav = ({
  onSearchTermChange,
  onAbvCheckBoxChange,
  onClassicCheckBoxChange,
  onAcidityCheckBoxChange,
  onSideNavMenuToggle
}: SearchValue) => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [abvChecked, setAbvChecked] = useState<boolean>(false);
  const [classicChecked, setClassicChecked] = useState<boolean>(false);
  const [acidityChecked, setAcidityChecked] = useState<boolean>(false);
  const [sideNavToggled, setSideNavToggled] = useState<boolean>(false);

  onAbvCheckBoxChange(abvChecked);
  onClassicCheckBoxChange(classicChecked)
  onAcidityCheckBoxChange(acidityChecked)
  onSideNavMenuToggle(sideNavToggled)
  

  const handleToggleMenu = () => {
    setSideNavToggled(!sideNavToggled)
  }

  const handleInput = (event: FormEvent<HTMLInputElement>) => {
    const cleanInput = event.currentTarget.value.toLowerCase();
    setSearchTerm(cleanInput);
    onSearchTermChange(cleanInput);
  };

  const onAbvCheck = () => {
    setAbvChecked(!abvChecked);
  };

  const onClassicCheck = () => {
    setClassicChecked(!classicChecked)
  };

  const onAcidityCheck = () => {
    setAcidityChecked(!acidityChecked)
  }

  return (
    <div className={`nav ${sideNavToggled ? 'shown' : 'hidden'}`}>
      <i className="fas fa-bars" id="menu" onClick={handleToggleMenu}></i>
      <SearchBox
        label="Search: "
        searchTerm={searchTerm}
        handleInput={handleInput}
        placeholder="Search for beer..."
      />
      <FilterButtons
        label="High ABV"
        checked={abvChecked}
        handleCheck={onAbvCheck}
      />
      <FilterButtons
        label="Classic Range"
        checked={classicChecked}
        handleCheck={onClassicCheck}
      />
      <FilterButtons
        label="High Acidity"
        checked={acidityChecked}
        handleCheck={onAcidityCheck}
      />
    </div>
  );
};

export default SideNav;
