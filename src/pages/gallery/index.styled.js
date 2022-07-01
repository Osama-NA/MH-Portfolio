import styled from 'styled-components';

const GalleryPageStyle = styled.main`
    position: relative;
    width: 100vw;
    max-width: 1600px;
    padding-top: 4rem;
    background-color: #fff;
    min-height: 100vh;

    .gallery-header{
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        height: 110px;
        max-width: 1600px;
        background: linear-gradient(10deg, ${({ theme }) => theme.colors.black}, ${({ theme }) => theme.colors.darkBlue},${({ theme }) => theme.colors.darkBlue}, ${({ theme }) => theme.colors.black} );
        padding: 0 4rem;
        transform: translateY(-100%);
        animation: slideFromTop .75s ease .75s forwards;

        h1{
            color: ${({ theme }) => theme.colors.white};
            line-height: 0;
            font-size: 32px;
            font-family: ${({ theme }) => theme.fonts.jost};
            letter-spacing: 20px;
            text-transform: uppercase;
            font-weight: 100;
        }

        button{
            width: 140px;
            cursor: pointer;
            outline: none;
            color: ${({ theme }) => theme.colors.white};
            background: linear-gradient( ${({ theme }) => theme.colors.darkBlue},  ${({ theme }) => theme.colors.darkBlue}) padding-box, 
            linear-gradient(35deg, ${({ theme }) => theme.colors.gray}, ${({ theme }) => theme.colors.gray}) border-box;
            border: 2px solid transparent;
            display: grid;
            place-items: center;
            border-radius: 0 25px 0 25px;
            padding: 2.6px 2.82px 2.8px 2.83px;

            position: relative;
            letter-spacing: 4px;
            animation: removeBackgroundGradient .15s ease forwards;

            :hover{
                animation: addBackgroundGradient .15s ease forwards;
            }

            .background-gradient{
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: center;
                width: 100%;
                height: 100%;
                border-radius: 0 21px 0 21px;
                background: url('https://res.cloudinary.com/mohamad-hamoudii/image/upload/v1648668571/btn-gradient-bg_czqp7o.png');
                background-size: auto 100%;
                background-position: center;
                background-repeat: no-repeat;

                p{
                    text-transform: uppercase;
                    font-family : ${({ theme }) => theme.fonts.jost};
                    font-size: ${({ theme }) => theme.textSizes.desktop.upperCaseText};
                    font-weight: 400;
                    padding: .45rem 1rem .45rem 1rem;
                }
                svg{
                    padding: 0 0 0 1rem;
                    transition: all .15s ease;
                }
                &:hover{
                    svg{
                        transform: translateX(-.3rem);
                    }
                }
            }
        }
    }

    @keyframes addBackgroundGradient{
        from{
            background: linear-gradient( ${({ theme }) => theme.colors.darkBlue},  ${({ theme }) => theme.colors.darkBlue}) padding-box, 
            linear-gradient(50deg, ${({ theme }) => theme.colors.gray}, ${({ theme }) => theme.colors.gray}) border-box;
        }
        to{
            background: linear-gradient( ${({ theme }) => theme.colors.darkBlue},  ${({ theme }) => theme.colors.darkBlue}) padding-box, 
            linear-gradient(160deg, ${({ theme }) => theme.colors.pink}, ${({ theme }) => theme.colors.blue}, ${({ theme }) => theme.colors.pink}) border-box;
        }
    }

    @keyframes removeBackgroundGradient{
        from{
            background: linear-gradient( ${({ theme }) => theme.colors.darkBlue},  ${({ theme }) => theme.colors.darkBlue}) padding-box, 
            linear-gradient(160deg, ${({ theme }) => theme.colors.pink}, ${({ theme }) => theme.colors.blue}, ${({ theme }) => theme.colors.pink}) border-box;
        }
        to{
            background: linear-gradient( ${({ theme }) => theme.colors.darkBlue},  ${({ theme }) => theme.colors.darkBlue}) padding-box, 
            linear-gradient(50deg, ${({ theme }) => theme.colors.gray}, ${({ theme }) => theme.colors.gray}) border-box;
        }
    }

    @keyframes slideFromTop{
        from{
            transform: translateY(-100%);
        }
        to{
            transform: translateY(0%);
        }
    }

    .gallery{
        display: grid;
        padding: 2rem;
        grid-gap: 2rem;
        grid-template-columns: repeat(auto-fit, minmax(30vw, 1fr));
        grid-auto-rows: 35vh;
        grid-auto-flow: dense;

        img{
            max-width: 100%;
            height: auto;
            vertical-align: middle;
            display: inline-block;
            border-radius: 5px;
        }

        div{
            opacity: 0;
            cursor: pointer;
            display: flex;
            justify-content: center;
            align-items: center;
            box-shadow: 0 10px 35px -10px #00124033;
            transition: all .2s ease;

            img{
                width: 100%;
                height: 100%;
                object-fit: cover;
            }

            &:hover{
                transform: scale(1.012);
            }
        }
        .wide{
            grid-column: span 1;
            animation: fadeIn .5s ease 1.25s forwards;
        }
        .tall{
            grid-row: span 2;
            animation: fadeIn .5s ease 1.5s forwards;
        }
    }
    
    @keyframes fadeIn{
        from{
            opacity: 0;
        }
        to{
            opacity: 1;
        }
    }

    @media (min-width: 769px) and (max-width: 1000px){
        padding-top: 3.25rem;

        .gallery-header{
            height: 95px;
            padding: 0 2.5rem;

            h1{
                font-size: 24px;
            }

            button{
                width: 115px;
                border-radius: 0 23px 0 23px;

                .background-gradient{
                    border-radius: 0 19px 0 19px;

                    p{
                        font-size: ${({ theme }) => theme.textSizes.tablet.upperCaseText};
                    }
                }
            }
        }

        .gallery{
            padding: 1rem;
            grid-gap: 1rem;
            grid-template-columns: repeat(auto-fit, minmax(25vw, 1fr));
            grid-auto-rows: 30vh;

            img{
                border-radius: 4px;
            }

            div{
                box-shadow: 0 10px 35px -12px #00124033;
            }
        }
    }

    @media (max-width: 768px){
        padding-top: 3.25rem;

        .gallery-header{
            flex-direction: column-reverse;
            justify-content: space-between;
            align-items: flex-start;
            height: 105px;
            padding: 1.35rem 0 2.25rem;

            h1{
                position: relative;
                left: 10px;
                width: 100%;
                text-align: center;
                font-size: 22px;
                letter-spacing: 15px;
            }

            button{
                display: flex;
                flex-direction: row;
                align-items: center;
                align-self: center;
                background: none;
                width: auto;
                border: none;
                animation: none;

                p{
                    text-transform: uppercase;
                    font-family : ${({ theme }) => theme.fonts.jost};
                    font-size: ${({ theme }) => theme.textSizes.mobile.upperCaseText};
                    font-weight: 300;
                }
                svg{
                    font-size: 12px;
                    margin-right: 1rem;
                }
                :hover{
                    animation: none;
                }

                .background-gradient{
                    display: none;
                }
            }
        }

        .gallery{
            padding: .6rem;
            grid-gap: .6rem;
            grid-template-columns: repeat(auto-fit, minmax(35vw, 1fr));
            grid-auto-rows: 17.5vh;

            img{
                border-radius: 3px;
            }

            div{
                box-shadow: 0 10px 35px -12px #00124033;
            }
        }
    }

`
export default GalleryPageStyle;