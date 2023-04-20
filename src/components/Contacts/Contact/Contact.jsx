import PropTypes from 'prop-types';
import { remove } from 'redux/contactsSlice';
import { useDispatch } from 'react-redux';
import {
  ContactItem,
  Delete,
} from 'components/Contacts/Contact/Contact.styled';

export function Contact({ content, id }) {
  const dispatch = useDispatch();

  const onContactDelete = evt => {
    dispatch(remove(evt.target.dataset.id));
  };

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
};
