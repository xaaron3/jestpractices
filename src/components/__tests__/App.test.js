import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';
import CommentBox from '../CommentBox';
import CommentList from '../CommentList';

it('shows a comment box', () => {
   const wrapped = shallow(<App />);

   expect(wrapped.find(CommentBox).length).toEqual(1);
   // returns a length of 1 commentBox, that equals 1
});

it('shows a comment list', () => {
   const wrapped = shallow(<App />);

   expect(wrapped.find(CommentList).length).toEqual(1);
})