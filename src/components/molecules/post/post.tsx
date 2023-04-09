import React from 'react';
import {PostFieldsFragment} from '../../../__generated__/graphql';
import View from '../../atoms/view/view';
import {Image, Pressable, StyleSheet} from 'react-native';

import {gql} from '../../../__generated__/gql';
import {Text, IconButton} from '../../atoms';
import {Surface} from '../../atoms';
import HeroScroll from './heroScroll';
import {condense} from '../../../lib/url/url';

interface Props {
  post: PostFieldsFragment;
  onCommentsPress?: () => void;
  onLikePress?: () => void;
  onDomainPress?: () => void;
  card?: boolean;
}

const Post = (props: Props) => {
  const {
    post,
    onCommentsPress,
    onLikePress,
    onDomainPress,
    card = true,
  } = props;
  return (
    <Surface elevation={card ? 5 : 0} style={card ? styles.card : undefined}>
      <View style={card ? styles.content : undefined}>
        {post.previewImage && (
          <HeroScroll
            data={[
              {
                id: '1',
                type: 'Image',
                string: post.previewImage,
              },
            ]}
          />
        )}

        <View style={styles.lowerContainer}>
          <Pressable
            style={styles.domainContainer}
            onPress={() => onDomainPress?.()}>
            {post.webAddress?.domain?.icon && (
              <Image
                style={styles.favicon}
                source={{
                  uri: post.webAddress.domain.icon,
                }}
              />
            )}
            {post.webAddress?.domain && (
              <Text variant="bodyMedium">
                {condense(post.webAddress.domain.domain)}
              </Text>
            )}
          </Pressable>
          <Text variant="bodyMedium">{post.title}</Text>

          <View style={styles.actionsContainer}>
            <View style={styles.action}>
              <IconButton
                style={styles.icon}
                icon="chatbubbles"
                size="S"
                onPress={() => onCommentsPress?.()}
              />
              {post._count?.comments ? (
                <Text variant="labelMedium">{post._count.comments}</Text>
              ) : undefined}
            </View>
            <View style={styles.action}>
              <IconButton
                style={styles.icon}
                icon="heart"
                size="S"
                onPress={() => onLikePress?.()}
              />
              {post._count?.likes ? (
                <Text variant="labelMedium">{post._count?.likes}</Text>
              ) : undefined}
            </View>
            <IconButton style={styles.icon} icon="compass" size="S" />
            <IconButton style={styles.icon} icon="share" size="S" />
          </View>
        </View>
      </View>
    </Surface>
  );
};

Post.fragments = {
  entry: gql(`
  fragment PostFields on Post {
    id
    title
    previewImage
    webAddress {
      hash
      domain {
        domain
        icon
      }
    }
    liked
    _count {
      comments
      likes
    }
}
`),
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 16,
  },
  content: {
    overflow: 'hidden',
    borderRadius: 16,
  },
  lowerContainer: {
    paddingHorizontal: 12,
    paddingVertical: 12,
    gap: 6,
  },
  domainContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  favicon: {
    width: 16,
    height: 16,
    borderRadius: 2,
  },
  actionsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  action: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 2,
  },
  icon: {
    margin: 0,
  },
});

export default Post;
