import React from 'react';
import css from './ContactList.module.css';
import ContactItem from 'components/ContactItem/ContactItem';

import { useSelector } from 'react-redux';
import { getContacts, getFilterValue } from 'redux/contactsSlice/contactsSlice';

const ContactList = () => {
  const contactsList = useSelector(getContacts);
  const filteredContacts = useSelector(getFilterValue);

  const getFilteredContacts = () => {
    const normalizedFilter = filteredContacts.toLowerCase();
    return contactsList.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };
  return (
    <ul className={css.contactList}>
      {getFilteredContacts().map(({ id, name, number }) => (
        <ContactItem id={id} name={name} number={number} key={id} />
      ))}
    </ul>
  );
};

export default ContactList;
