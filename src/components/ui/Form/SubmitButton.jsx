import {useFormikContext} from "formik";
import LinkButton from "../LinkButton";
import PropTypes from "prop-types";


const SubmitButton = ({text}) => {

    const {isSubmitting} = useFormikContext();

    return (
        <LinkButton variant="fill"
                    color="primary"
                    size="md"
                    disabled={isSubmitting}
                    text={isSubmitting ? "در حال فرستادن اطلاعات" : text || "ثبت"}
                    type="submit">


        </LinkButton>
    )
};

SubmitButton.propTypes = {
    text: PropTypes.string
}


export default SubmitButton;