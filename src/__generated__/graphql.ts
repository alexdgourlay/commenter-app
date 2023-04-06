/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

/** Represents an Account.\nAn account can have multiple profiles. */
export type Account = {
  __typename?: 'Account';
  /** Email address. */
  email: Scalars['String'];
  /** Unique id. */
  id: Scalars['ID'];
  /** The password of this account. */
  password?: Maybe<Scalars['String']>;
  /** The profiles of this account. */
  profiles: Array<Profile>;
};

/** Represents a Comment. */
export type Comment = {
  __typename?: 'Comment';
  /** The content of this comment. */
  content?: Maybe<CommentContent>;
  /** Unique id. */
  id: Scalars['ID'];
  /** The id post this comment was made on. */
  postId: Scalars['String'];
  /** The profile that made this comment */
  profile?: Maybe<Profile>;
};

/** Represents the content of a comment. */
export type CommentContent = {
  __typename?: 'CommentContent';
  /** Unique id. */
  id: Scalars['ID'];
  /** The text content. */
  text: Scalars['String'];
};

/** Represents a web domain. */
export type Domain = {
  __typename?: 'Domain';
  /** The domain including to top-level domain e.g. google.com */
  domain: Scalars['String'];
  /** Unique id. */
  id: Scalars['ID'];
  /** The web addresses under this domain. */
  webAddresses: Array<WebAddress>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createComment: Comment;
  createProfile: Profile;
};


export type MutationCreateCommentArgs = {
  contentText: Scalars['String'];
  postId?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
};


export type MutationCreateProfileArgs = {
  accountId: Scalars['String'];
  name: Scalars['String'];
};

/** Represents a Post. */
export type Post = {
  __typename?: 'Post';
  _count?: Maybe<PostCount>;
  /** Comments on this post. */
  comments: Array<Comment>;
  /** Unique id. */
  id: Scalars['ID'];
  /** Title of this post */
  title: Scalars['String'];
  /** The web address linked to this post. */
  webAddress?: Maybe<WebAddress>;
};

/** Aggregated count data for a post. */
export type PostCount = {
  __typename?: 'PostCount';
  /** Comment count. */
  comments?: Maybe<Scalars['Int']>;
};

/** Represents a Profile. */
export type Profile = {
  __typename?: 'Profile';
  /** Unique id. */
  id: Scalars['ID'];
  /** Full name. */
  name: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  /** Returns a unique account by id. */
  account?: Maybe<Account>;
  /** Returns all accounts. */
  accounts?: Maybe<Array<Maybe<Account>>>;
  /** Returns a unique comment by id. */
  comment?: Maybe<Comment>;
  /** Returns all comments on a post. */
  comments?: Maybe<Array<Comment>>;
  /** Returns a unique domain by id. */
  domain?: Maybe<Domain>;
  /** Returns a unique post by id. */
  post?: Maybe<Post>;
  /** Returns all posts. */
  posts?: Maybe<Array<Post>>;
  /** Returns all posts for a domain. */
  postsOnDomain?: Maybe<Array<Post>>;
  /** Returns a unique profile by id. */
  profile?: Maybe<Profile>;
  /** Returns all profiles. */
  profiles?: Maybe<Array<Maybe<Profile>>>;
};


export type QueryAccountArgs = {
  id: Scalars['ID'];
};


export type QueryCommentArgs = {
  id: Scalars['ID'];
};


export type QueryCommentsArgs = {
  postId: Scalars['ID'];
};


export type QueryDomainArgs = {
  id: Scalars['ID'];
};


export type QueryPostArgs = {
  id: Scalars['ID'];
};


export type QueryPostsOnDomainArgs = {
  domain: Scalars['String'];
};


export type QueryProfileArgs = {
  id: Scalars['ID'];
};

/** Represent a unique web address with a one-to-one relation to a Post. */
export type WebAddress = {
  __typename?: 'WebAddress';
  /** The domain this web address belongs to. */
  domain?: Maybe<Domain>;
  /** The id of the domain this web address belongs to. */
  domainId: Scalars['String'];
  /** A hashed value of the web address. */
  hash: Scalars['String'];
  /** Unique id. */
  id: Scalars['ID'];
  /** A post linked to this web address. */
  post?: Maybe<Post>;
};

export type CommentFieldsFragment = { __typename?: 'Comment', id: string, content?: { __typename?: 'CommentContent', text: string } | null, profile?: { __typename?: 'Profile', name: string } | null };

export type PostFieldsFragment = { __typename?: 'Post', id: string, title: string, webAddress?: { __typename?: 'WebAddress', hash: string, domain?: { __typename?: 'Domain', domain: string } | null } | null, _count?: { __typename?: 'PostCount', comments?: number | null } | null };

