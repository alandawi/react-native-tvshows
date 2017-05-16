import React, { Component } from 'react';
import { View } from 'react-native';
import { List, ListItem, Button, CheckBox } from 'react-native-elements';
import Styles from './style';

class Settings extends Component {
    constructor(props) {
        super(props);

        // TODO: Need to grab the data from the store
        this.state = {
        	checked: true
        };

        // Toggle the state every second
        /*setInterval(() => {
            this.setState({ showText: !this.state.showText });
        }, 1000);*/
    }

    render() {
        return (
			<View style={Styles.container}>
				<List>
					<ListItem
						title="Notifications"
					/>
					<ListItem
						title="Profile"
					/>
					<ListItem
						title="Password"
					/>

					<CheckBox
						right
						title='Click Here'
						checked={this.state.checked}
					/>
				</List>

				<View style={Styles.buttonStyle}>
					<Button
						raised
						icon={{name: 'done'}}
						title='Save settings'
					/>
				</View>
			</View>
        );
    }
}
export default Settings;