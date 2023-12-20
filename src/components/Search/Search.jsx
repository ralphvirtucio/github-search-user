import { IconSearch } from '../../assets/IconSearch';
import './Search.scss';

export const Search = ({ search, onChangeUser, onSearchUser }) => {
  function handleSearchUser({ target }) {
    const githubUser = target.value;
    onChangeUser(githubUser);
  }

  return (
    <div className='search'>
      <form
        className='search__form'
        onSubmit={onSearchUser}>
        <span className='search__form-icon-container'>
          <IconSearch />
        </span>

        <input
          type='text'
          placeholder='Search GitHub username'
          className='search__form-input'
          value={search}
          onChange={handleSearchUser}
        />

        <button
          type='submit'
          className='search__form-btn'>
          Search
        </button>
      </form>
    </div>
  );
};
