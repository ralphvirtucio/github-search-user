import { Search } from '../components/Search/Search';
import PropTypes from 'prop-types';

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

SearchContainer.propTypes = {
  search: PropTypes.string,
  onChangeUser: PropTypes.func,
  onSearchUser: PropTypes.func,
  noSearchResult: PropTypes.bool,
};

export default SearchContainer;
