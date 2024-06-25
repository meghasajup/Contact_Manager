import React, { useState } from 'react';
import './App.css';

function App() {
  const [contacts, setContacts] = useState([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleAddContact = () => {
    if (name === '' || email === '') {
      alert('All the fields are mandatory!');
      return;
    }
    setContacts([...contacts, { name, email }]);
    setName('');
    setEmail('');
  };

  const handleDeleteContact = (email) => {
    setContacts(contacts.filter(contact => contact.email !== email));
  };

  return (
    <div className="App">
      <h1>Contact Manager</h1>
      <div>
        <h2>Add Contact</h2>
        <div>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button onClick={handleAddContact}>Add</button>
      </div>
      <div>
        {contacts.map((contact) => (
          <div key={contact.email} className="contact">
            <span>{contact.name}</span>
            <span>{contact.email}</span>
            <button onClick={() => handleDeleteContact(contact.email)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
