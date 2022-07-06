import styled from 'styled-components'
import x from './socials-button.png'
import y from './form-bg.png'
import blurredColors from './bg.png';
import mobileBlurredColors from './mobile-bg.png';

const ContactStyle = styled.main`
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    background-color: ${({ theme }) => theme.colors.darkBlue};
    padding: 7rem 0 6rem;
    z-index: 0;
    
    #contact{
        position: absolute;
        top: 17.5%;
    }

    @keyframes fadeInBackground{
        from{
            opacity: 0;
        }
        to{
            opacity: .6;
        }
    }

    @keyframes slideDown{
        from{
            opacity: 0;
            top: -100%;
        }
        to{
            opacity: .7;
            top: 17.5px;
        }
    }

    @keyframes slideRight{
        from{
            opacity: 0;
            left: -100%;
        }
        to{
            opacity: .7;
            left: 0;
        }
    }

    .contact-title-container{
        display: none;
    }
    .info-container{
        opacity: 0;
        color: ${({ theme }) => theme.colors.white};

        .title{
            display: inline-block;
            margin-bottom: 1rem;
        }
        .text{
            letter-spacing: 3px;
            width: 100%;
            max-width: 45ch;
            line-height: 30px;
        }
        .socials-links-container{
            display: flex;
            flex-direction: row;
            align-items: center;
            margin: 1rem 0;
            position: relative;
            left: -20px;

            .link{
                position: relative;
                width: 95px;
                height: 95px;
                display: grid;
                place-items: center;

                a{
                    color: ${({ theme }) => theme.colors.white};
                    cursor: pointer;
                    position: relative;
                    left: .85px;
                    top: .9px;
                    padding: 1rem;
                    z-index: 1;

                    svg{
                        font-size:  ${({ theme }) => theme.textSizes.desktop.heading};
                    }
                }

                ::after{
                    content: '';
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    background: url('${x}');
                    background-repeat: no-repeat;
                    background-size: 115% 115%;
                    background-position: center;
                    opacity: .8;
                    z-index: 0;
                }
            }
        }
    }

    .form-container{
        opacity: 0;
        display: flex;
        flex-direction: column;
        position: relative;
        width: 400px;
        border-radius: 0 60px 0 60px;
        overflow: hidden;
        box-shadow: 0px 6px 35px -10px #1a1a1a12;
        z-index: 0;

        form{
            padding: 2.5rem 2.25rem 1.5rem;
            color: ${({ theme }) => theme.colors.white};
            z-index: 2;
            font-family : ${({ theme }) => theme.fonts.jost};

            .form-group{
                display: flex;
                flex-direction: column;
                padding: .75rem 0;

                label{
                    font-size: 14px;
                    font-weight: 300;
                    letter-spacing: 3px;
                }
                input, textarea{
                    font-family : ${({ theme }) => theme.fonts.jost};
                    color: ${({ theme }) => theme.colors.white};
                    outline: none;
                    border: none;
                    padding:  .6rem;
                    background-color: transparent;
                    font-size: 16px;
                    border-bottom: 1px solid #f8f8f8c2;
                    letter-spacing: 3px;
                }
                input::placeholder, textarea::placeholder{
                    font-family : ${({ theme }) => theme.fonts.jost};
                    color: #ffffff5e;
                    font-size: 16px;
                    letter-spacing: 3px;
                }
                textarea{
                    min-height: 100px;
                    resize: none;
                }
                textarea::-webkit-scrollbar{
                    width: 2px;
                }
                textarea::-webkit-scrollbar-thumb{
                    background-color: ${({ theme }) => theme.colors.white};
                }
            }
            .buttons-group{
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                padding: 1.75rem 0 1.25rem;

                .reset, .submit{
                    cursor: pointer;
                    text-transform: uppercase;
                    outline: none;
                    border: 1.5px solid transparent;
                    background-color: transparent;
                    font-size: 12px;
                    border-radius: 0 21px 0 21px;
                    letter-spacing: 4px;
                    font-family : ${({ theme }) => theme.fonts.jost};
                    color:  ${({ theme }) => theme.colors.white};
                }
                .reset{
                    margin: .6rem 1.75rem;
                }
                .submit{
                    padding: .6rem 1.75rem;
                    background: linear-gradient( #091b4a,#091b4a) padding-box,linear-gradient(35deg,#ccc,#ccc) border-box;
                    animation: removeBorderGradient .15s ease forwards;

                    :hover{
                        animation: addBorderGradient .15s ease forwards;
                    }
                }
            }
        }
        ::after{
            content: '';
            position: absolute;
            width: 100%;
            height: 100%;
            background: url('${y}');
            background-size: cover;
            background-position: center;
            opacity: .9;
            z-index: 1;
        }
    }

    .success-message{
        cursor: pointer;
        position: absolute;
        bottom: 25px;
        right: 40px;
        display: flex;
        flex-direction: row;
        align-items: center;
        background-color: #37c490;
        color: ${({ theme }) => theme.colors.white};
        border-radius: 0 15px;
        animation: slide-from-right 1s ease forwards;

        svg,p{
            line-height: 0;
            font-weight: 300;
            font-family:  ${({ theme }) => theme.fonts.jost};
            font-size:  ${({ theme }) => theme.textSizes.desktop.text};
            padding: 1rem 1.5rem;
            text-shadow: 0px 0px 15px #000;
        }
        svg{
            border-right: 1px solid ${({ theme }) => theme.colors.white};;
        }
    }

    .top-arrows{
        position: absolute;
        top: 17.5px;
        left: 25vw;
        transform: rotateZ(90deg);
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 65px;
        align-items: center;
        opacity: 0;

        .arrow{
            position: relative;
            height: 1px;
            background-color: ${({theme}) => theme.colors.offWhite};

            svg{
                font-size: 7px;
                transform: rotateZ(90deg);
                position: absolute;
                top: -3px;
                color: ${({ theme }) => theme.colors.offWhite};
            }
        }
        .arrow:nth-child(1){
            left: -12.5px;
            width: 75px;

            svg{left: 70px;}
        }
        .arrow:nth-child(2){
            left: 37.5px;
            width: 175px;

            svg{left: 170px;}
        }
        .arrow:nth-child(3){
            left: 12.5px;
            width: 125px;

            svg{left: 120px;}
        }
    }

    .left-arrows{
        position: absolute;
        left: 0px;
        bottom: 12%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 70px;
        align-items: center;
        opacity: 0;

        .arrow{
            position: relative;
            height: 1px;
            background-color: ${({ theme }) => theme.colors.offWhite};

            svg{
                font-size: 7px;
                transform: rotateZ(90deg);
                position: absolute;
                top: -3px;
                color: ${({ theme }) => theme.colors.offWhite};
            }
        }
        .arrow:nth-child(1){
            left: -75px;
            width: 29.2vw;

            svg{left: 28.95vw;}
        }
        .arrow:nth-child(2){
            left: 0px;
            width: 39vw;

            svg{left: 38.75vw;}
        }
        .arrow:nth-child(3){
            left: -37.5px;
            width: 34vw;

            svg{left: 33.75vw;}
        }
    }

    .blurred-colors-bg{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: -1;
        opacity: 0;
        background: url('${blurredColors}');
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
    }

    @keyframes slide-from-right {
        from{
            transform: translateX(100%);
        }
        to{
            transform: translateX(0%);
        }
    }
    @keyframes addBorderGradient{
        from{
            background: linear-gradient( #091b4a,#091b4a) padding-box,linear-gradient(35deg,#ccc,#ccc) border-box;
        }
        to{
            background: linear-gradient( #091b4a,#091b4a) padding-box,
            linear-gradient(160deg, ${({ theme }) => theme.colors.pink}, ${({ theme }) => theme.colors.blue}, ${({ theme }) => theme.colors.pink}) border-box;
        }
    }

    @keyframes removeBorderGradient{
        from{
            background: linear-gradient( #091b4a,#091b4a) padding-box, 
            linear-gradient(160deg, ${({ theme }) => theme.colors.pink}, ${({ theme }) => theme.colors.blue}, ${({ theme }) => theme.colors.pink}) border-box;
        }
        to{
            background: linear-gradient( #091b4a,#091b4a) padding-box,linear-gradient(35deg,#ccc,#ccc) border-box;
        }
    }

    @media (min-width: 769px) and (max-width: 1000px){
        padding: 5rem 1rem 4rem;

        .info-container{
            .title{
                margin-bottom: .5rem;
            }
            .text{
                line-height: 25px;
            }
            .socials-links-container{
                margin: .5rem 0;

                .link{
                    width: 80px;
                    height: 80px;

                    a{
                        padding: .75rem;

                        svg{
                            font-size:  ${({ theme }) => theme.textSizes.tablet.heading};
                        }
                    }
                }
            }
        }

        .form-container{
            width: 280px;
            border-radius: 0 40px 0 40px;

            form{
                padding: 1.25rem 1.5rem 1rem;

                .form-group{
                    padding: .5rem 0;

                    label{
                        font-size: 12px;
                    }
                    input, textarea{
                        padding:  .6rem;
                        font-size: 14px;
                    }
                    input::placeholder, textarea::placeholder{
                        font-size: 14px;
                    }
                    textarea{
                        min-height: 75px;
                    }
                }
                .buttons-group{
                    padding: 1rem 0 .5rem;

                    .reset, .submit{
                        font-size: 9px;
                        border-radius: 0 16px;
                    }
                    .reset{
                        margin: .4rem 1.2rem;
                    }
                    .submit{
                        padding: .4rem 1.2rem;
                    }
                }
            }
            ::after{
                background: url('${y}');
                background-size: cover;
                background-position: center;
            }
        }

        .success-message{
            bottom: 15px;
            right: 20px;
            border-radius: 0 12.5px;

            svg,p{
                font-size:  ${({ theme }) => theme.textSizes.tablet.text};
                padding: .6rem 1.25rem;
            }
        }

        .top-arrows{
            top: -20px;
            height: 50px;

            .arrow{
                height: 1px;

                svg{
                    font-size: 6px;
                    top: -2.75px;
                }
            }
        }

        .left-arrows{
            height: 50px;
            bottom: 9%;
            left: -50px;

            .arrow{
                height: 1px;

                svg{
                    font-size: 6px;
                    top: -2.75px;
                }
            }
            .arrow:nth-child(1){
                svg{left: 28.5vw;}
            }
            .arrow:nth-child(2){
                svg{left: 38.5vw;}
            }
            .arrow:nth-child(3){
                svg{left: 33.5vw;}
            }
        }
    }
    
    @media (max-width: 768px){
        flex-direction: column-reverse;
        align-items: center;
        justify-content: center;
        padding: 5rem 1rem 7rem;
        overflow: hidden;

        .contact-title-container{
            display: flex;
            align-items: center;
            margin-bottom: 3rem;
            z-index: 0;

            .arrow{
                position: absolute;
                width: 100%;
                height: 1px;
                background-color: ${({ theme }) => theme.colors.white};
                z-index: 1;
                left: 0;
                opacity: .7;
            }
            .contact-title{
                opacity: 0;
                display: flex;
                flex-direction: row;
                align-items: center;
                color: ${({ theme }) => theme.colors.white};
                z-index: 2;

                svg{
                    font-size: 6px;
                    position: relative;
                    top: .5px;
                }
                .left{
                    transform: rotateZ(180deg);
                }
            }
        }
        .title{
            display: inline-block;
            font-size: 22px !important;
            padding: 0 1.25rem 0 1.5rem;
            background-color: ${({ theme }) => theme.colors.darkBlue};
        }

        .info-container{
            margin: 4rem 0 1rem;

            .title{
                display: none;
            }
            .text{
                max-width: 40ch;
                text-align: center;
            }
            .socials-links-container{
                align-items: center;
                justify-content: center;
                margin: 1.5rem 0 1.25rem;
                left: 0;

                .link{
                    width: 75px;
                    height: 75px;

                    a{
                        left: .9px;
                        top: -1px;

                        svg{
                            font-size:  16px;
                        }
                    }

                    ::after{
                        background: url('${x}');
                        background-size: 115% 115%;
                        background-position: center;
                        opacity: .8;
                    }
                }
            }
        }

        .form-container{
            width: 100%;
            max-width: 325px;
            border-radius: 0 40px 0 40px;

            form{
                padding: 1.5rem 1.5rem 1rem;

                .form-group{
                    padding: 1rem 0;

                    label{
                        font-size: 10px;
                    }
                    input, textarea{
                        padding:  .6rem;
                        font-size: 12px;
                    }
                    input::placeholder, textarea::placeholder{
                        font-size: 12px;
                    }
                    textarea{
                        min-height: 80px;
                    }
                }
                .buttons-group{
                    padding: 1.25rem 0 1rem;

                    .reset, .submit{
                        border: 1.25px solid transparent;
                        font-size: 10px;
                        border-radius: 0  16px 0 16px;
                    }
                    .reset{
                        margin: .5rem 1.5rem;
                    }
                    .submit{
                        padding: .5rem 1.5rem;
                    }
                }
            }
        }

        .success-message{
            bottom: 345px;
            right: 1.5rem;

            svg,p{
                font-size:  ${({ theme }) => theme.textSizes.mobile.text};
                padding: .75rem 1.25rem;
            }
        }

        .top-arrows{
            bottom: -5px;
            top: unset;
            left: unset;
            transform: rotateZ(270deg);
            height: 35px;
            opacity: .7;

            .arrow{
                svg{
                    font-size: 7px;
                    transform: rotateZ(90deg);
                    top: -3px;
                }
            }
            .arrow:nth-child(1){
                left: -12.5px;
            }
            .arrow:nth-child(2){
                left: -30px;
            }
            .arrow:nth-child(3){
                left: -12.5px;
                width: 75px;

                svg{left: 70px;}
            }
        }

        .left-arrows{
            display: none;
        }

        .blurred-colors-bg{
            z-index: -1;
            background: url('${mobileBlurredColors}');
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
        }

        @keyframes slide-from-right {
            from{
                transform: translateX(100%);
            }
            to{
                transform: translateX(0%);
            }
        }
    }
`

export default ContactStyle