import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {
	StyleSheet,
	Text,
	View,
	Button,
	TextInput,
	ScrollView,
	FlatList,
} from 'react-native';

export default function App() {
	const [name, setName] = useState('');
	const [age, setAge] = useState('');
	const [address, setAddress] = useState('');
	const [profile, setProfile] = useState({
		userName: '',
		age: 29,
	});

	const [people, setPeople] = useState([
		{ name: ' Shawn', age: '40' },
		{ name: ' Idris', age: '29' },
		{ name: ' Damilola', age: '30' },
		{ name: ' Vincent', age: '24' },
	]);

	const handleUpdateName = () => {
		setName('GreatEki');
		// setProfile({ userName: 'Great Man', age: 30 });
	};
	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<Text> Name: {name} </Text>
				<Text> Age: {age} </Text>

				{/* <Text style={styles.boldText}> Enter Name: {name} </Text> */}
				<Text> Name: </Text>
				<TextInput
					style={styles.input}
					placeholder='Enter Name Here'
					onChangeText={(value) => setName(value)}
				/>

				<Text> Age: </Text>
				<TextInput
					style={styles.input}
					placeholder='Enter Age'
					keyboardType='numeric'
					onChangeText={(value) => setAge(value)}
				/>

				<Text> Address: </Text>
				<TextInput
					multiline
					style={styles.input}
					placeholder='Enter Address'
					onChangeText={(value) => setAddress(value)}
				/>
			</View>

			<FlatList
				keyExtractor={(item) => item.id}
				numColumns={3}
				data={people}
				renderItem={({ item }) => (
					<Text style={styles.item}> {item.name} </Text>
				)}
			/>

			{/* <ScrollView>
				{people.map((person) => (
					<View key={person.key}>
						<Text style={styles.item}> {person.name} </Text>
					</View>
				))}
			</ScrollView> */}

			<View style={styles.buttonContainer}>
				<Button title='Update Name' onPress={handleUpdateName} />
			</View>

			<StatusBar style='auto' />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		paddingTop: 40,
		paddingHorizontal: 20,
		// alignItems: 'center',
		// justifyContent: 'center',
	},
	header: {
		backgroundColor: 'pink',
		padding: 20,
	},
	boldText: {
		fontWeight: 'bold',
		marginTop: 10,
		marginBottom: 10,
	},

	body: {
		backgroundColor: 'yellow',
		padding: 20,
	},

	buttonContainer: {
		marginTop: 20,
	},
	input: {
		borderWidth: 1,
		padding: 5,
		margin: 5,
		borderColor: 'lightgrey',
	},

	item: {
		marginTop: 24,
		padding: 30,
		backgroundColor: 'yellow',
		fontSize: 24,
		marginHorizontal: 10,
		marginTop: 5,
	},
});
