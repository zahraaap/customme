import PropTypes from "prop-types";


const Category = ({ image, title }) => {
    return (

        <div className="p-2 border border-gray-400 rounded-2xl">
            <img src={`/images/home/categories/${image}.png`} alt={title}
                className="w-full h-auto mb-2" />
            <h4 className="text-gray-950 caption-1">{title}</h4>

        </div>
    );
};
export default Category;

Category.propTypes = {
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
}