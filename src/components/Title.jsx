import PropTypes from "prop-types";
import Icon from "./ui/Icon";
const Title = ({icon , text}) => {
    return (
        <h2 className="flex items-center gap-x-2 heading-4 text-gray-950">
            <Icon name= {icon} size="2xl" />
            {text}
            <span className="h-px flex-1 bg-gray-400 rounded-md mr-6 mt-2 ml-2"></span>
        </h2>
    )
};
export default Title;

Title.propTypes = {
    icon:PropTypes.string.isRequired ,
    text: PropTypes.string.isRequired

}