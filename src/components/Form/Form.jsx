import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import { HtmlForm, Label, Input, Button } from 'components/Form/Form.styled';

export function Form({ onAddContact }) {
  const nameId = nanoid();
  const phoneId = nanoid();

  return (
    <HtmlForm onSubmit={onAddContact}>
      <Label htmlFor={nameId}>{'Name'}</Label>
      <Input
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        id={nameId}
      />

      <Label htmlFor={phoneId}>{'Phone'}</Label>
      <Input
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        id={phoneId}
      />

      <Button>{'Add contact'}</Button>
    </HtmlForm>
  );
}

Form.propTypes = {
  onAddContact: PropTypes.func.isRequired,
};
