import { useState } from 'react';
import { FormEvent } from 'react';
import SearchBox from '../SearchBox/SearchBox'
import './SideNav.scss'
import FilterButtons from '../FilterButtons/FilterButtons';

type SearchValue = {
  onSearchTermChange: (value: string) => void;
  onCheckBoxChange:(value: boolean) => void;
}


const SideNav = ({onSearchTermChange, onCheckBoxChange}: SearchValue) => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [checked, setChecked] = useState<boolean>(false)
  
  onCheckBoxChange(checked);

  const handleInput = (event: FormEvent<HTMLInputElement>) => {
    const cleanInput = event.currentTarget.value.toLowerCase();
    setSearchTerm(cleanInput);
    onSearchTermChange(cleanInput)
  };

  const onCheck = () => {
    setChecked(!checked);
  }


  return (
    <div className='nav'>
      <SearchBox label="Search: " searchTerm={searchTerm} handleInput={handleInput} />
      <FilterButtons label='High ABV' checked={checked} handleCheck={onCheck}/>
    </div>
  )
}

export default SideNav