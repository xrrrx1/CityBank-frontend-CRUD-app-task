/* eslint-disable no-console */
import React, { useReducer } from 'react';
import Axios from 'axios';
import PropTypes from 'prop-types';
import {
  USERS_REQUEST,
  USERS_RECEIVE,
  USERS_API,
  ADD_NEW_USER,
  ADDING_NEW_USER,
  EDIT_USER,
  EDITING_USER,
  CANCEL_USER,
  DELETE_USER,
} from '../../constants';
import usersReducer from '../../reducers/usersReducer';
import { UsersContext } from '../context';
import { getNewUserId } from '../../helpers';

const UsersStore = (props) => {
  const { children } = props;
  const [store, dispatch] = useReducer(usersReducer, []);

  const getUsersFromApi = async () => {
    try {
      const users = await Axios.get(USERS_API);
      dispatch({
        type: USERS_REQUEST,
      });
      setTimeout(() => {
        dispatch({
          type: USERS_RECEIVE,
          payload: users.data,
        });
      }, 0);
    } catch (e) {
      console.error(e);
    }
  };

  const getLastUserId = async () => {
    const users = await Axios.get(USERS_API);
    return users.data[users.data.length - 1].id;
  };

  const addNewUser = async (user) => {
    try {
      const lastId = await getLastUserId();
      const newId = await getNewUserId(lastId);
      const data = {
        id: newId,
        name: user.name,
        city: user.city,
        dateOfBirth: user.dateOfBirth,
        phone: user.phone,
        address: user.address,
      };
      await Axios.post(USERS_API, data);
      dispatch({
        type: ADD_NEW_USER,
      });
    } catch (e) {
      console.error(e);
    }
  };

  const addingNewUser = async () => {
    dispatch({
      type: ADDING_NEW_USER,
    });
  };

  const editingUser = async (editedUserId) => {
    dispatch({
      type: EDITING_USER,
      payload: editedUserId,
    });
  };

  const editUser = async (user, id) => {
    await Axios.put(`${USERS_API}${id}`, user);
    dispatch({
      type: EDIT_USER,
    });
  };

  const cancelUser = async () => {
    dispatch({
      type: CANCEL_USER,
    });
  };

  const deleteUser = async (id) => {
    await Axios.delete(`${USERS_API}${id}`);
    dispatch({
      type: DELETE_USER,
    });
  };

  return (
    <UsersContext.Provider
      value={{
        store,
        getUsers: getUsersFromApi,
        getLastUserId,
        addNewUser,
        addingNewUser,
        editingUser,
        editUser,
        cancelUser,
        deleteUser,
      }}
    >
      {children}
    </UsersContext.Provider>
  );
};

UsersStore.propTypes = {
  children: PropTypes.shape({
    type: PropTypes.func.isRequired,
  }).isRequired,
};

export default UsersStore;
