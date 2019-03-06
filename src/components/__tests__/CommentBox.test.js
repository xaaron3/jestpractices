import React from 'react';
import { mount } from 'enzyme'; // fullDOM
import CommentBox from 'components/CommentBox';
import Root from 'Root';

let wrapped;

beforeEach(() => {
   wrapped = mount(
      <Root>
         <CommentBox />
      </Root>
   );
});

afterEach(() => {
   wrapped.unmount();
});

it('has a text area and two buttons', () => {
   expect(wrapped.find('textarea').length).toEqual(1);
   expect(wrapped.find('button').length).toEqual(2);
});

// simulate change to text box
// find the textarea ele
// simulate a 'change' event
// provide fake event object
//force component to update
// assert that the textarea's value has changed
describe('The Text Area', () => {    // describe to hold tests that correlate. scoping beforeEach
   beforeEach(() => {
      wrapped.find('textarea').simulate('change', {
         target: { value: 'new comment' }
      });
      wrapped.update();
   });
   
   it('has a text area that users can type in', () => {
      expect(wrapped.find('textarea').prop('value')).toEqual('new comment'); 
   });

   it('textarea empties on form submit', () => {
      // expect(wrapped.find('textarea').prop('value')).toEqual('submit comment'); 
      wrapped.find('form').simulate('submit');
      wrapped.update();
      expect(wrapped.find('textarea').prop('value')).toEqual('');
   })
})