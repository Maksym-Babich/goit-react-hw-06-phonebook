import PropTypes from 'prop-types';
import { ContactsList } from 'components/Contacts/Contacts.styled';
import { Contact } from 'components/Contacts/Contact/Contact';

export function Contacts({ contacts, onContactDelete }) {
  return (
    <ContactsList>
      {contacts.map(contact => {
        const { name, number, id } = contact;
        return (
          <Contact
            key={id}
            content={` ${name}: ${number}`}
            id={id}
            onContactDelete={onContactDelete}
          ></Contact>
        );
      })}
    </ContactsList>
  );
}

Contacts.propTypes = {
  onContactDelete: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
