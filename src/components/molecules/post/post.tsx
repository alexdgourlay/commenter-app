import React from 'react';
import {PostFieldsFragment} from '../../../__generated__/graphql';
import View from '../../atoms/view/view';
import {Image, Pressable, StyleSheet} from 'react-native';

import {gql} from '../../../__generated__/gql';
import {Text, IconButton} from '../../atoms';
import {Surface} from '../../atoms';
import HeroScroll from './heroScroll';

interface Props {
  post: PostFieldsFragment;
  onCommentsPress?: () => void;
  onDomainPress?: () => void;
  card?: boolean;
}

const Post = (props: Props) => {
  const {post, onCommentsPress, onDomainPress, card = true} = props;
  return (
    <Surface elevation={card ? 5 : 0} style={card ? styles.card : undefined}>
      <View style={card ? styles.content : undefined}>
        <HeroScroll />

        <View style={styles.lowerContainer}>
          <Pressable
            style={styles.domainContainer}
            onPress={() => onDomainPress?.()}>
            <Image
              style={styles.favicon}
              source={{
                uri: 'https://m.files.bbci.co.uk/modules/bbc-morph-news-waf-page-meta/5.3.0/apple-touch-icon.png',
              }}
            />
            {post.webAddress?.domain && (
              <Text variant="bodyMedium">{post.webAddress.domain.domain}</Text>
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
              <Text variant="labelMedium">{post._count?.comments || 0}</Text>
            </View>
            <View style={styles.action}>
              <IconButton style={styles.icon} icon="heart" size="S" />
              <Text variant="labelMedium">{1}</Text>
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
    webAddress {
      hash
      domain {
        domain
      }
    }
    _count {
      comments
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
