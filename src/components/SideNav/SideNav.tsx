import { useState } from 'react';
import { FormEvent } from 'react';
import SearchBox from '../SearchBox/SearchBox'
import './SideNav.scss'

type SearchValue = {
  onSearchTermChange: (value: string) => void;
}


const SideNav = ({onSearchTermChange}: SearchValue) => {
  const [searchTerm, setSearchTerm] = useState<string>("");

  const handleInput = (event: FormEvent<HTMLInputElement>) => {
    const cleanInput = event.currentTarget.value.toLowerCase();
    setSearchTerm(cleanInput);
    onSearchTermChange(cleanInput)
    console.log(cleanInput);
    
  };


  return (
    <div className='nav'>
      <SearchBox label="Search: " searchTerm={searchTerm} handleInput={handleInput} />
    </div>
  )
}

export default SideNav