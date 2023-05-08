import ContactForm from '../ContactForm/form';
import ContactList from '../ContactList/ContactList';
import Filter from '../Filter/Filter';
import { Container, Box, Typography } from '@mui/material';

const ContactsBook = () => {

  return (
    <Container>
      <Box>
        <Typography variant="h2" component="h1" color="primary" align="center">
          Phonebook
        </Typography>
        <ContactForm />
      </Box>

      <Box>
        <Typography variant="h2" component="h1" color="primary" align="center">
          Contacts
        </Typography>
        <Filter />
        <ContactList />
      </Box>
    </Container>
  );
};

export default ContactsBook;
