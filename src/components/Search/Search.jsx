import { IconSearch } from '../../assets/IconSearch';
import './Search.scss';

export const Search = () => {
  return (
    <div className='search'>
      <form className='search__form'>
        <span className='search__form-icon-container'>
        <IconSearch />
        </span>

        <input
          type='text'
          placeholder='Search GitHub username'
          className='search__form-input'
        />

        <button type='submit' className='search__form-btn'>Search</button>
      </form>
    </div>
  );
};
