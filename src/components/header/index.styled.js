import styled from 'styled-components';

const HeaderStyle = styled.header`
    position: fixed;
    width: 100vw;
    max-width: 1600px;
    padding: 1.25rem 4rem;
    border-bottom: 1px solid ${({ theme }) => theme.colors.white};
    z-index: 5;

    .content{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        position: relative;
        z-index: 1;

        .menu-button{ display: none; }

            @keyframes expand{
                from{
                    opacity: 0;
                    transform: scale(0);
                }
                to{
                    opacity: 1;
                    transform: scale(1);
                }
            }

        .menu{
            font-family: ${({ theme }) => theme.fonts.poppins};
            font-size: ${({ theme }) => theme.textSizes.desktop.text};
            font-weight: 300;
            display: flex;
            flex-direction: row;
            list-style-type: none;

            li{
                opacity: 0;
                cursor: pointer;
                padding: 0 1.5rem;
                animation: expand .45s ease forwards;

                a{
                    color: ${({ theme }) => theme.colors.gray};
                    text-decoration: none;
                    transition: all .15s ease;

                    :hover{ color: ${({ theme }) => theme.colors.white}; }
                }
                :nth-child(2){ animation-delay: .15s; }
                :nth-child(3){ animation-delay: .3s; }
                :nth-child(4){
                    animation-delay: .45s;
                    padding-right: 0;
                 }
            }
        }

        .logo{
            opacity: 0;
            position: relative;
            color: ${({ theme }) => theme.colors.white};
            cursor: pointer;
            font-family: ${({ theme }) => theme.fonts.audiowide};
            font-size: ${({ theme }) => theme.textSizes.desktop.secondaryHeading};
            font-weight: 100;
            letter-spacing: 7px;
            text-transform: uppercase;
            animation: expand .45s ease forwards;
        }
    }

    .header-background{
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        // background-image: url('https://res.cloudinary.com/mohamad-hamoudii/image/upload/v1648844025/header-background_o5byae.png');
        background-position: center;
        background-size: cover;
    }

    // TABLET DESIGN
    @media (min-width:769px) and (max-width: 1000px){
        padding: 1rem 2.5rem;

        .content{
            .menu{
                font-size: ${({ theme }) => theme.textSizes.tablet.text};

                li{
                    padding: 0 .75rem;
                }
            }

            .logo{
                font-size: ${({ theme }) => theme.textSizes.tablet.secondaryHeading};
            }
        }
    }

    // MOBILE DESIGN
    @media (max-width: 768px){
        min-width: 350px;
        position: fixed;
        width: 100vw;
        padding: 0;
        background-color: none;

        .content{
            display: flex;
            flex-direction: column;


            @keyframes dashOneOpen{
                from{
                    top: 0px;
                    width: 60%;
                    transform: rotateZ(0);
                }
                to{
                    top: 5.5px;
                    width: 80%;
                    transform: rotateZ(45deg);
                }
            }
            @keyframes dashOneClose{
                from{
                    top: 5.5px;
                    width: 80%;
                    transform: rotateZ(45deg);
                }
                to{
                    top: 0px;
                    width: 60%;
                    transform: rotateZ(0);
                }
            }
            @keyframes dashTwoOpen{
                from{
                    opacity: 1;
                }
                to{
                    opacity: 0;
                }
            }
            @keyframes dashTwoClose{
                from{
                    opacity: 0;
                }
                to{
                    opacity: 1;
                }
            }
            @keyframes dashThreeOpen{
                from{
                    top: 0px;
                    transform: rotateZ(0);
                }
                to{
                    top: -5.5px;
                    transform: rotateZ(-45deg);
                }
            }
            @keyframes dashThreeClose{
                from{
                    top: -5.5px;
                    transform: rotateZ(-45deg);
                }
                to{
                    top: 0px;
                    transform: rotateZ(0);
                }
            }
            @keyframes menuButtonSlideIn{
                from{
                    opacity: 0;
                    // left: -5rem;
                    transform: scale(0)
                }
                to{
                    opacity: 1;
                    // left: 1.6rem;
                    transform: scale(1)
                }
            }
            .menu-button{
                opacity: 0;
                display: flex;
                flex-direction: column;
                position: absolute;
                left: 1.6rem;
                top: 1.25rem;
                width: 24px;
                animation: menuButtonSlideIn .35s ease-out .2s forwards;

                .dash{
                    position: relative;
                    height: 2.5px;
                    background-color: ${({ theme }) => theme.colors.white};
                    border-radius: 30px;
                    margin-bottom: 3px;
                    animation-duration: .15s;
                    animation-fill-mode: forwards;
                    animation-timing-function: ease-out;
                }
                .dash-1{
                    width: 60%;
                }
                .dash-2{
                    width: 100%;
                }
                .dash-3{
                    width: 80%;
                }
            }

            @keyframes openMenu{
                from{
                    height: 0px;
                }
                to{
                    height: 241px;
                }
            }
            @keyframes closeMenu{
                from{
                    height: 241px;
                }
                to{
                    height: 0px;
                }
            }

            .menu{
                height: 0px;
                width: 100%;
                position: relative;
                overflow: hidden;
                font-size: ${({ theme }) => theme.textSizes.mobile.text};
                flex-direction: column;
                animation-duration: .2s;
                animation-fill-mode: forwards;
                animation-timing-function: ease-out;

                li{
                    padding: 1.25rem 0;
                    position: relative;
                    display: grid;
                    place-items: center;

                    ::after{
                        content: '';
                        position: absolute;
                        bottom: 0;
                        height: 1px;
                        width: 265px;
                        background-color: ${({ theme }) => theme.colors.white};
                        opacity: 0.1;
                    }

                    :nth-child(1){ padding: 1rem 0 1rem; }

                    :nth-last-child(1){
                        padding: 1rem 0 2.5rem;

                        ::after{
                            display: none;
                        }
                     }

                    :hover{ color: ${({ theme }) => theme.colors.white}; }
                }
            }

            @keyframes topToBottom{
                from{
                    opacity: 0;
                    top: -5rem;
                }
                to{
                    opacity: 1;
                    top: 0;
                }
            }

            .logo{
                opacity: 0;
                font-size: 11px;
                padding: 1.25rem 0;
                position: relative;
                left: 2px;
                letter-spacing: 6px;
                animation: topToBottom .35s ease-in forwards;
            }
        }

        .header-background{
             background-image: url('https://res.cloudinary.com/mohamad-hamoudii/image/upload/v1650087025/mobile-menu-background_ylbezd.png');
        }
    }
`;

export default HeaderStyle;