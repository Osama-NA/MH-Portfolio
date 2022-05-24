import styled from 'styled-components';
import bottomDesign from './bottom-background.svg';
import blurredColors from './blurred-colors-bg.png';

const HomeSectionStyle = styled.main`
    position: relative;
    display: grid;
    place-items: center;
    width: 100%;
    min-height: 800px;
    background-color: ${({ theme }) => theme.colors.darkBlue};
    z-index: 0;

    #home{
        position: absolute;
        top: 0;
    }

    .container{
        position: relative;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-evenly;
        width: 100%;
        color: ${({ theme }) => theme.colors.white};
        z-index: 0;

        .content{
            position: relative;

            h1,h2{
                font-family: ${({ theme }) => theme.fonts.poppins};
                font-size: 36px;
                line-height: 62px;
                letter-spacing: 3px;
            }
            h1{
                font-weight: 500;
            }
            h2{
                font-weight: 100;
            }
            .buttons{
                margin-top: 2rem;
                display: flex;
                flex-direction: row;

                a{
                    margin-right: 1.25rem;

                    .button{
                        height: 100%;
                        width: 175px;
                    }
                }
            }

            ::after{
                position: absolute;
                content: '';
                top: -15px;
                left: -3.5rem;
                height: 120%;
                width: 1px;
                background-color: ${({theme}) => theme.colors.white};
                border-top: none;
                border-right: none;
                opacity: .5;
            }
            .dash{
                position: absolute;
                content: '';
                top: -15px;
                left: -4.1rem;
                height: 2px;
                width: 20px;
                background-color: ${({theme}) => theme.colors.white};
                z-index: 1;
            }
        }

        .image-container{
            display: grid;
            place-items: center;
            z-index: 0;

            .background-circle{
                position: relative;
                display: grid;
                place-items: center;
                height: 350px;
                width: 350px;
                border-radius: 50%;
                background: linear-gradient(45.24deg, #00FFE0 -2.64%, #001447 45.64%, #FF004D 111.8%);

                .mh-img{
                    position: absolute;
                    bottom: 0;
                    width: 450px;
                    height: auto;
                    border-radius: 50%;
                    z-index: 2;
                }

                .oval-gradient{
                    position: absolute;
                    width: 106%;
                    height: 106%;
                    border-radius: 50%;
                    border: 2px solid #fff;
                    opacity: .75;
                    z-index: -2;
                }

                .arrow{
                    position: absolute;
                    bottom: -80px;
                    display: grid;
                    place-items: center;

                    img{
                        cursor: pointer;
                        height: auto;
                        width: 200px;
                    }
                }
            }
        }
    }

    .blurred-colors-bg{
        position: absolute;
        width: 100%;
        height: 100%;
        z-index: -1;
        opacity: .6;
        background: url('${blurredColors}');
        background-size: cover;
        background-repeat: no-repeat;
    }

    .bottom-section-design{
        position: absolute;
        width: 100%;
        min-height: 90px;
        background-image: url('${bottomDesign}');
        background-size: 100% auto;
        background-repeat: no-repeat;
        bottom: -90px;
        left: -0.45px;
    }

    @media (min-width: 769px) and (max-width: 1000px){
        min-height: 650px;

        .container{
            .content{

                h1,h2{
                    font-size: 28px;
                    line-height: 48px;
                    letter-spacing: 3px;
                }

                .buttons{
                    margin-top: 1.25rem;

                    a{
                        .button{
                            width: 145px;
                        }
                    }
                }

                ::after{
                    top: -15px;
                    left: -2rem;
                    height: 120%;
                    width: 1px;
                    opacity: .5;
                }
                .dash{
                    top: -15px;
                    left: -2.45rem;
                    width: 15px;
                }
            }

            .image-container{
                .background-circle{
                    height: 240px;
                    width: 240px;
                    background: linear-gradient(45.24deg, #00FFE0 -2.64%, #001447 45.64%, #FF004D 111.8%);

                    .mh-img{
                        width: 320px;
                    }

                    .arrow{
                        bottom: -50px;

                        img{
                            width: 150px;
                        }
                    }
                }
            }
        }
    }

    @media (max-width: 768px){
        height: 700px;
        min-height: 700px;

        .container{
            height: 100%;
            flex-direction: column-reverse;
            justify-content: space-between;

            .content{
                margin: 0 0 5.5rem 1.15rem;

                h1,h2{
                    font-size: 22px;
                    line-height: 40px;
                }
                .buttons{
                    margin-top: 1.25rem;

                    a{
                        margin-right: 1rem;

                        .button{
                            width: 130px;
                        }
                    }
                    a:nth-child(2){
                        .button{
                            padding-top: .11rem;
                        }
                    }
                }

                ::after{
                    top: -12px;
                    left: -1.75rem;
                    opacity: .3;
                }
                .dash{
                    top: -13px;
                    left: -2.1rem;
                    height: 1px;
                    width: 12px;
                }
            }

            .image-container{
                margin: 8rem 0 0;

                .background-circle{
                    height: 200px;
                    width: 200px;

                    .mh-img{
                        width: 250px;
                    }

                    .arrow{
                        bottom: -45px;

                        img{
                            width: 120px;
                        }
                    }
                }
            }
        }

        .blurred-colors-bg{
            position: absolute;
            width: 100%;
            height: 100%;
            z-index: -1;
            opacity: .6;
            background: url('${blurredColors}');
            background-size: cover;
            background-repeat: no-repeat;
        }
    }
`;

export default HomeSectionStyle;