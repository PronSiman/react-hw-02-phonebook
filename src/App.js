import React, { Component } from 'react';
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

const Wrapper = styled.div`
  width: 375px;
  margin: 0 auto;
  padding-bottom: 20px;
  border: 1px solid;
`;
const MainTitle = styled.h1`
  text-align: center;
`;

const SubTitle = styled.h2`
  text-align: center;
`;

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
      { id: 'id-5', name: 'lex', number: '227-91-27' },
    ],
    filter: '',
  };

  addNewContact = (name, number) => {
    const { contacts } = this.state;
    const findNameInCurrentState = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase(),
    );
    if (findNameInCurrentState) {
      // eslint-disable-next-line no-alert
      alert(`${name} is already in contacts`);
    } else {
      const newContact = {
        id: uuidv4(),
        name,
        number,
      };
      this.setState(prevState => {
        return {
          contacts: [...prevState.contacts, newContact],
        };
      });
    }
  };

  changeFilter = filter => {
    this.setState({ filter });
  };

  filterContacts = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()),
    );
  };

  deleteContact = id => {
    const { contacts } = this.state;
    const contactsAfterDelete = contacts.filter(contact => contact.id !== id);

    this.setState(() => {
      return {
        contacts: [...contactsAfterDelete],
      };
    });
    console.log(id);
  };

  render() {
    const { contacts, filter } = this.state;
    const filtredContacts = this.filterContacts();
    return (
      <Wrapper>
        <MainTitle>Phonebook</MainTitle>
        <ContactForm addNewContact={this.addNewContact} />
        {contacts.length > 0 && (
          <div>
            <SubTitle>Contacts</SubTitle>
            <Filter
              value={filter}
              onFilterChage={this.changeFilter}
              contacts={contacts}
            />
            <ContactList
              contacts={filtredContacts}
              deleteContact={this.deleteContact}
            />
          </div>
        )}
      </Wrapper>
    );
  }
}


export default App;
