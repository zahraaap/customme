import {Formik, Form as FormikForm} from "formik";
import PropTypes from "prop-types";
import SubmitButton from "./SubmitButton";

const Form = ({initialValues, onSubmit, validationSchema , className, submitButtonText, children}) => {
    return (
        <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
            <FormikForm className={className}>
                {children}
                <SubmitButton text={submitButtonText}/>
            </FormikForm>
        </Formik>
    )
};

Form.propTypes = {
    initialValues: PropTypes.object.isRequired,
    onSubmit: PropTypes.func.isRequired,
    validationSchema: PropTypes.object,
    className: PropTypes.string,
    submitButtonText: PropTypes.string,
    children: PropTypes.node
}

export default Form;