export type GetPostsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetPostsQuery = { __typename?: 'Query', posts?: Array<{ __typename?: 'Post', id: string, title: string, webAddress?: { __typename?: 'WebAddress', hash: string, domain?: { __typename?: 'Domain', domain: string } | null } | null, _count?: { __typename?: 'PostCount', comments?: number | null } | null }> | null };

export type GetPostScreenDataQueryVariables = Exact<{
  postId: Scalars['ID'];
}>;


export type GetPostScreenDataQuery = { __typename?: 'Query', post?: { __typename?: 'Post', id: string, title: string, webAddress?: { __typename?: 'WebAddress', hash: string, domain?: { __typename?: 'Domain', domain: string } | null } | null, _count?: { __typename?: 'PostCount', comments?: number | null } | null } | null, comments?: Array<{ __typename?: 'Comment', id: string, content?: { __typename?: 'CommentContent', text: string } | null, profile?: { __typename?: 'Profile', name: string } | null }> | null };

export type CreateCommentMutationVariables = Exact<{
  postId: Scalars['String'];
  contentText: Scalars['String'];
}>;


export type CreateCommentMutation = { __typename?: 'Mutation', createComment: { __typename?: 'Comment', id: string } };

export type PostsOnDomainQueryVariables = Exact<{
  domain: Scalars['String'];
}>;


export type PostsOnDomainQuery = { __typename?: 'Query', postsOnDomain?: Array<{ __typename?: 'Post', id: string, title: string, webAddress?: { __typename?: 'WebAddress', hash: string, domain?: { __typename?: 'Domain', domain: string } | null } | null, _count?: { __typename?: 'PostCount', comments?: number | null } | null }> | null };

export type CreateCommentOnUrlMutationVariables = Exact<{
  url?: InputMaybe<Scalars['String']>;
  contentText: Scalars['String'];
}>;


export type CreateCommentOnUrlMutation = { __typename?: 'Mutation', createComment: { __typename?: 'Comment', id: string } };

export type GetCommentsQueryVariables = Exact<{
  postId: Scalars['ID'];
}>;


export type GetCommentsQuery = { __typename?: 'Query', comments?: Array<{ __typename?: 'Comment', id: string, content?: { __typename?: 'CommentContent', text: string } | null }> | null };

export const CommentFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CommentFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Comment"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"content"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"text"}}]}},{"kind":"Field","name":{"kind":"Name","value":"profile"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<CommentFieldsFragment, unknown>;
export const PostFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PostFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Post"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"webAddress"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hash"}},{"kind":"Field","name":{"kind":"Name","value":"domain"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"domain"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"_count"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"comments"}}]}}]}}]} as unknown as DocumentNode<PostFieldsFragment, unknown>;
export const GetPostsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetPosts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"posts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PostFields"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PostFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Post"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"webAddress"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hash"}},{"kind":"Field","name":{"kind":"Name","value":"domain"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"domain"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"_count"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"comments"}}]}}]}}]} as unknown as DocumentNode<GetPostsQuery, GetPostsQueryVariables>;
export const GetPostScreenDataDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetPostScreenData"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"postId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"post"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"postId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PostFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"comments"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"postId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"postId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CommentFields"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PostFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Post"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"webAddress"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hash"}},{"kind":"Field","name":{"kind":"Name","value":"domain"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"domain"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"_count"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"comments"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CommentFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Comment"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"content"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"text"}}]}},{"kind":"Field","name":{"kind":"Name","value":"profile"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<GetPostScreenDataQuery, GetPostScreenDataQueryVariables>;
export const CreateCommentDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateComment"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"postId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"contentText"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createComment"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"postId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"postId"}}},{"kind":"Argument","name":{"kind":"Name","value":"contentText"},"value":{"kind":"Variable","name":{"kind":"Name","value":"contentText"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<CreateCommentMutation, CreateCommentMutationVariables>;
export const PostsOnDomainDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"PostsOnDomain"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"domain"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"postsOnDomain"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"domain"},"value":{"kind":"Variable","name":{"kind":"Name","value":"domain"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PostFields"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PostFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Post"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"webAddress"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hash"}},{"kind":"Field","name":{"kind":"Name","value":"domain"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"domain"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"_count"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"comments"}}]}}]}}]} as unknown as DocumentNode<PostsOnDomainQuery, PostsOnDomainQueryVariables>;
export const CreateCommentOnUrlDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateCommentOnUrl"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"url"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"contentText"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createComment"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"url"},"value":{"kind":"Variable","name":{"kind":"Name","value":"url"}}},{"kind":"Argument","name":{"kind":"Name","value":"contentText"},"value":{"kind":"Variable","name":{"kind":"Name","value":"contentText"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<CreateCommentOnUrlMutation, CreateCommentOnUrlMutationVariables>;
export const GetCommentsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetComments"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"postId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"comments"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"postId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"postId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"content"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"text"}}]}}]}}]}}]} as unknown as DocumentNode<GetCommentsQuery, GetCommentsQueryVariables>;