import { useDispatch, useSelector } from "react-redux";
import { selectContactFilter } from "../../redux/selectors";
import { changeFilter } from "../../redux/filtersSlice";

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectContactFilter);

  const handleChangeFilter = ({ target }) => {  
    dispatch(changeFilter(target.value));
  };

  return (
    <label>
      Find contacts by name
      <input type='text' onChange={handleChangeFilter} value={filter} />
    </label>
)};


export default Filter;