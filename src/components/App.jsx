import { Form } from 'components/Form/Form';
import { Section } from 'components/Section/Section';
import { SectionMain } from 'components/SectionMain/SectionMain';
import { Contacts } from 'components/Contacts/Contacts';
import { Search } from 'components/Search/Search';

export function App() {
  return (
    <>
      <SectionMain title="Phonebook">
        <Form />
        <Section title="Contacts">
          <Search />
          <Contacts></Contacts>
        </Section>
      </SectionMain>
    </>
  );
}
