import React from 'react';
import styled from 'styled-components';
// eslint-disable-next-line import/no-extraneous-dependencies
import propTypes from 'prop-types';

const UserData = styled.span`
  margin-right: 16px;
  display: block;
`;
const DeleteButton = styled.button`
  padding: 5px;
  border: 1px solid;
  border-radius: 5px;
  cursor: pointer;
`;

const ListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-right: 16px;
  margin-bottom: 15px;
`;

const ContactList = ({ contacts, deleteContact }) => {
  return (
    <ul>
      {contacts.map(contact => {
        const { id, name, number } = contact;
        return (
          <ListItem key={id}>
            <UserData>
              {name}: {number}
            </UserData>
            <DeleteButton type="button" onClick={() => deleteContact(id)}>
              Удалить
            </DeleteButton>
          </ListItem>
        );
      })}
    </ul>
  );
};
ContactList.propTypes = {
  contacts: propTypes.arrayOf(propTypes.object).isRequired,
  deleteContact: propTypes.func.isRequired,
};

export default ContactList;
