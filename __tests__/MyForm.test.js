import { mount } from 'enzyme';
import React from 'react';
import renderer from 'react-test-renderer';

import MyForm from '../src/MyForm';

describe('withEnzyme', () => {
  it('MyForm test', () => {
    const app = mount(<MyForm user={{ user: { email: 'test@example.com' } }} />);
    expect(app.find('h1').text()).toEqual('My Form');
  });
});
