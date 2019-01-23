import React, { useContext } from 'react';
import styled from 'styled-components';
import { Redirect } from 'react-router-dom';
import {
 Formik, Form, Field, ErrorMessage 
} from 'formik';
import { UsersContext } from '../../context/context';
import ContextButton from '../../components/ContextButton/ContextButton';

const ContainerDiv = styled.div`
  display: flex;
  justify-content: center;
`;

const FormSectionDiv = styled.div`
  width: 400px;
  margin: 10px 0;
`;

const FormHeader = styled.div`
  color: #000000;
  font-size: 2rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 30px;
  font-family: 'Montserrat', sans-serif;
`;

const FormDiv = styled.div`
  border: 1px solid #f5f5f5;
  box-shadow: 0 10px 35px -15px rgba(0, 0, 0, 0.2);
`;

const StyledField = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  span {
    font-size: 1rem;
    font-weight: 600;
  }
  input {
    width: 168px;
  }
  input:focus {
    border: 2px solid #ff8e53;
    outline: none;
  }
`;

const StyledError = styled.div`
  color: red;
`;

const FormPage = () => {
  const { store, addNewUser, editUser } = useContext(UsersContext);
  const editedItem = store.isEdit && store.users.filter(item => item.id === store.id)[0];

  return !store.isEdit && !store.isCreate ? (
    <Redirect to="/" />
  ) : (
    <ContainerDiv>
      <FormSectionDiv>
        <FormHeader>
          <h2>User Form</h2>
        </FormHeader>
        <FormDiv>
          <Formik
            initialValues={{
              phone: `${store.isEdit ? editedItem.phone : ''}`,
              name: `${store.isEdit ? editedItem.name : ''}`,
              dateOfBirth: `${store.isEdit ? editedItem.dateOfBirth : ''}`,
              address: `${store.isEdit ? editedItem.address : ''}`,
              city: `${store.isEdit ? editedItem.city : ''}`,
            }}
            validate={(values) => {
              const errors = {};
              if (!values.phone) {
                errors.phone = 'Required';
              } else if (!/^[0-9]{3}-[0-9]{3}-[0-9]{2}-[0-9]{2}$/i.test(values.phone)) {
                errors.phone = 'Bad Format';
              }
              if (!values.name) {
                errors.name = 'Required';
              }
              if (!values.dateOfBirth) {
                errors.dateOfBirth = 'Required';
              }
              return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                if (store.isEdit) {
                  editUser(values, store.id);
                }
                if (store.isCreate) {
                  addNewUser(values);
                }
                setSubmitting(false);
              }, 0);
            }}
          >
            {({ isSubmitting }) => (
              <Form>
                <StyledField>
                  <span>ФИО клиента : </span>
                  <StyledError>
                    <ErrorMessage name="name" component="div" />
                  </StyledError>
                  <Field type="name" name="name" maxLength="100" minLength="4" />
                </StyledField>

                <StyledField>
                  <span>Дата рождения :</span>
                  <StyledError>
                    <ErrorMessage name="dateOfBirth" component="div" />
                  </StyledError>
                  <Field type="date" name="dateOfBirth" />
                </StyledField>

                <StyledField>
                  <span>Адрес :</span>
                  <Field type="address" name="address" />
                </StyledField>

                <StyledField>
                  <span>Город :</span>
                  <Field type="city" name="city" />
                </StyledField>

                <StyledField>
                  <span>Телефон(Моб.) :</span>
                  <StyledError>
                    <ErrorMessage name="phone" component="div" />
                  </StyledError>
                  <Field type="phone" name="phone" placeholder="777-777-77-77" />
                </StyledField>

                <StyledField>
                  <ContextButton
                    label={store.isCreate ? 'Add' : 'Edit'}
                    type="submit"
                    disabled={isSubmitting}
                    isCreate={store.isCreate}
                    isEdit={store.isEdit}
                  />
                </StyledField>
              </Form>
            )}
          </Formik>
        </FormDiv>
      </FormSectionDiv>
    </ContainerDiv>
  );
};

export default FormPage;
