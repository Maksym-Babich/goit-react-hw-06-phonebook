import { useSelector, useDispatch } from 'react-redux';
import { SearchField } from 'components/Search/Search.styled';
import { change } from 'redux/filterSlice';

export function Search() {
  const filterValue = useSelector(state => state.filterValue);
  const dispatch = useDispatch();

  const onFielterChange = event => {
    dispatch(change(event.currentTarget.value));
  };

  return (
    <SearchField
      type="text"
      placeholder="Search"
      value={filterValue}
      onChange={onFielterChange}
    />
  );
}
