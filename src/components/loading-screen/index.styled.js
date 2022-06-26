import styled from 'styled-components';

const LoadingScreenStyle = styled.nav`
    position: fixed;
    left: 0;
    top: 0;
    display: grid;
    place-items: center;
    width: 100vw;
    height: 100vh;
    background-color: ${({ theme }) => theme.colors.darkBlue};

    z-index: 10;

    animation: fadeOut .25s linear 1.75s forwards;

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
            animation: load 1.75s ease infinite;
        }
    }
    .blur-layer{
        position: absolute;
        width: 100vw;
        height: 100vh;
        z-index: 2;
        backdrop-filter: blur(52px);
    }
    .blurred-colors{
        display: grid;
        place-items: center;
        position: absolute;
        width: 100vw;
        height: 100vh;

        .color-1{
            opacity: .5;
            position: relative;
            top: -2rem;
            left: -2rem;
            width: 300px;
            height: 65px;
            z-index: 1;
            border-radius: 50%;
            background: linear-gradient(60.53deg, ${({ theme }) => theme.colors.blue} 216.57%, rgba(252, 0, 255, 0) 216.58%);
            transform: matrix(0.98, 0.05, 0.21, 1, 0, 0);
        }
        .color-2{
            opacity: .7;
            position: absolute;
            width: 340px;
            height: 50px;
            border-radius: 50%;
            background: linear-gradient(60.53deg, ${({ theme }) => theme.colors.pink} 216.57%, rgba(252, 0, 255, 0) 216.58%);
            transform: matrix(-0.99, -0.28, 0.13, 0.96, 0, 0);
        }
    }

    // MOBILE DESIGN
    @media (max-width: 768px) {
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
        .blur-layer{
            backdrop-filter: blur(30px);
        }
        .blurred-colors{
            .color-1{
                opacity: .45;
                top: -2rem;
                left: -1rem;
                width: 200px;
                height: 30px;
            }
            .color-2{
                opacity: .8;
                width: 150px;
                height: 22px;
            }
        }
    }
`;

export default LoadingScreenStyle;