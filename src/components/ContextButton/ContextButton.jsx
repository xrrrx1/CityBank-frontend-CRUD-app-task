import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledContextButton = styled.button`
  color: black;
`;

const ContextButton = (props) => {
  const {
    label, type, id, editingUser, isEdit, isCreate,
  } = props;

  return !isEdit && !isCreate ? (
    <StyledContextButton type={type} onClick={() => editingUser(id)}>
      <span>{label}</span>
    </StyledContextButton>
  ) : (
    <StyledContextButton type={type}>
      <span>{label}</span>
    </StyledContextButton>
  );
};

ContextButton.defaultProps = {
  type: 'button',
  id: null,
  isEdit: false,
  isCreate: false,
  editingUser: null,
};

ContextButton.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string,
  type: PropTypes.string,
  isEdit: PropTypes.bool,
  isCreate: PropTypes.bool,
  editingUser: PropTypes.func,
};

export default ContextButton;
