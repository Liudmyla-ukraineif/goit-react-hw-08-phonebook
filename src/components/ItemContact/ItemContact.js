import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";
import PropTypes from 'prop-types';
import { ContsctBlock, ContactName, ContactNumber, BtnDeleteContact } from './ItemContact.styled';


const ItemContact = ({id, name, number}) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(id));

  return (
    <ContsctBlock >
      <ContactName>{name}: </ContactName>
      <ContactNumber>{number}</ContactNumber>
      <BtnDeleteContact onClick={handleDelete}>Delete</BtnDeleteContact>
    </ContsctBlock>
  )
}

export default ItemContact;


ItemContact.propType = {
    id: PropTypes.node.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.number.isRequired,
}