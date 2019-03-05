import React from 'react';
import { shallow } from 'enzyme';
import App from 'components/App';
import CommentBox from 'components/CommentBox';
import CommentList from 'components/CommentList';

// must init let wrapped outside of beforeEach scope
let wrapped;

// beforeEach runs before each it() test. 
beforeEach(() => {
   wrapped = shallow(<App />);
});

it('shows a comment box', () => {
   expect(wrapped.find(CommentBox).length).toEqual(1);
   // returns a length of 1 commentBox, that equals 1
});

it('shows a comment list', () => {
   expect(wrapped.find(CommentList).length).toEqual(1);
})