import React from 'react';
import { mount } from 'enzyme';
import Root from 'Root';
import App from 'components/App';

it('can fetch a list of comments and display them', () => {
   // attempt to render the entire app
   const wrapped = mount(
      <Root>
         <App />
      </Root>
   );

   // find the 'fetchComments' button and click it
   wrapped.find('.fetch-comments').simulate('click');

   // expect to find a list of comments, 500 LIs
   expect(wrapped.find('li').length).toEqual(500);
});