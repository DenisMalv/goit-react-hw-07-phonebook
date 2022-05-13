// Создай хранилище с configureStore()
// Создай действия сохранения и удаления контакта, а также обновления фильтра. Используй функцию createAction().
// Создай редюсеры контактов и фильтра. Используй функцию createReducer() или createSlice().
// Свяжи React-компоненты с Redux-логикой при помощи хуков бибилиотеки react-redux.

import Filter from './Filter/Filter';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';

const App = () => {
  return (
    <main>
      <h1 className="titlePhonebook">Phonebook</h1>
      <ContactForm />
      <h2 className="titleContacts">Contacts</h2>
      <Filter />
      <ContactList />
    </main>
  );
  // }
};

export default App;
