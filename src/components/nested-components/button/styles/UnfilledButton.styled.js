import styled from 'styled-components';

const UnfilledButtonStyle = styled.button`
    width: 100%;
    cursor: pointer;
    padding: .6rem 1.3rem .6rem 1.5rem;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.white};

    font-family : ${({ theme }) => theme.fonts.jost};
    font-size: ${({ theme }) => theme.textSizes.desktop.upperCaseText};
    font-weight: 300;
    
    background: linear-gradient( ${({ theme }) => theme.colors.darkBlue},  ${({ theme }) => theme.colors.darkBlue}) padding-box, 
    linear-gradient(35deg, ${({ theme }) => theme.colors.gray}, ${({ theme }) => theme.colors.gray}) border-box;
    border: 1.75px solid transparent;
    border-radius: 0 25px 0 25px;

    letter-spacing: 4px;
    animation: removeBackgroundGradient .15s ease forwards;

    :hover{
        animation: addBackgroundGradient .15s ease forwards;
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
        padding: .571rem 1.3rem .571rem 1.5rem;
        font-size: ${({ theme }) => theme.textSizes.tablet.upperCaseText};
        border-radius: 0 23px 0 23px;
    }

    @media (max-width: 768px){
        padding: .4rem .8rem .4rem 1rem;
        font-size: ${({ theme }) => theme.textSizes.mobile.upperCaseText};
        border-radius: 0 17.5px 0 17.5px;
    }
`

export default UnfilledButtonStyle;