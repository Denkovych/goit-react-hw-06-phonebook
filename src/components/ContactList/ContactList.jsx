import {ContactListItem} from 'components/ContactListItem';
import s from './ContactList.module.css';

import {
  selectContacts,
  deleteContact,
  
} from 'redux/ContactSlice';
import { useSelector, useDispatch } from 'react-redux/es/exports';

function ContactList() {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();


  return (
    <ul className={s.contactList}>
      {contacts.map(({ name, number, id }) => (
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