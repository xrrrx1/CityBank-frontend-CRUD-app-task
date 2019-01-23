import React, { useContext } from 'react';
import styled from 'styled-components';
import { HashRouter, Route, Switch } from 'react-router-dom';
import UsersPage from '../UsersPage/UsersPage';
import FormPage from '../FormPage/FormPage';
import LinkButton from '../../components/LinkButton/LinkButton';
import { UsersContext } from '../../context/context';
import PageNotFound from '../../components/PageNotFound/PageNotFound';

const HeaderContainer = styled.div`
  height: 60px;
  display: flex;
  background-color: #f5f5f5;
`;

const ButtonsContainer = styled.div`
  height: 100%;
  display: flex;
`;

const Content = styled.div``;

const App = () => {
  const {
    store, addingNewUser, cancelUser, deleteUser,
  } = useContext(UsersContext);

  const addUser = () => {
    addingNewUser();
  };

  const cancelUserBool = () => {
    cancelUser();
  };

  const deleteUserClick = async () => {
    await deleteUser(store.id);
    await cancelUser();
  };

  return (
    <HashRouter>
      <React.Fragment>
        <HeaderContainer>
          <header>
            {store.isCreate || store.isEdit ? (
              <ButtonsContainer>
                <LinkButton to="/" label="Main page" click={cancelUserBool} />
                {store.isEdit && <LinkButton to="/" label="Delete user" click={deleteUserClick} />}
              </ButtonsContainer>
            ) : (
              <ButtonsContainer>
                <LinkButton to="/add_user" label="Add user" click={addUser} />
              </ButtonsContainer>
            )}
          </header>
        </HeaderContainer>
        <Content>
          <Switch>
            <Route exact path="/" component={UsersPage} />
            <Route path="/add_user" component={FormPage} />
            <Route path="/edit_user" component={FormPage} />
            <Route path="*" component={PageNotFound} />
          </Switch>
        </Content>
      </React.Fragment>
    </HashRouter>
  );
};

export default App;
