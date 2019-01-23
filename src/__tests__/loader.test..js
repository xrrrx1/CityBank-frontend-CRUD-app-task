/* eslint-disable react/jsx-filename-extension */
/* global describe it expect */
import React from 'react';
import * as Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallowToJson } from 'enzyme-to-json';
import Loader from '../components/Loader/Loader';

Enzyme.configure({ adapter: new Adapter() });

describe('Loader', () => {
  it('should render correctly', () => {
    const output = Enzyme.shallow(<Loader color="green" />);
    expect(shallowToJson(output)).toMatchSnapshot();
  });
});
