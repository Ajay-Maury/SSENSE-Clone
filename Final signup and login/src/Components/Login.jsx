import { useState } from 'react';
import { Container } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Row } from 'react-bootstrap';

import { useNavigate } from 'react-router-dom';

export const Login = () => {
	const navigate = useNavigate();

	const handlenavigate = () => {
		navigate('/Register');
	};

	const [log, setlog] = useState({
		email: '',
		password: '',
	});

	const handleChange = (e) => {
		let { name, value } = e.target;
		setlog({ ...log, [name]: value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			let res = await fetch(
				'https://ssense-api.herokuapp.com/login',
				{
					method: 'POST',
					body: JSON.stringify(log),
					headers: {
						'Content-Type': 'application/json',
					},
				},
			);
			let data = await res.json();
			console.log('data:', data);
		} catch (error) {
			console.log('error:', error);
		}
	};
	return (
		<div>
			<Row md={4}>
				<Container className="container1">
					<h5>Create Account and Login</h5>
					<hr />
					<p>If you have an account, sign in with your email address.</p>
					<Form onSubmit={handleSubmit}>
						<Form.Group className="mb-3" controlId="formBasicEmail">
							<Form.Label>Email address</Form.Label>
							<Form.Control
								type="email"
								name="email"
								onChange={handleChange}
							/>
						</Form.Group>

						<Form.Group className="mb-3" controlId="formBasicPassword">
							<Form.Label>Password</Form.Label>
							<Form.Control
								type="password"
								name="password"
								onChange={handleChange}
							/>
						</Form.Group>
						<Button
							variant="secondary"
							size="md"
							type="submit"
							className="bg"
						>
						Log In
						</Button>
						<p>Forgot Your Password?</p>
					</Form>
				</Container>
				
			</Row>
		</div>
	);
};
