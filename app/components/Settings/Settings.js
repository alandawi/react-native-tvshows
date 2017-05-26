import React, { Component } from 'react';
import { View } from 'react-native';
import { List, ListItem, Button, CheckBox } from 'react-native-elements';
import Styles from './style';

class Settings extends Component {
	handleFavorites() {
		console.log('handleFavorites');
	}

    render() {
        return (
			<View style={Styles.container}>
				<List>
					<CheckBox
						left
						checked={true}
						title='Enable favorites'
						onPress={ () => this.handleFavorites()}
					/>
					<CheckBox
						left
						title='Enable notifications'
						onPress={ () => this.handleFavorites()}
					/>
				</List>

				<View style={Styles.buttonStyle}>
					<Button
						raised
						icon={{name: 'save'}}
						title='Save settings'
					/>
				</View>
			</View>
        );
    }
}
export default Settings;