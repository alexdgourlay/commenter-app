import React from 'react';
import renderer from 'react-test-renderer';
import Actions from './actions';

it('renders correctly', () => {
  const tree = renderer
    .create(
      <Actions
        liked={false}
        likeCount={0}
        commentCount={0}
        onLikePress={() => {}}
        onCommentsPress={() => {}}
      />,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders correctly when liked', () => {
  const tree = renderer
    .create(
      <Actions
        liked={true}
        likeCount={0}
        commentCount={0}
        onLikePress={() => {}}
        onCommentsPress={() => {}}
      />,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders correctly with comment count', () => {
  const tree = renderer
    .create(
      <Actions
        liked={true}
        likeCount={0}
        commentCount={243}
        onLikePress={() => {}}
        onCommentsPress={() => {}}
      />,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders correctly with like count', () => {
  const tree = renderer
    .create(
      <Actions
        liked={true}
        likeCount={123}
        commentCount={0}
        onLikePress={() => {}}
        onCommentsPress={() => {}}
      />,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
