import { IconSearch } from '../../assets/IconSearch';

export const Search = () => {
  return (
    <div>
      <form>
        <IconSearch />

        <input
          type='text'
          placeholder='Search GitHub username...'
        />

        <button type='submit'>Search</button>
      </form>
    </div>
  );
};
