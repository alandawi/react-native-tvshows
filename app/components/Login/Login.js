import React, { Component } from 'react';
//import { View } from 'react-native';
import { Container, Content, Form, Button, Text, Item, Input,Label} from 'native-base';
import Styles from './style';

class Login extends Component {
	static propTypes = {
	};

	static defaultProps = {
	};

	render() {
		return (
			<Container style={Styles.container}>
				<Content>
					<Form>
						<Item stackedLabel>
							<Label>Username</Label>
							<Input />
						</Item>
						<Item stackedLabel last>
							<Label>Password</Label>
							<Input />
						</Item>
						<Button block><Text>Login</Text></Button>
					</Form>
				</Content>
			</Container>
		);
	}
}

export default Login;
