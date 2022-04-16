import styled from 'styled-components';

const PageNotFoundStyle = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: ${({theme}) => theme.colors.darkBlue};
    z-index: 20;
    display: grid;
    place-items: center;
    background-image: url('https://res.cloudinary.com/mohamad-hamoudii/image/upload/v1650093061/404-background_prdnzs.png');
    background-repeat: no-repeat;
    background-size: 100% 100%;

    main{
        h1, h3{
            color: ${({ theme }) => theme.colors.white};
            font-family: ${({ theme }) => theme.fonts.audiowide};
            text-transform: uppercase;
            text-align: center;
            position: relative;
        }
        h1{
            font-size: 120px;
            margin-bottom: 2rem;
            letter-spacing: 30px;
            left: 8px;
        }
        h3{
            font-size: 21px;
            letter-spacing: 10px;
        }
    }
    a{
        font-family: ${({ theme }) => theme.fonts.poppins};
        font-weight: 200;
        font-size: 16px;
        text-decoration: none;
        position: absolute;
        bottom: 50px;
        color: ${({ theme }) => theme.colors.gray};
        opacity: .9;
        transition: all .15s ease;
        display: grid;
        place-items: center;
        letter-spacing: 4px;
        border-bottom: 1px solid ${({ theme }) => theme.colors.gray};

        :hover{opacity: 1;}
    }

    @media (min-width: 769px) and (max-width: 1000px) {
        main{
            h1{
                font-size: 100px;
                margin-bottom: 1.75rem;
                left: 10px;
            }
            h3{
                font-size: 16px;
            }
        }
        a{
            font-size: 14px;
        }
    }

    @media (max-width: 768px) {
        background-image: url('https://res.cloudinary.com/mohamad-hamoudii/image/upload/v1650093060/404-mobile-background_eswzbe.png');
        main{
            h1{
                font-size: 71.5px;
                margin-bottom: 1.5rem;
                letter-spacing: 20px;
                left: 6px;
            }
            h3{
                font-size: 10px;
                letter-spacing: 8px;
            }
        }
        a{
            font-size: 12px;
        }
    }
`;

export default PageNotFoundStyle;