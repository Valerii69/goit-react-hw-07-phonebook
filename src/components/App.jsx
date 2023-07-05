import Form from './Form';
import ContactsList from './ContactsList';
import Filter from './Filter';
import { Section, Title, Container } from './App.styled';

export function App() {
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
    </>
  );
}
