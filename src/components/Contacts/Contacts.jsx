import { useSelector } from 'react-redux';
import { ContactsList } from 'components/Contacts/Contacts.styled';
import { Contact } from 'components/Contacts/Contact/Contact';

export function Contacts() {
  const contacts = useSelector(state => state.contacts.contacts);
  const filterValue = useSelector(state => state.filterValue);

  const getfilteredItems = () => {
    const filteredItems = contacts.filter(contact => {
      return (
        contact.name.toLowerCase().includes(filterValue.toLowerCase()) ||
        contact.number.includes(filterValue)
      );
    });
    return filterValue ? filteredItems : contacts;
  };

  return (
    <ContactsList>
      {getfilteredItems().map(contact => {
        const { name, number, id } = contact;
        return (
          <Contact key={id} content={` ${name}: ${number}`} id={id}></Contact>
        );
      })}
    </ContactsList>
  );
}
