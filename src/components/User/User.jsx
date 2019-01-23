import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import ContextButton from '../ContextButton/ContextButton';

const ContainerDiv = styled.div`
  margin: 5px 0;
  padding: 5px;
  display: flex;
  :hover {
    background-color: #f5f5f5;
  }
`;

const TextDiv = styled.div`
  font-size: 1rem;
  font-weight: 600;
`;

const NameDiv = styled.div`
  font-size: 1.1rem;
  font-weight: 600;
  padding-bottom: 5px;
`;

const StyledDiv = styled.div`
  padding: 5px 10px;
`;

const User = (props) => {
  const {
    name, city, dateOfBirth, phone, address, id, editingUser,
  } = props;

  return (
    <ContainerDiv>
      <StyledDiv>
        <NameDiv>Name:</NameDiv>
        <TextDiv>Phone: </TextDiv>
        <TextDiv>Date of Birth: </TextDiv>
        <TextDiv>Address:</TextDiv>
        <TextDiv>City: </TextDiv>
        <div>
          <ContextButton label="Edit user" type="button" id={id} editingUser={editingUser} />
        </div>
      </StyledDiv>
      <StyledDiv>
        <NameDiv>{name}</NameDiv>
        <TextDiv>{`8-${phone}`}</TextDiv>
        <TextDiv>
          {dateOfBirth
            .split('-')
            .reverse()
            .join(' ')}
        </TextDiv>
        <TextDiv>{address}</TextDiv>
        <TextDiv>{city}</TextDiv>
      </StyledDiv>
    </ContainerDiv>
  );
};

User.defaultProps = {
  city: '',
  address: '',
};

User.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  dateOfBirth: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  editingUser: PropTypes.func.isRequired,
  city: PropTypes.string,
  address: PropTypes.string,
};

export default User;
