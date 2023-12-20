import { Search } from '../components/Search/Search';

const SearchContainer = ({
  search,
  onChangeUser,
  onSearchUser,
  noSearchResult,
}) => {
  return (
    <Search
      search={search}
      onChangeUser={onChangeUser}
      onSearchUser={onSearchUser}
      noSearchResult={noSearchResult}
    />
  );
};

export default SearchContainer;
