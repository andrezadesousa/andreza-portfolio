import styled from "styled-components";

export const HomeData = styled.div`
    text-align: center;
    color:  var(--title-color);

    @media screen and (min-width: 1024px){
        text-align: initial;
    }
`;

export const HomeTitle = styled.h1`
    font-size: 2rem;
    margin: .75rem 0;

    @media screen and (min-width: 1024px){
        font-size: var(--big-font-size);
        margin-left: -4rem;
    }
`;

export const HomeSubtitle = styled.span`
    padding: 4rem;
    color: var(--text-color);
`;


export const HomeDescription = styled.p`
    color: var(--text-color);
    @media screen and (min-width: 1024px){
        padding: 0 3rem 0;
    }
`;

// Social media 
export const ProfileData = styled.div`
    display: grid;
    text-align: center;
    padding: 1rem 0.6rem 0rem;
`;

export const ProfileSocial = styled.ul`
    display: flex;
    justify-content: center;
    column-gap: .95rem;

    @media screen and (min-width: 1024px){
        display: flex;
        justify-content: left;
        column-gap: .97rem;
        padding: 0 3.5rem 0;
    }
`;

export const ProfileSocialLink = styled.a`
    font-size: 1.55rem;
    color: var(--first-color);
    transition: .3s;

    &:hover{
        color: var(--first-color-alt);
    }
`;

// Home Image 
export const HomeImg = styled.div`
    justify-self: center;

    img {
        width: 150px;
        animation: floaty 1.8s infinite alternate;
    }

    @media screen and (min-width: 1024px){
        img {
            width: 300px;
            margin-left: 6rem;
        }
    }
`;

export const HomeShadow = styled.div`
    width: 130px;
    height: 24px;
    background-color: var(--shadow-color);
    margin: 0 auto;
    border-radius: 50%;
    filter: blur(7px);
    animation: shadow 1.8s infinite alternate;

    @media screen and (min-width: 1024px){
        width: 250px;
        height: 40px;
        margin-left: 7rem;
    }
`;