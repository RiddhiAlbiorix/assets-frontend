import { Button, Card } from "antd";
import { UserOutlined, KeyOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from "react-redux";
import { Formik, Form } from 'formik';
import { loginUserStart } from "../../redux/actions/auth/login";
import TextInput from "../UI/TextInput";
import { yupValidations } from "../../Helper/ValidationSchema";

const Login = () => {

	const initialValues = { email : '', password : ''}
	const dispatch = useDispatch()
	const state = useSelector(state => state)

	const onFinish = (values: object) => {
		dispatch(loginUserStart(values))
	};

	const resetPassword = () => {
		console.log('RESET ')
	}
	
	return (
		<div className="form site-card-border-less-wrapper">
			<Card style={{ width: '45%' }}>
				<h3 className="text-center">Sign In</h3>
				<Formik initialValues={initialValues} validationSchema={yupValidations} onSubmit={(values) => onFinish(values)}>
					<Form >
						<TextInput label="EMAIL" name="email" type="email" id="email" prefix={<UserOutlined />}/>						
						<TextInput label="PASSWORD" name="password" type="password" id="password" prefix={<KeyOutlined />} isPassword={true} resetPassword={resetPassword}/>
						<div className="d-flex mt-4 flex-row-reverse">
							<Button type="primary" htmlType="submit">Login</Button>
						</div>
					</Form>
				</Formik>
			</Card>
		</div>
	)
}

export default Login