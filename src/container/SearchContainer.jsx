import { Search } from '../components/Search/Search';

const SearchContainer = ({ search, onChangeUser, onSearchUser }) => {
  return (
    <Search
      search={search}
      onChangeUser={onChangeUser}
      onSearchUser={onSearchUser}
    />
  );
};

export default SearchContainer;
