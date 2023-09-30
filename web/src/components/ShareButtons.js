import React from 'react';
import { ShareButtonStyle } from '../styles/ShareButton';

import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  WhatsappShareButton,
  WhatsappIcon,
  RedditShareButton,
  RedditIcon
} from 'react-share';

const ShareButtons = ({ title, url, twitterHandle, tags }) => {
  return (
    <ShareButtonStyle>
      <FacebookShareButton url={url}>
        <FacebookIcon round={false} />
      </FacebookShareButton>

      <TwitterShareButton
        url={url}
        title={title}
        via={twitterHandle}
        hashtags={tags}
      >
        <TwitterIcon round={false} />
      </TwitterShareButton>

      <RedditShareButton url={url} title={title}>
        <RedditIcon round={false} />
      </RedditShareButton>

      <WhatsappShareButton url={url} title={title}>
        <WhatsappIcon round={false} />
      </WhatsappShareButton>
    </ShareButtonStyle>
  );
};
export default ShareButtons;
