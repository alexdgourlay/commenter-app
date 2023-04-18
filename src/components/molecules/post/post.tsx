import React, {ReactElement} from 'react';
import {PostFieldsFragment} from '../../../__generated__/graphql';
import View from '../../atoms/view/view';
import {Image, Pressable, StyleSheet} from 'react-native';

import {gql} from '../../../__generated__/gql';
import {Text, IconButton} from '../../atoms';
import {Surface} from '../../atoms';
import HeroScroll from './heroScroll';
import {condense} from '../../../lib/url/url';
import Actions from './actions/actions';

interface Props {
  post: PostFieldsFragment;
  onDomainPress?: () => void;
  card?: boolean;
  renderActions: () => ReactElement<typeof Actions>;
}

const Post = (props: Props) => {
  const {post, onDomainPress, card = true, renderActions} = props;
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

          {renderActions()}
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
    ...ActionsFields
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
});

export default Post;
