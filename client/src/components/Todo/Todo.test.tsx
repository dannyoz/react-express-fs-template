import React from 'react';
import ReactDOM from 'react-dom';
import Todo from './Todo';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Todo name='' completed={false} />, div);
  ReactDOM.unmountComponentAtNode(div);
});