import {useField} from "formik";
import Field from "./Field";
import cn from "classnames";
import PropTypes from "prop-types";

const Group = ({children, type, label, name}) => {

    const mata = useField(name)[1];
    const isError = mata.error && mata.touched;

    return (
        <div className="flex flex-col gap-y-1">
            <label htmlFor={name} className={cn( "body-4",  isError ? "text-error" :  "text-gray-500")}>
                {label}
            </label>
            <Field name={name} as="input" type={type} error={isError} />
            {isError && <span className="caption-red text-error"> {meta.error}</span>}
            {children}
        </div>
    )
};
Group.propTypes = {
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    children: PropTypes.node
}
export default Group;