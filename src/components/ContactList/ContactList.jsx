import {ContactListItem} from 'components/ContactListItem';
import s from './ContactList.module.css';

import {
  selectContacts,
  deleteContact,
  selectFilter,

} from 'redux/ContactSlice';
import { useSelector, useDispatch } from 'react-redux/es/exports';

function ContactList() {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();
  
  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase()));
    console.log(contacts)
  return (
    <ul className={s.contactList}>
      {visibleContacts.map(({ name, number, id }) => (
            <ContactListItem
              name={name}
              number={number}
              key={id}
              handleClick={() => dispatch(deleteContact(id))}
            />
          ))}
    </ul>
  );
}

export { ContactList };
