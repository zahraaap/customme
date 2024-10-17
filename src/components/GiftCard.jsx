import PropTypes from "prop-types";
import cn from "classnames";
import LinkButton from "./ui/LinkButton";

const GiftCard = ({ image, title, link }) => (
  <div className="w-full lg:w-1/2 bg-ac-tint-300 flex rounded-2xl">
    <div className="flex flex-col gap-y-6 py-2 px-4 lg:p-6">
      <h4 className="body-5 lg:heading-4 text-gray-950">{ title }</h4>
      <LinkButton variant="outline"
                  size="sm"
                  text="دیدن محصولات"
                  className="self-start"
                  href={link} />
    </div>
    <img src={`/images/home/${image}`}
         alt={title}
         className={cn(
           "w-2/5 lg:w-1/2 h-full object-cover object-center rounded-l-2xl"
         )}
    />
  </div>
);

GiftCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
}

export default GiftCard;