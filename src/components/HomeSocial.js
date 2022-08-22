import React, { Component } from "react";
import { ProfileData, ProfileSocial, ProfileSocialLink } from "./HomeStyle";
import { UilLinkedin, UilGithub, UilInstagram } from '@iconscout/react-unicons'

export class HomeSocial extends Component{
    render(){
        return(
            <ProfileData>
                <ProfileSocial>
                    <ProfileSocialLink href="https://www.linkedin.com/">
                        <i>
                            <UilLinkedin></UilLinkedin>
                        </i>
                    </ProfileSocialLink>
                    <ProfileSocialLink href="https://www.linkedin.com/">
                        <i>
                            <UilGithub></UilGithub>
                        </i>
                    </ProfileSocialLink>
                    <ProfileSocialLink href="https://www.linkedin.com/">
                        <i>
                            <UilInstagram></UilInstagram>
                        </i>
                    </ProfileSocialLink>
                </ProfileSocial>
            </ProfileData>
        )
    }
}