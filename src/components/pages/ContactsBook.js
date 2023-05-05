
// import { useDispatch, useSelector } from 'react-redux';
// import selectIsLoading from '../../redux/contacts/selectors';
import ContactForm from '../ContactForm/form';
import ContactList from '../ContactList/ContactList';
import Filter from '../Filter/Filter';

const ContactsBook = () => {
  // const dispatch = useDispatch();
  // const isLoadingContacts = useSelector(selectIsLoading);
  // const 




  return(
    <div>
      <h1>Phonebook</h1>
      <ContactForm />

      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  )
};

export default ContactsBook;