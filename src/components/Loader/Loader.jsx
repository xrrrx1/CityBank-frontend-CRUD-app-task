import React from 'react';
import ReactLoading from 'react-loading';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const LoaderContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 32px;
  font-weight: bold;
  color: ${props => props.color};
`;

const Loader = (props) => {
  const { color } = props;
  return (
    <LoaderContainer color={color}>
      <span>Loading</span>
      <ReactLoading type="bubbles" color={color} />
    </LoaderContainer>
  );
};

Loader.propTypes = { color: PropTypes.string.isRequired };

export default Loader;
