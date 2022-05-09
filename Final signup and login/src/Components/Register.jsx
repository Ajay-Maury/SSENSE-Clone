import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import './Register.css';
import GoogleButton from 'react-google-button';
import { useState } from 'react';
import { InputGroup } from 'react-bootstrap';
// import { Center } from 'react-bootstrap';
import { FormControl } from 'react-bootstrap';


export const Register = () => {
	const [user, setUser] = useState({
		name: '',
		email: '',
		mobile: '',
		password: '',
	
	});

	const handleChange = (e) => {
		let { name, value } = e.target;
		setUser({ ...user, [name]: value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		console.log(user,"user")
		try {
			let res = await fetch(
				'https://ssense-api.herokuapp.com/register',
				{
					method: 'POST',
					body: JSON.stringify(user),
					headers: {
						'Content-Type': 'application/json',
					},
				},
			);

			let data = await res.json();
			console.log('data:', data);
			alert('Sign Up Successful!');
		} catch (err) {
			return console.log({ err:err});
		}
	};

	return (
		<div>
		
				
			<Container className="container1">
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

					<div className="round">
						<div>
					<input type="checkbox"  id="checkbox" />
					<label for="checkbox">Men</label>
					</div>
					<div>
					<input type="checkbox"  id="checkbox" />
					<label for="checkbox">Women</label>
					</div>
					<div>
					<input type="checkbox"  id="checkbox" />
					<label for="checkbox">No Thanks</label>
					</div>
					</div>
		

					<Button
						variant="secondary"
						size="md"
						type="submit"
						className="bg"
					>
						CREATE AN ACCOUNT
					</Button>
				</Form>
			</Container>
		</div>
	);
};
