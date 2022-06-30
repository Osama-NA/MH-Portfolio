import styled from 'styled-components';

const GalleryPageStyle = styled.main`
    position: relative;
    width: 100vw;
    max-width: 1600px;
    padding-top: 4rem;

    .gallery-header{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        height: 110px;
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
                    padding: .45rem 1rem .4rem 1rem;
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
        }

        div{
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
        }
        .tall{
            grid-row: span 2;
        }
    }
`
export default GalleryPageStyle;