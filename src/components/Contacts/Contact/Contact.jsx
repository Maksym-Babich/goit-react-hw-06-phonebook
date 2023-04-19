import PropTypes from 'prop-types';
import {
  ContactItem,
  Delete,
} from 'components/Contacts/Contact/Contact.styled';

export function Contact({ content, id, onContactDelete }) {
  return (
    <ContactItem>
      {content}{' '}
      <Delete data-id={id} onClick={onContactDelete}>
        Delete
      </Delete>
    </ContactItem>
  );
}

Contact.propTypes = {
  content: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onContactDelete: PropTypes.func.isRequired,
};
