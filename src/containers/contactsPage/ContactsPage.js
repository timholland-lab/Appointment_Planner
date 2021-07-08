import  React, {useState, useEffect} from "react";
import {ContactForm} from '../../../src/components/contactForm/ContactForm';
import {TileList} from '../../../src/components/tileList/TileList';

export const ContactsPage = ({contacts, addContact}) => {

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email , setEmail ] = useState('');
  const [duplicate, setDuplicate] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    addContact(name, phone, email);
    setName('');
    setPhone('');
    setEmail('');
  };

  useEffect(() => {

    const isDuplicate = () => {
        const found = contacts.find((element) => element.name === name);
        if (found !== undefined) {
          return true;
        }
        return false;
    }
    if (isDuplicate) {
      setDuplicate(true);
    } else 
      setDuplicate(false);

  }, [name])

  const callbackFunction = () => {
    console.log('callbackFunction');
  }

  return (
    <div>
      <section>
        <h2>Add Contact</h2> 
        <ContactForm 
          name={name}          
          setName={setName}
          phone={phone}
          setPhone= {setPhone}
          email={email}
          setEmail={setEmail}
          handleSubmit={handleSubmit}

        />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList tiles={contacts} />
      </section>
    </div>
  );
};
