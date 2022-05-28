import GradientDarkBackground from "./components/GradientDarkBackground";
import UnfilledButton from "./components/UnfilledButton";
import BlurredBackground from "./components/BlurredBackground";

const Button = ({ text, width, type }) => {
    const button = {
        "unfilled": <UnfilledButton text={text} width={width} />,
        "dark gradient background": <GradientDarkBackground text={text} width={width} />,
        "blurred background": <BlurredBackground text={text} />
    }

    return type ? button[type] ? button[type] : button["unfilled"] : button["unfilled"];
}

export default Button;