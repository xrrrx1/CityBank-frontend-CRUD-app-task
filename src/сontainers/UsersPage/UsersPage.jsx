import React, { useContext, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { UsersContext } from '../../context/context';
import User from '../../components/User/User';
import Loader from '../../components/Loader/Loader';

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
            <Loader color="black" />
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
