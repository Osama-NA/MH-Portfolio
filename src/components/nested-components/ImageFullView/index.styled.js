import styled from 'styled-components'

const ImageFullViewStyle = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 300;

    width: 100vw;
    height: 100vh;

    background-color: rgba(0,0,0,.85);
    
    display: flex;
    align-items: center;
    justify-content: center;

    .image-container{
        display: flex;
        align-items: center;
        justify-content: center;
        width: auto;
        height: 82vh;
        z-index: 2;
        
        img{
            width: auto;
            max-width: 98vw;
            height: 100%;
            border-radius: 3px;
        }
    }

    .close-container{
        position: absolute;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        display: flex;
        justify-content: center;
        z-index: 1;

        .close-button{
            cursor: pointer;
            position: absolute;
            top: 0;
            background-color: ${({ theme }) => theme.colors.offWhite};
            border-radius: 0 0 30px 30px;
            display: grid;
            place-items: center;

            height: 35px;
            width: 35px;

            .left-corner{
                left: -21px;

                ::after{ border-radius: 0 30px 0 0; }
            }
            .right-corner{
                right: -21px;

                ::after{ border-radius: 30px 0 0 0; }
            }
            .left-corner, .right-corner{
                position: absolute;
                top: 0;
                height: 60%;
                width: 60%;
                background-color: ${({ theme }) => theme.colors.offWhite};

                ::after{
                    content: '';
                    position: absolute;
                    left: 0;
                    top: 0;
                    width: 100%;
                    height: 100%;
                    background-color: #00030d;
                }
            }

            ::after, ::before{
                content: '';
                width: 2.5px;
                height: 15px;
                background-color: #00030d;
                border-radius: 5px;

                position: absolute;
                top: 10px;
            }
            ::after{transform: rotateZ(45deg);}
            ::before{transform: rotateZ(-45deg);}
        }
    }

    @media (min-width: 769px) and (max-width: 1000px){
        .image-container{
            height: 55vh;
        }
    }

    @media (max-width: 768px){
        .image-container{
            height: auto;
            width: 98vw;

            img{
                width: 100%;
                max-height: 90vh;
                height: auto;
            }
        }

        .close-container{
            .close-button{
                height: 50px;
                width: 50px;
                border-radius: 0 0 0px 22.5px;
                right: 0;

                .left-corner, .right-corner{
                    display: none;
                }

                ::after, ::before{
                    height: 20px;

                    top: 13px;
                    right: 22px;
                }
            }
        }
    }
`

export default ImageFullViewStyle