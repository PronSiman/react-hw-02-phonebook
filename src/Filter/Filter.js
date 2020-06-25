import React from 'react';
import styled from 'styled-components';
// eslint-disable-next-line import/no-extraneous-dependencies
import propTypes from 'prop-types';

const FilterInput = styled.input`
  width: 300px;
  display: block;
  margin: 0 auto;
  margin-bottom: 20px;
`;
const TitleP = styled.p`
  text-transform: capitalize;
  text-align: center;
`;
const Filter = ({ value, onFilterChage, contacts }) => {
  return (
    <div>
      {contacts.length >= 2 && (
        <div>
          <TitleP>Find by contacts name</TitleP>
          <FilterInput
            type="text"
            value={value}
            name="name"
            onChange={e => onFilterChage(e.target.value)}
          />
        </div>
      )}
    </div>
  );
};
Filter.propTypes = {
  value: propTypes.string.isRequired,
  contacts: propTypes.arrayOf(propTypes.object).isRequired,
  onFilterChage: propTypes.func.isRequired,
};
export default Filter;
