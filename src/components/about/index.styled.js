import styled from 'styled-components';
import mobileBackgroundImage from './mobileBackgroundImage.jpg';

const AboutStyle = styled.main`
    padding-top: 125px;
    min-height: 1000px;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    overflow: hidden;
    position: relative;
    
    #about{
        position: absolute;
        top: 17.5%;
    }

    .about-image{
        position: relative;
        width: 425px;
        height: 550px;
        border-radius: 80px;
        background-repeat: no-repeat;
        background-size: cover;

        ::after, ::before{
            content: '';
            position: absolute;
            width: 30px;
            height: 30px;
            border: 30px solid ${({ theme }) => theme.colors.offWhite};
            z-index: 1;
        }
        ::after{
            left: 0;
            top: 0;
            border-radius: 0 0 60px 0;
        }
        ::before{
            bottom: 0;
            right: 0;
            border-radius: 60px 0 0 0;
        }
    }

    .about-content{
        width: 41%;
        max-width: 500px;
        margin-left: 1rem;

        .title{
            padding-bottom: 1rem;
        }
        .text{
            padding: 0 0 2rem 0;
        }

        .buttons-container{
            position: relative;
            width: 100%;
            height: 300px;
            background-color: ${({ theme }) => theme.colors.darkBlue};
            border-radius: 0 60px 0 60px;

            display: flex;
            flex-direction: column;
            justify-content: space-evenly;
            padding: 0 3rem;


            a{
                width: 100%;
                text-decoration: none;

                .unfilled-button{
                    letter-spacing: 8px;
                    font-weight: 400;
                    padding: 0.672rem 1.3rem 0.672rem 1.5rem;
                }
                button{
                    .background-gradient{
                        background-size: auto 134%;

                        p{
                            letter-spacing: 8px;
                            padding: .5rem 1.3rem .5rem 1.5rem;
                        }
                    }
                }
            }

            ::after{
                content: '';
                position: absolute;
                top: 15px;
                right: 15px;
                width: 100%;
                height: 100%;
                background-image: url('https://res.cloudinary.com/mohamad-hamoudii/image/upload/v1649648152/button-container-background_zmeizv.png');
                background-repeat: no-repeat;
                background-size: 100% 100%;
                border-radius: 0 100px 0 160px;
                z-index: -1;
                opacity: .75;
            }
        }
    }

    @media (min-width: 769px) and (max-width: 1000px){
        padding-top: 50px;
        min-height: 750px;

        .about-image{
            width: 310px;
            height: 450px;

            ::after, ::before{
                width: 22.5px;
                height: 22.5px;
                border: 22.5px solid ${({ theme }) => theme.colors.offWhite};
            }
        }

        .about-content{
            width: 46%;
            max-width: 375px;
            margin-left: .5rem;

            .title{
                padding-bottom: .5rem;
            }
            .text{
                padding: 0 0 1.5rem 0;
            }

            .buttons-container{
                height: 250px;
                border-radius: 0 50px 0 50px;

                padding: 0 2rem;

                .unfilled-button{
                    letter-spacing: 7px;
                    padding: 0.646rem 1.3rem 0.646rem 1.5rem;
                }

                button{
                    .background-gradient{
                        background-size: auto 105%;

                        p{
                            letter-spacing: 7px;
                        }
                    }
                }

                ::after{
                    top: 12px;
                    right: 12px;
                    border-radius: 0 100px 0 130px;
                }
            }
        }
    }

    @media (max-width: 768px){
        padding-top: 20px;
        min-height: 820px;

        .about-image{
            display: none;
        }

        .about-content{
            width: 100%;
            margin-left: 0;
            padding: 0 1.75rem;

            .title{
                padding-bottom: .75rem;
            }
            .text{
                padding: 0 0 1.75rem 0;
            }

            .buttons-container{
                height: 250px;
                border-radius: 0 50px 0 50px;

                background-image: url('${mobileBackgroundImage}');
                // background-image: url('https://res.cloudinary.com/mohamad-hamoudii/image/upload/v1653317630/10_dbyrpy.jpg');
                background-position: center;
                background-repeat: no-repeat;
                background-size: cover;

                padding: 0 1.75rem;

                ::after{
                    top: 6px;
                    right: 6px;
                    opacity: .9;
                }
                ::before{
                    content: '';
                    width: 100%;
                    height: 100%;
                    position: absolute;
                    top: 0;
                    left: 0;
                    background: linear-gradient(130deg,  #ca003d,  ${({ theme }) => theme.colors.darkBlue},  #00b5d2);
                    border-radius: 0 50px 0 50px;
                    opacity: .6;
                }
            }
        }
    }
`

export default AboutStyle;