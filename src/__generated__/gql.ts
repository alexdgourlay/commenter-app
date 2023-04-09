/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n    fragment CommentFields on Comment {\n        id\n        content {\n            text    \n        }\n        profile {\n            name\n      }\n    }\n": types.CommentFieldsFragmentDoc,
    "\n  fragment PostFields on Post {\n    id\n    title\n    previewImage\n    webAddress {\n      hash\n      domain {\n        domain\n        icon\n      }\n    }\n    liked\n    _count {\n      comments\n      likes\n    }\n}\n": types.PostFieldsFragmentDoc,
    "\n  mutation CreateCommentOnUrl($url: String, $contentText: String!) {\n      createComment(url: $url, contentText: $contentText) {\n      id\n    }\n}\n": types.CreateCommentOnUrlDocument,
    "\n query GetComments($postId: ID!) {\n    comments(postId: $postId) {\n      id\n      content {\n        text\n      }\n    }\n}\n": types.GetCommentsDocument,
    "\n  query GetPosts {\n    posts {\n        ...PostFields\n    }\n  }\n": types.GetPostsDocument,
    "\n  mutation LikePost($postId: ID!) {\n    likePost(postId: $postId) {\n      post {\n        ...PostFields\n      }\n    }\n  }\n": types.LikePostDocument,
    "\n  mutation UnlikePost($postId: ID!) {\n    unlikePost(postId: $postId) {\n      post {\n        ...PostFields\n      }\n    }\n  }\n": types.UnlikePostDocument,
    "\n query GetPostScreenData($postId: ID!) {\n    post(id: $postId) {\n      ...PostFields\n    } \n    comments(postId: $postId) {\n      ...CommentFields\n    }\n}\n": types.GetPostScreenDataDocument,
    "\n  mutation CreateComment($postId: ID!, $contentText: String!) {\n      createComment(postId: $postId, contentText: $contentText) {\n      ...CommentFields\n    }\n}\n": types.CreateCommentDocument,
    "\n  query PostsOnDomain($domain: String!) {\n    postsOnDomain(domain: $domain) {\n      ...PostFields\n    }\n  }\n": types.PostsOnDomainDocument,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown;

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    fragment CommentFields on Comment {\n        id\n        content {\n            text    \n        }\n        profile {\n            name\n      }\n    }\n"): (typeof documents)["\n    fragment CommentFields on Comment {\n        id\n        content {\n            text    \n        }\n        profile {\n            name\n      }\n    }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  fragment PostFields on Post {\n    id\n    title\n    previewImage\n    webAddress {\n      hash\n      domain {\n        domain\n        icon\n      }\n    }\n    liked\n    _count {\n      comments\n      likes\n    }\n}\n"): (typeof documents)["\n  fragment PostFields on Post {\n    id\n    title\n    previewImage\n    webAddress {\n      hash\n      domain {\n        domain\n        icon\n      }\n    }\n    liked\n    _count {\n      comments\n      likes\n    }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation CreateCommentOnUrl($url: String, $contentText: String!) {\n      createComment(url: $url, contentText: $contentText) {\n      id\n    }\n}\n"): (typeof documents)["\n  mutation CreateCommentOnUrl($url: String, $contentText: String!) {\n      createComment(url: $url, contentText: $contentText) {\n      id\n    }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n query GetComments($postId: ID!) {\n    comments(postId: $postId) {\n      id\n      content {\n        text\n      }\n    }\n}\n"): (typeof documents)["\n query GetComments($postId: ID!) {\n    comments(postId: $postId) {\n      id\n      content {\n        text\n      }\n    }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetPosts {\n    posts {\n        ...PostFields\n    }\n  }\n"): (typeof documents)["\n  query GetPosts {\n    posts {\n        ...PostFields\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation LikePost($postId: ID!) {\n    likePost(postId: $postId) {\n      post {\n        ...PostFields\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation LikePost($postId: ID!) {\n    likePost(postId: $postId) {\n      post {\n        ...PostFields\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation UnlikePost($postId: ID!) {\n    unlikePost(postId: $postId) {\n      post {\n        ...PostFields\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation UnlikePost($postId: ID!) {\n    unlikePost(postId: $postId) {\n      post {\n        ...PostFields\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n query GetPostScreenData($postId: ID!) {\n    post(id: $postId) {\n      ...PostFields\n    } \n    comments(postId: $postId) {\n      ...CommentFields\n    }\n}\n"): (typeof documents)["\n query GetPostScreenData($postId: ID!) {\n    post(id: $postId) {\n      ...PostFields\n    } \n    comments(postId: $postId) {\n      ...CommentFields\n    }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation CreateComment($postId: ID!, $contentText: String!) {\n      createComment(postId: $postId, contentText: $contentText) {\n      ...CommentFields\n    }\n}\n"): (typeof documents)["\n  mutation CreateComment($postId: ID!, $contentText: String!) {\n      createComment(postId: $postId, contentText: $contentText) {\n      ...CommentFields\n    }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query PostsOnDomain($domain: String!) {\n    postsOnDomain(domain: $domain) {\n      ...PostFields\n    }\n  }\n"): (typeof documents)["\n  query PostsOnDomain($domain: String!) {\n    postsOnDomain(domain: $domain) {\n      ...PostFields\n    }\n  }\n"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;