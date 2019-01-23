import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledLinkButton = styled.button`
  color: black;
  font-size: 26px;
  height: 100%;
  margin: 0 40px;
`;

const LinkButton = (props) => {
  const { to, label, click } = props;
  return (
    <Link to={to}>
      <StyledLinkButton onClick={click}>
        <span>{label}</span>
      </StyledLinkButton>
    </Link>
  );
};

LinkButton.defaultProps = {
  click: null,
};

LinkButton.propTypes = {
  to: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  click: PropTypes.func,
};

export default LinkButton;
