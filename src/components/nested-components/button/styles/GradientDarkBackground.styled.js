import styled from 'styled-components';

const GradientDarkBackgroundStyle = styled.button`
    cursor: pointer;
    display: grid;
    place-items: center;
    position: relative;
    min-width: 125px;
    color: ${({ theme }) => theme.colors.white};
    background: linear-gradient( ${({ theme }) => theme.colors.darkBlue},  ${({ theme }) => theme.colors.darkBlue}) padding-box, 
    linear-gradient(35deg, ${({ theme }) => theme.colors.gray}, ${({ theme }) => theme.colors.gray}) border-box;
    border: 1.75px solid transparent;
    border-radius: 0 25px 0 25px;
    padding: 2.6px 2.82px 2.9px 2.83px;

    position: relative;
    letter-spacing: 4px;
    animation: removeBackgroundGradient .15s ease forwards;

    :hover{
        animation: addBackgroundGradient .15s ease forwards;
    }

    .background-gradient{
        display: grid;
        place-items: center;
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
            padding: .45rem 1.3rem .4rem 1.5rem;
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

    @media (min-width: 769px) and (max-width: 1000px){
        min-width: 90px;
        border-radius: 0 23px 0 23px;
        padding: 2.25px 2.2px 2.4px 2.2px;

        .background-gradient{
            border-radius: 0 19px 0 19px;

            p{
                font-size: ${({ theme }) => theme.textSizes.tablet.upperCaseText};
                padding: .45rem 1.3rem .4rem 1.5rem;
            }
        }
    }

    @media (max-width: 768px){
        min-width: 60px;
        border-radius: 0 17.5px 0 17.5px;
        padding: 2.4px 2px 2.4px 2px;

        :hover{
            animation: none;
        }

        .background-gradient{
            border-radius: 0 14px 0 14px;

            p{
                font-size: ${({ theme }) => theme.textSizes.mobile.upperCaseText};
                padding: .25rem .8rem .25rem 1rem;
            }
        }
    }
`

export default GradientDarkBackgroundStyle;