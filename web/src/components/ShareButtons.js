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
        <FacebookIcon size={40} round={true} />
      </FacebookShareButton>

      <TwitterShareButton
        url={url}
        title={title}
        via={twitterHandle}
        hashtags={tags}
      >
        <TwitterIcon size={40} round={true} />
      </TwitterShareButton>

      <RedditShareButton url={url} title={title}>
        <RedditIcon size={40} round={true} />
      </RedditShareButton>

      <WhatsappShareButton url={url} title={title}>
        <WhatsappIcon size={40} round={true} />
      </WhatsappShareButton>
    </ShareButtonStyle>
  );
};
export default ShareButtons;
