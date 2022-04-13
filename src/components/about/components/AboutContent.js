import React from 'react';
import Title from '../../nested-components/title/'
import Text from '../../nested-components/text/';
import theme from '../../../themes/defaultTheme';
import ButtonsContainer from './ButtonsContainer';

const AboutContent = ({text}) => {
    return (
        <article className="about-content">
            <Title title="About me" color={theme.colors.darkBlue} />
            <Text text={text} color={theme.colors.darkBlue} />
            <ButtonsContainer />
        </article>
  )
}

export default AboutContent;