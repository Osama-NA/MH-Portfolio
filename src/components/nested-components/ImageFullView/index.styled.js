import styled from 'styled-components'

const ImageFullViewStyle = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 30;

    width: 100vw;
    height: 100vh;

    background-color: #000000cc;
    
    display: flex;
    align-items: center;
    justify-content: center;

    .image-container{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 92vw;
        height: 75vh;
        
        img{
            width: auto;
            max-width: 92vw;
            height: 100%;
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
        z-index: -1;

        .close-button{
            cursor: pointer;
            position: absolute;
            top: 0;
            background-color: ${({ theme }) => theme.colors.offWhite};
            border-radius: 0 0 30px 30px;
            display: grid;
            place-items: center;

            height: 50px;
            width: 50px;

            .left-corner{
                left: -50px;

                ::after{ border-radius: 0 30px 0 0; }
            }
            .right-corner{
                right: -50px;

                ::after{ border-radius: 30px 0 0 0; }
            }
            .left-corner, .right-corner{
                position: absolute;
                top: 0;
                height: 100%;
                width: 100%;
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
                width: 3px;
                height: 25px;
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

        .close-container{
            .close-button{
                border-radius: 0 0 25px 25px;
                height: 40px;
                width: 40px;

                .left-corner{
                    left: -40px;

                    ::after{ border-radius: 0 25px 0 0; }
                }
                .right-corner{
                    right: -40px;

                    ::after{ border-radius: 25px 0 0 0; }
                }

                ::after, ::before{
                    height: 20px;

                    top: 8px;
                }
            }
        }
    }

    @media (max-width: 768px){
        .image-container{
            height: auto;
            width: 90vw;

            img{
                width: 100%;
                max-height: 80vh;
                height: auto;
            }
        }

        .close-container{
            .close-button{
                border-radius: 0 0 0px 45px;
                right: 0;

                .left-corner, .right-corner{
                    display: none;
                }

                ::after, ::before{
                    height: 20px;

                    top: 12px;
                    right: 20px;
                }
            }
        }
    }
`

export default ImageFullViewStyle