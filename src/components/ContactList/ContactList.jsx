import { Contact } from '../Contact/Contact';

export const ContactList = ({ telefon }) => {
  return (
    <ul>
      {telefon.map(val => {
        return (
          <li key={val.id}>
                     <Contact val={val} />
          </li>
        );
      })}
    </ul>
  );
};
