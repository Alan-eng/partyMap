import React from 'react';
import PropTypes from 'prop-types';


const Basket = ({ basket }) => (
  <StyledSection>
    <h3>Basket</h3>
    <StyledUl>
      {basket.map((apple, index) => (
        <StyledBasketLi key={index}>{apple}</StyledBasketLi>
      ))}
    </StyledUl>
  </StyledSection>
);

Basket.propTypes = {
  basket: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Basket;
