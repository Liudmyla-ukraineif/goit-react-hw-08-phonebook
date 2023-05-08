import { useDispatch, useSelector } from "react-redux";
import { selectContactFilter } from "../../redux/contacts/selectors";
import { changeFilter } from "../../redux/contacts/filtersSlice";
import { Box, TextField } from '@mui/material';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectContactFilter);

  const handleChangeFilter = ({ target }) => {  
    dispatch(changeFilter(target.value));
  };

  return (
    <Box sx={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'center', mt: '1.5rem'}}>
      <label>
        Find contacts by name
        <TextField
          id="input-with-icon-textfield"
          variant="standard"
          type="text"
          
          onChange={handleChangeFilter} value={filter}
          sx={{ mb: '1.5rem', ml: '1rem' }}
          
        />
      </label>
    </Box>
  )
}


export default Filter;