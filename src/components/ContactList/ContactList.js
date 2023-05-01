import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectIsLoading, selectContacts, selectError, selectContactFilter } from 'redux/selectors';
import { fetchContacts } from "redux/operations";
import ItemContact from "../ItemContact/ItemContact";
import {List} from './ContactList.styled';

const ContactList = () => {
  //отримуємо інформацію з API
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  //отримуємо дані фільтру
  const contactFilter = useSelector(selectContactFilter);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  
  const visibleContacts = contactFilter
    ? contacts.filter(({ name }) =>
        name.toLowerCase().includes(contactFilter.toLowerCase())
      )
    : contacts;

  return (
    <List>
      {isLoading && <p>Loading contacts...</p>}
      {error && <p>{error}</p>}
      {visibleContacts.map(({id, name, phone}) => {
        return (
        <ItemContact key={id} id={id} name={name} phone={phone} />
        )
      })}    
    </List>
  )
}
export default ContactList;