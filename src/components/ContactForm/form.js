import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/contacts/operations';
import { selectContacts } from '../../redux/contacts/selectors';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import styled from 'styled-components';
import { Box, Grid } from '@mui/material';
import phonebook from '../../image/phonebook.png';

import * as yup from 'yup';

const nameRegExp = /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/;

const phoneRegExp =
  /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/;

const schema = yup.object().shape({
  name: yup
    .string()
    .matches(
      nameRegExp,
      "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
    )
    .required('Required'),
  number: yup
    .string()
    .max(9)
    .matches(
      phoneRegExp,
      'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
    )
    .required('Required'),
});

const Forma = styled(Form)`
  margin: 15px;
  padding: 8px;
  width: 400px;
  border: 1px solid grey;
  font-size: 16px;
`;

const Input = styled(Field)`
  display: block;
  margin: 10px 0;
  width: 320px;
  color: #807c7c;
  font-size: 14px;
`;

const Button = styled.button`
  margin: 10px 0;
`;

// початкові з-ня форми
const initialValues = {
  name: '',
  number: '',
};

export const ContactForm = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const handleSubmitForm = (data, actions) => {
    const isDuplicate = contacts.some(contact => contact.name === data.name);
    if (isDuplicate) {
      alert(`${data.name} is already in contacts`);
    } else {
      dispatch(addContact(data));
    }
    actions.setSubmitting(false);
    actions.resetForm();
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={1}>
        <Grid item xs={4}>

            <img src={phonebook} alt="phonebook" />

        </Grid>
        <Grid item xs={8}>

            <Formik
              initialValues={initialValues}
              validationSchema={schema}
              onSubmit={handleSubmitForm}
            >
              {({ isSubmitting }) => (
                <Forma>
                  <label>
                    Name
                    <Input type="text" name="name" />
                    <ErrorMessage component="div" name="name" />
                  </label>
                  <label>
                    Number phone
                    <Input type="tel" name="number" />
                    <ErrorMessage component="div" name="number" />
                  </label>
                  <Button type="submit" disabled={isSubmitting}>
                    Add contact
                  </Button>
                </Forma>
              )}
            </Formik>

        </Grid>
      </Grid>
    </Box>
  );
};

export default ContactForm;
