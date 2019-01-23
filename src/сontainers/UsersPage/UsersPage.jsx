import React, { useContext, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { UsersContext } from '../../context/context';
import User from '../../components/User/User';

const UsersPage = () => {
  const { store, getUsers, editingUser } = useContext(UsersContext);

  useEffect(() => {
    getUsers();
  }, []);

  return store.isEdit ? (
    <Redirect to="/edit_user" />
  ) : (
    <React.Fragment>
      <div>
        {store.isLoading ? (
          <div>
            <h1 style={{ margin: '20px 40px' }}>Loading....</h1>
          </div>
        ) : (
          <div>
            {store.hasData
              ? store.users.map(user => (
                <User
                    key={user.id}
                    id={user.id}
                    name={user.name}
                    city={user.city}
                    dateOfBirth={user.dateOfBirth}
                    phone={user.phone}
                    address={user.address}
                    editingUser={editingUser}
                  />
              ))
              : null}
          </div>
        )}
      </div>
    </React.Fragment>
  );
};

export default UsersPage;
