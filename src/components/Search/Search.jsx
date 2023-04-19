import PropTypes from 'prop-types';
import { SearchField } from 'components/Search/Search.styled';

export function Search({ search, onSearchInput }) {
  return (
    <SearchField
      type="text"
      placeholder="Search"
      value={search}
      onChange={onSearchInput}
    />
  );
}

Search.propTypes = {
  search: PropTypes.string.isRequired,
  onSearchInput: PropTypes.func.isRequired,
};
