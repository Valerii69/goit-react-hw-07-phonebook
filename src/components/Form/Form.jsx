import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContacts } from 'redux/contacts-api';
import { Label, Input, Button, FormContainer } from './Form.styled';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { selectContacts } from 'redux/selectors';

const Form = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const handleChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setPhone(value);
        break;
      default:
        return;
    }
  };
  const handleSubmit = e => {
    e.preventDefault();

    if (contacts.some(contact => contact.name === name)) {
      Notify.warning(`${name} is already in contacts`);
      return;
    } else {
      dispatch(addContacts({ name, phone }));

      setName('');
      setPhone('');
    }
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <div>
        <Label>
          Name
          <Input
            type="text"
            name="name"
            value={name}
            autoComplete="on"
            onChange={handleChange}
            placeholder="Enter name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </Label>
        <Label>
          Number
          <Input
            type="tel"
            name="number"
            value={phone}
            autoComplete="on"
            onChange={handleChange}
            placeholder="Enter number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </Label>
      </div>
      <Button>Add new contact</Button>
    </FormContainer>
  );
};
export default Form;
