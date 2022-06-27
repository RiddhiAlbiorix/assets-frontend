import { Button } from "antd";
import { MailFilled, MailTwoTone } from '@ant-design/icons';
import { Formik, Form } from 'formik';
import { Link } from "react-router-dom";
import { useHistory } from 'react-router-dom';
import Cookies from 'js-cookie'
import TextInput from "../../Components/UI/TextInput";
import { loginValidations } from "../../Helper/ValidationSchema";
import AuthLayout from "../../Components/AuthLayout";
import { useMutation } from "@apollo/client";
import { LOGIN_USER_MUTATION } from "../../gql/Mutation/Auth";
import openNotificationWithIcon from "../../Helper/Notification";
import { EyeInvisibleOutlined, EyeFilled } from '@ant-design/icons';

const Login = () => {

	const history = useHistory();
	const initialValues = { email: '', password: '' }
	const [loginUser, { data, error }] = useMutation(LOGIN_USER_MUTATION);

	const onFinish = (values) => {
		loginUser({
			variables: values,
		});
	};

	if(error){
		openNotificationWithIcon('loginUserError', 'error', 'INVALID CREDENTIALS')
	}

	if (data?.loginUser?.token) {
		Cookies.set('token', data?.loginUser?.token)
		Cookies.set('user', JSON.stringify(data?.loginUser?.user))
		openNotificationWithIcon('loginUser', 'success', "LOGIN SUCCESSFUL")
		history.push('/dashboard');
	}

	return (
		<AuthLayout headerText="Sign In">
			<Formik initialValues={initialValues} validationSchema={loginValidations} onSubmit={(values) => onFinish(values)}>
				<Form >
					<div id="authForm">
						<TextInput label="EMAIL" name="email" type="email" id="email" prefix={<MailFilled style={{ color: 'white' }} />} isAuth={true}/>
						<TextInput label="PASSWORD" name="password" type="password" id="password" prefix={<img src="icon-password-key.png" alt="password" />} 
						isPassword={true} forgotPassword={true}
						iconRender={(visible) => (visible ? <EyeFilled style={{color:"white", fontSize:"1rem"}}/> : <EyeInvisibleOutlined style={{color:"white" , fontSize:"1rem"}}/>)}
						/>
					</div>
					<Button type="primary" className="auth-button" htmlType="submit" style={{width:'90%'}}>Sign In</Button>
					<div className="auth-text">Don't have an account? <Link to="/" className="auth-text-inner">Sign Up</Link></div>
				</Form>
			</Formik>
		</AuthLayout>
	)
}

export default Login