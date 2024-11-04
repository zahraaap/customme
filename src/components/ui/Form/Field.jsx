import cn from "classnames";
import PropTypes from "prop-types";
import {Field as FormikField} from "formik";


const Field = ({name, as, error, className, children, ...rest}) => {

    return (

        <FormikField as={as}
                     id={name}
                     name={name}
                     className={cn("border border-gray-500 py-1.5 px-2 body-5 rounded-lg hover:border-gray-900",
                             "focus:border-black",

                     error ? "border-error" : "border-gray-500",
                     className
                         )}
                     {...rest}>
            {children}
        </FormikField>
    );
};

Field.propTypes = {
    name: PropTypes.string.isRequired,
    as: PropTypes.oneOf(["input", "textarea", "select"]),
    className: PropTypes.string,
    children: PropTypes.node
}
export default Field;
