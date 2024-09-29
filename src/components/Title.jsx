import PropTypes from "prop-types";
import Icon from "./ui/Icon";
import LinkButton from "./ui/LinkButton";

const Title = ({ icon, text, link }) => (
  <h2 className="flex items-center gap-x-2 heading-4 text-gray-950 mb-6">
    <Icon size="2xl" name={icon} />
    { text }
    <span className="h-px flex-1 bg-gray-400 rounded-md mr-8 ml-2 mt-2" />
    {
      link && (
        <LinkButton href={link.to} size="md" variant="text" text={link.text} />
      )
    }
  </h2>
);

Title.propTypes = {
  icon: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  link: PropTypes.objectOf({
    text: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired
  })
}

export default Title;