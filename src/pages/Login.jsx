import Container from "../components/ui/Container";
import InlineSVG from "react-inlinesvg";
import Form from "../components/ui/Form/Form.jsx";
import {loginSchema} from "../schemas/login";
import Group from "../components/ui/Form/Group.jsx";
import {Link} from "react-router-dom";
import LinkButton from "../components/ui/LinkButton.jsx";

const initialValues = {
    username: "",
    password: ""
}
const LoginPage = () => {

    const submitHandler = (values, formikHelpers) => {
        formikHelpers.setSubmitting(true);

        //fake api
        setTimeout(() => {
            formikHelpers.setSubmitting(false);
        }, 3000);
    }

    return (

        <Container tag="section" wrapperClassName="flex items-center justify-evenly gap-x-8">
            <div className="w-full max-w-[20%]">
                <h2 className="lg:heading-6 text-gray-900 text-center mb-12">ورود | ثبت نام</h2>
                <Form initialValues={initialValues}
                      validatoinSchema={loginSchema}
                      onSubmit={submitHandler}
                      submitButtonText="ورود به سایت"
                className="flex flex-col gap-y-6 mb-6">
                    <Group name="username" type="text" label="نام کاربری"/>
                    <Group name="password" type="text" label="کلمه عبور">
                    <Link to="/forget-password" className="caption-4 text[#3C8F] no-underline text-left">
                        فراموشی رمز عبور
                    </Link>
                        </Group>
                    <p className="caption-3 text- gray-950 text-center ">ورود و عضویت شما به منزله پذیرفتن قوانین و مقررات می‌باشد.</p>
                </Form>
                <LinkButton variant="outline"
                            color="4gray"
                            text="ورود با حساب گوگل"
                            rightIcon="/logos/social/google.svg"
                            className="w-full mb-6"
                            size="md"
                />
                <LinkButton variant="outline"
                            color="gray"
                            text="ثبت نام در سایت"
                            className="w-full "
                            size="md"
                />

            </div>
            <InlineSVG src="/images/login.svg" className="w-2/5 h-auto"/>
        </Container>
    );
};
export default LoginPage;