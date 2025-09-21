import { Containerbutton } from "./style.js";
import PropTypes from "prop-types";

export default function Button({ children , ...props}) {

    //console.log(props);
    return <Containerbutton {...props}>{children }</Containerbutton>;
}

Button.propTypes = {
    children: PropTypes.string,
};