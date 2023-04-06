import React, {useState} from 'react';
import AddComment from '../../components/molecules/comment/addComment';
import {useMutation, useQuery} from '@apollo/client';
import {gql} from '../../__generated__';
import Web from '../../components/organisms/web/web';

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

export default () => {
  const [createComment, {error}] = useMutation(CREATE_COMMENT);

  const [currentUrl, setCurrentUrl] = useState('');

  const {data: commentsData} = useQuery(GET_COMMENTS, {
    variables: {
      postId: '',
    },
  });

  return (
    <>
      <Web
        onUrlUpdate={url => {
          setCurrentUrl(url);
        }}
      />

      <AddComment
        placeholder={`Add a comment to ${currentUrl.slice(0, 36)}`}
        onSubmitComment={text => {
          createComment({
            variables: {
              contentText: text,
              url: currentUrl,
            },
          });
        }}
      />
    </>
  );
};
