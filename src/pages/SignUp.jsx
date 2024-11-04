import Container from "../components/ui/Container"
import {Form} from "formik";
import submitButton from "../components/ui/Form/SubmitButton.jsx";


const SignUpPage = () => {
    return(
        <Container tag="section">
            <h3 className="heading-6 text-ac-tint-700 mb-6">فرم ثبت اطلاعات</h3>
            <div className="flex items-center gap-y-14">
                <Form initialValues={initialValues} validationSchema={signUpSchema}

                    onSubmit={submitButton}
                    submitButtonText="مرحله بعدی"
                    className="flex border border-gray-300 rounded-lg py-6" >

                </Form>
            </div>
        </Container>
    )
};

export default SignUpPage;