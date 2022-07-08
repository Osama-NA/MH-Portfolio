import styled from 'styled-components';
import loadingScreen from './loading-screen.png'

const LoadingScreenStyle = styled.nav`
    position: fixed;
    left: 0;
    top: 0;
    display: grid;
    place-items: center;
    width: 100vw;
    height: 100vh;
    background-color: ${({ theme }) => theme.colors.darkBlue};
    // background-image: url('https://res.cloudinary.com/mohamad-hamoudii/image/upload/v1657294721/bg_dmycb2.png');
    background-image: url('${loadingScreen}');
    background-repeat: no-repeat;
    background-position: center;
    background-size: 140% 105%;
    z-index: 10;

    @keyframes fadeOut{
        0%{
            opacity: 1;
        }
        100%{
            opacity: 0;
        }
    }
    @keyframes load{
        0%{
            transform: translateX(0);
        }
        100%{
            transform: translateX(132px);
        }
    }

    .content{
        display: grid;
        place-items: center;
        position: absolute;
        z-index: 3;

        h1{
            text-transform: uppercase;
            font-family : ${({ theme }) => theme.fonts.audiowide};
            color : ${({ theme }) => theme.colors.white};
            font-size: ${({ theme }) => theme.textSizes.desktop.heading};
            font-weight: 100;
            letter-spacing: 7px;
            margin: 0 0 3rem 0;
        }
        .loader{
            width: 150px;
            height: 1.5px;
            background-color: ${({ theme }) => theme.colors.white};
            position: relative;
            border-radius: 30px;
        }
        .loader::after{
            content: '';
            position: absolute;
            width: 20px;
            height: 2px;
            background-color: ${({ theme }) => theme.colors.darkBlue};
            animation: load 3s ease infinite;
        }
    }

    // TABLET DESIGN
    @media (min-width: 769px) and (max-width: 1000px) {
        background-size: 250% 100%;
    }

    // MOBILE DESIGN
    @media (max-width: 768px) {
        background-size: 275% 100%;

        @keyframes load{
            0%{
                transform: translateX(0);
            }
            100%{
                transform: translateX(108px);
            }
        }
        .content{
            h1{
                font-size: ${({ theme }) => theme.textSizes.mobile.heading};
                margin: 0 0 2.5rem 0;
            }
            .loader{
                width: 120px;
            }
        }
    }
`;

export default LoadingScreenStyle;