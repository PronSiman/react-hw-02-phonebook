import React, { Component } from 'react';
import styled from 'styled-components';
// eslint-disable-next-line import/no-extraneous-dependencies
import propTypes from 'prop-types';

const NameInput = styled.input`
  width: 300px;
  display: block;
  margin: 0 auto;
  margin-bottom: 20px;
`;
const PhoneInput = styled.input`
  width: 300px;
  display: block;
  margin: 0 auto;
  margin-bottom: 20px;
`;
const AddContactButton = styled.button`
  display: block;
  margin: 0 auto;
  background-color: #fff;
  cursor: pointer;
`;
const TitleP = styled.p`
  text-transform: capitalize;
  text-align: center;
`;

const INITAL_STATE = {
  name: '',
  number: '',
};

class ContactForm extends Component {
  state = {
    ...INITAL_STATE,
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  submitForm = e => {
    const { name, number } = this.state;
    const { addNewContact } = this.props;
    e.preventDefault();
    addNewContact(name, number);
    this.reset();
  };

  reset = () => {
    this.setState({
      ...INITAL_STATE,
    });
  };

  render() {
    const { name, number } = this.state;
    return (
      <form onSubmit={this.submitForm}>
        <TitleP>type name*</TitleP>
        <NameInput
          type="text"
          value={name}
          name="name"
          onChange={this.handleChange}
        />
        <TitleP>type phone*</TitleP>
        <PhoneInput
          type="number"
          value={number}
          name="number"
          onChange={this.handleChange}
        />
        <AddContactButton
          disabled={!this.state.name || !this.state.number}
          type="submit"
        >
          Add contact
        </AddContactButton>
      </form>
    );
  }
}
ContactForm.propTypes = {
  addNewContact: propTypes.func.isRequired,
};

export default ContactForm;
