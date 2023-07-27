import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import {
  selectVisibleContacts,
  selectIsLoading,
  selectError,
} from 'redux/selectors';
import { getContacts } from 'redux/contacts-api';
import { deleteContactById } from 'redux/contacts-api';
import {
  ContactItem,
  ContactName,
  ContactNumber,
  Button,
} from './ContactsList.styled';
import Loader from 'components/Loader/Loader';

const ContactsList = () => {
  const dispatch = useDispatch();
  const visibleContacts = useSelector(selectVisibleContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  return (
    <ul>
      {!error &&
        visibleContacts.map(({ id, name, phone }) => (
          <ContactItem key={id}>
            <ContactName>
              {name[0].toUpperCase() + name.substring(1)} :
              <ContactNumber>{phone}</ContactNumber>
            </ContactName>
            <Button
              type="button"
              onClick={() => dispatch(deleteContactById(id))}
            >
              Delete
            </Button>
          </ContactItem>
        ))}
      {isLoading && <Loader />}
    </ul>
  );
};

export default ContactsList;
