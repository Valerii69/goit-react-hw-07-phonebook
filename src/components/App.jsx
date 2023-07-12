import Form from './Form';
import ContactsList from './ContactsList';
import Filter from './Filter';
import { Section, Title, Container } from './App.styled';
import { selectError } from 'redux/selectors';
import { useSelector } from 'react-redux';
export function App() {
  const error = useSelector(selectError);
  return (
    <>
      <Container>
        <Section>
          <Title>Phonebook</Title>
          <Form />
        </Section>
        <Section>
          <Title>Contacts</Title>
          <Filter />
          <ContactsList />
        </Section>
      </Container>
      {error && <p>Something went wrong ...</p>}
    </>
  );
}
