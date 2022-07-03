import styled from 'styled-components'

const GalleriesStyle = styled.main`
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 0 5rem;
    background-color: ${({ theme }) => theme.colors.offWhite};
    
    #galleries{
        position: absolute;
        top: -12.5%;
    }

    .galleries-title{
        font-family: ${({ theme }) => theme.fonts.jost};
        color: ${({ theme }) => theme.colors.darkBlue};
        text-transform: uppercase;
        font-size: 75px;
        font-weight: 100;
        letter-spacing: 25px;
    }

    .galleries-container{
        width: 100%;
        display: flex;
        flex-direction: column;

        .gallery{
            position: relative;
            margin: 4rem 0;
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;

            .gallery-title-container{
                width: 100%;
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: center;

                .arrow{
                    position: absolute;
                    width: 100%;
                    height: 1px;
                    background-color:  ${({ theme }) => theme.colors.darkBlue};
                }
                .gallery-title{
                    position: relative;
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    padding: 0 2.5rem;
                    background-color:  ${({ theme }) => theme.colors.offWhite};
                    z-index: 1;
                    
                    h2{
                        color: ${({ theme }) => theme.colors.darkBlue};
                        font-family: ${({ theme }) => theme.fonts.poppins};
                        font-size:  ${({ theme }) => theme.textSizes.desktop.title};
                        font-weight: 600;
                        letter-spacing: 3px;
                    }
                    .left, .right{
                        position: absolute;
                        font-size: 9px;
                        color: ${({ theme }) => theme.colors.darkBlue};
                    }
                    .left{
                        left: 0px;
                        transform: rotateZ(180deg);
                    }
                    .right{ right: 0px; }
                }
            }

            .images{
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: space-evenly;
                width: 100%;
                padding: 7rem 1rem 1rem;
                z-index: 1;

                .image-container{
                    cursor: pointer;
                    width: 285px;
                    height: 375px;
                    border-radius: 0 50px 0 50px;
                    margin: 0 1.5rem;
                }
            }

            .view-gallery-container{
                width: 100%;
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: center;
                padding: 6rem 0 0;

                .arrow{
                    position: absolute;
                    width: 100%;
                    height: 1px;
                    background-color:  ${({ theme }) => theme.colors.darkBlue};
                }
                .view-button-container{
                    position: relative;
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    padding: 0 2.5rem;
                    background-color:  ${({ theme }) => theme.colors.offWhite};
                    z-index: 1;

                    .view-button{
                        text-decoration: none;
                        width: 184px;
                        cursor: pointer;
                        display: grid;
                        place-items: center;
                        position: relative;
                        color: ${({ theme }) => theme.colors.white};
                        border: 2px solid transparent;
                        border-radius: 0 25px 0 25px;
                        padding: 1.8px 1.82px 2px 1.83px;
                        background: linear-gradient( ${({ theme }) => theme.colors.white},  ${({ theme }) => theme.colors.white}) padding-box, 
                        linear-gradient(35deg, ${({ theme }) => theme.colors.darkBlue}, ${({ theme }) => theme.colors.darkBlue}) border-box;
                    
                        position: relative;
                        letter-spacing: 4px;
                        animation: removeGradient .15s ease forwards;

                        :hover{
                            animation: addGradient .15s ease forwards;
                        }

                        .gradient{
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

                        @keyframes addGradient{
                            from{
                                background: linear-gradient( ${({ theme }) => theme.colors.white},  ${({ theme }) => theme.colors.white}) padding-box, 
                                linear-gradient(50deg, ${({ theme }) => theme.colors.darkBlue}, ${({ theme }) => theme.colors.darkBlue}) border-box;
                            }
                            to{
                                background: linear-gradient( ${({ theme }) => theme.colors.white},  ${({ theme }) => theme.colors.white}) padding-box, 
                                linear-gradient(160deg, ${({ theme }) => theme.colors.pink}, ${({ theme }) => theme.colors.blue}, ${({ theme }) => theme.colors.pink}) border-box;
                            }
                        }

                        @keyframes removeGradient{
                            from{
                                background: linear-gradient( ${({ theme }) => theme.colors.white},  ${({ theme }) => theme.colors.white}) padding-box, 
                                linear-gradient(160deg, ${({ theme }) => theme.colors.pink}, ${({ theme }) => theme.colors.blue}, ${({ theme }) => theme.colors.pink}) border-box;
                            }
                            to{
                                background: linear-gradient( ${({ theme }) => theme.colors.white},  ${({ theme }) => theme.colors.white}) padding-box, 
                                linear-gradient(50deg, ${({ theme }) => theme.colors.darkBlue}, ${({ theme }) => theme.colors.darkBlue}) border-box;
                            }
                        }
                    }
                    .left, .right{
                        position: absolute;
                        font-size: 9px;
                        color: ${({ theme }) => theme.colors.darkBlue};
                    }
                    .left{
                        left: 0px;
                        transform: rotateZ(180deg);
                    }
                    .right{ right: 0px; }
                }
            }
        }
    }

    @media (min-width: 769px) and (max-width: 1000px){
        padding: 0 0  3.25rem;
        
        #galleries{
            top: 0;
        }

        .galleries-title{
            font-size: 57px;
        }

        .galleries-container{
            .gallery{
                margin: 2.5rem 0;

                .gallery-title-container{
                    .gallery-title{
                        padding: 0 2rem;
                        
                        h2{
                            font-size:  ${({ theme }) => theme.textSizes.tablet.title};
                        }
                        .left, .right{
                            font-size: 8px;
                        }
                    }
                }

                .images{
                    padding: 5rem 1rem 1rem;

                    .image-container{
                        width: 235px;
                        height: 320px;
                        border-radius: 0 45px 0 45px;
                        margin: 0 1rem;
                    }
                }

                .view-gallery-container{
                    padding: 4rem 0 0;

                    .view-button-container{
                        padding: 0 2rem;

                        .view-button{
                            width: 160px;
                            border-radius: 0 23px 0 23px;
                            padding: 1.5px 1.7px 1.1.2px 1.7px;

                            .gradient{
                                    border-radius: 0 19px 0 19px;

                                    p{
                                        font-size: ${({ theme }) => theme.textSizes.tablet.upperCaseText};
                                        padding: .45rem 1.3rem .4rem 1.5rem;
                                    }
                                }
                            }
                        }
                        .left, .right{
                            font-size: 8px;
                        }
                    }
                }
            }
        }
    }

    @media (max-width: 768px){
        padding: 0 0  3rem;
        
        #galleries{
            top: 0;
        }

        .galleries-title{
            position: relative;
            right: -8px;
            font-size: 32px;
            letter-spacing: 20px;
            font-weight: 200;
        }

        .galleries-container{
            .gallery{
                margin: 2.25rem 0;

                .gallery-title-container{
                    .arrow{
                        height: 1px;
                    }
                    .gallery-title{
                        padding: 0 1.75rem;
                        
                        h2{
                            font-size:  ${({ theme }) => theme.textSizes.mobile.title};
                            font-weight: 600;
                            letter-spacing: 3px;
                        }
                        .left, .right{
                            font-size: 7px;
                        }
                    }
                }

                .images{
                    padding: 3.5rem 1rem 1.5rem;

                    .image-container{
                        width: 95px;
                        height: 135px;
                        border-radius: 0 20px 0 20px;
                        margin: 0 .5rem;
                    }
                }

                .view-gallery-container{
                    padding: 2.25rem 0 0;

                    .arrow{
                        height: 1px;
                    }
                    .view-button-container{
                        padding: 0 2.5rem;

                        .view-button{
                            width: 140px;
                            border-radius: 0 17.5px 0 17.5px;
                            padding: 1.2px 1.2px 1.2px 1.2px;

                            :hover{
                                animation: none;
                            }
                            .gradient{
                                border-radius: 0 14px 0 14px;

                                p{
                                    font-size: ${({ theme }) => theme.textSizes.mobile.upperCaseText};
                                    font-weight: 300;
                                    padding: .3rem .8rem .3rem 1rem;
                                }
                            }
                        .left, .right{
                            font-size: 7px;
                        }
                    }
                }
            }
        }
    }
`

export default GalleriesStyle