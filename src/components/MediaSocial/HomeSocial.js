import React, { Component } from "react";
import { ProfileData, ProfileSocial, ProfileSocialLink } from "../StyleComponent/HomeStyle";
import { UilLinkedin, UilGithub, UilInstagram } from "@iconscout/react-unicons";

export class HomeSocial extends Component {
  render() {
    return (
      <ProfileData>
        <ProfileSocial>
          <ProfileSocialLink href="https://www.linkedin.com/"  target="_blank">
            <i>
              <UilLinkedin></UilLinkedin>
            </i>
          </ProfileSocialLink>
          <ProfileSocialLink href="https://www.linkedin.com/"  target="_blank">
            <i>
              <UilGithub></UilGithub>
            </i>
          </ProfileSocialLink>
          <ProfileSocialLink href="https://www.linkedin.com/"  target="_blank">
            <i>
              <UilInstagram></UilInstagram>
            </i>
          </ProfileSocialLink>
        </ProfileSocial>
      </ProfileData>
    );
  }
}
