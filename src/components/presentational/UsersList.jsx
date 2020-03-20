import React from 'react';
import PropTypes from 'prop-types';


const UsersList = ({
  users, fetchApple, resetApples,
}) => (
  <StyledSection>
    <h3>Users</h3>
    <StyledUl>
      {users.map((user) => (
        <StyledUserLi key={user.id}>
          <div>
            {user.name}
            <StyledButtonRed
              id={user.id}
              onClick={() => fetchApple(user.id)}
            >
                          Grab apple
            </StyledButtonRed>
          </div>
          <ul>
            {user.apples.map((apple) => (
              <StyledAppleLi key={apple.id}>{`Apple${apple.id}`}</StyledAppleLi>
            ))}
          </ul>
        </StyledUserLi>
      ))}
    </StyledUl>
    <StyledButtonGreen
      onClick={() => resetApples()}
    >
          Free apples
    </StyledButtonGreen>
  </StyledSection>
);

UsersList.propTypes = {
  users: PropTypes.arrayOf(PropTypes.object).isRequired,
  fetchApple: PropTypes.func.isRequired,
  resetApples: PropTypes.func.isRequired,
};


export default UsersList;
