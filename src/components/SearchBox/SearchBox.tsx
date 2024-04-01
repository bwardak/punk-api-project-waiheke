import { FormEventHandler } from 'react';
import './SearchBox.scss'

type SearchBoxProps = {
  label: string;
  searchTerm: string;
  handleInput: FormEventHandler<HTMLInputElement>
}

const SearchBox = ({ label, searchTerm, handleInput }: SearchBoxProps) => {
  return (
    <div className="search-box">
      <label htmlFor={label} className='search-box__label'>{label}</label>
      <input
        className="search-box__input"
        type="text"
        name={label}
        id={label}
        value={searchTerm}
        onInput={handleInput}
      />
    </div>
  );
}

export default SearchBox