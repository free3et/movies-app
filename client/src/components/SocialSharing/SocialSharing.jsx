import Stack from "@mui/material/Stack";
import PropTypes from "prop-types";
import {
  EmailShareButton,
  EmailIcon,
  FacebookShareButton,
  FacebookIcon,
  LinkedinShareButton,
  LinkedinIcon,
  TelegramShareButton,
  TelegramIcon,
  TwitterShareButton,
  TwitterIcon,
  WhatsappShareButton,
  WhatsappIcon,
} from "react-share";
import { SOCIAL_SHARE_BTN_SIZE } from "../../config/constants";

export const SocialSharing = ({ url, title }) => {
  return (
    <Stack
      direction="row"
      spacing={1}
      sx={{
        p: "2px 4px",
        marginTop: "20px",
        display: "flex",
        alignItems: "center",
        //justifyContent: "center",
        width: "100%",
      }}
    >
      <FacebookShareButton url={url} title={title}>
        <FacebookIcon round size={SOCIAL_SHARE_BTN_SIZE} />
      </FacebookShareButton>
      <LinkedinShareButton url={url} title={title}>
        <LinkedinIcon round size={SOCIAL_SHARE_BTN_SIZE} />
      </LinkedinShareButton>
      <TelegramShareButton url={url} title={title}>
        <TelegramIcon round size={SOCIAL_SHARE_BTN_SIZE} />
      </TelegramShareButton>
      <TwitterShareButton url={url} title={title}>
        <TwitterIcon round size={SOCIAL_SHARE_BTN_SIZE} />
      </TwitterShareButton>
      <WhatsappShareButton url={url} title={title}>
        <WhatsappIcon round size={SOCIAL_SHARE_BTN_SIZE} />
      </WhatsappShareButton>
      <EmailShareButton url={url} title={title}>
        <EmailIcon round size={SOCIAL_SHARE_BTN_SIZE} />
      </EmailShareButton>
    </Stack>
  );
};

SocialSharing.propTypes = {
  url: PropTypes.string,
  title: PropTypes.string,
};
