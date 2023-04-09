import React, {useContext} from 'react';
import AddComment from '../../../molecules/comment/addComment';
import {WebContext} from '../../../../context/web/webContext';
import {gql} from '../../../../__generated__';
import {useMutation, useQuery} from '@apollo/client';

const CREATE_COMMENT = gql(`
  mutation CreateCommentOnUrl($url: String, $contentText: String!) {
      createComment(url: $url, contentText: $contentText) {
      id
    }
}
`);

const GET_COMMENTS = gql(`
 query GetComments($postId: ID!) {
    comments(postId: $postId) {
      id
      content {
        text
      }
    }
}
`);

const Commentary = () => {
  const {url} = useContext(WebContext);

  const [createComment, {error}] = useMutation(CREATE_COMMENT);

  const {data: commentsData} = useQuery(GET_COMMENTS, {
    variables: {
      postId: '',
    },
  });

  return (
    <AddComment
      placeholder={`Add a comment to ${url.slice(0, 36)}`}
      onSubmitComment={text => {
        createComment({
          variables: {
            contentText: text,
            url,
          },
        });
      }}
    />
  );
};

export default Commentary;
