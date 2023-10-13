"use client";
import { VStack } from "@kuma-ui/core";
import {
    EmailShareButton,
    FacebookShareButton,
    HatenaShareButton,
    InstapaperShareButton,
    LineShareButton,
    LinkedinShareButton,
    LivejournalShareButton,
    MailruShareButton,
    OKShareButton,
    PinterestShareButton,
    PocketShareButton,
    RedditShareButton,
    TelegramShareButton,
    TumblrShareButton,
    TwitterShareButton,
    ViberShareButton,
    VKShareButton,
    WhatsappShareButton,
    WorkplaceShareButton
  } from "react-share";


export default function ShareButtons() {
    return (
        <VStack justify="center" alignItems="center">
            Facebook
          <FacebookShareButton url="https://kuma-web.vercel.app">Facebook</FacebookShareButton>
        </VStack>
    );
}