import { useState } from 'react';
import './App.css';
import { ContactForm } from '../ContactForm/ContactForm';
import { SearchBox } from '../SearchBox/SearchBox';
import { ContactList } from '../ContactList/ContactList';
import { IoPerson } from 'react-icons/io5';
import { BsFillTelephoneFill } from 'react-icons/bs';

function App() {
  let telefon = [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ];
  //   const [count, setCount] = useState(0)
  // const vb = users.filter(user=>user.toLowerCase().includes(count.toLowerCase()))
  return (
    <>
      <ContactForm />
      <SearchBox />
      <ContactList telefon={telefon} />
          </>
  );
}

export default App;
