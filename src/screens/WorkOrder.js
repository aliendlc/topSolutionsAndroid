

import React from 'react';
import { View, Text, ActivityIndicator, StyleSheet, Picker, Button, TextInput } from 'react-native'
import { ICONS } from 'jest-util/build/specialChars';
import Icon from 'react-native-vector-icons/FontAwesome'

class WorkOrder extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            property: '',
            area: '',
            rooms: '',
            createdBy: 'Jason',
            dateCreated: '08/10/19',
            priority: '',
            notes: '',
        };
    }
    render() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Create Work Order</Text>
            <View style={styles.row}>
                <Text>Created By</Text>
                <Text>{this.state.createdBy}</Text>
            </View>    
            <View style={styles.row}>
                <Text>Date Created</Text>
                <Text>{this.state.dateCreated}</Text>
            </View>    
            <View style={styles.row}>
                <Text>Property</Text>
                <Picker            
                     style={{height: 50, width: 100}}
                    onValueChange={(itemValue, itemIndex) =>
                        this.setState({property: itemValue})
                    }
                    selectedValue={this.state.property}
                >
                    <Picker.Item label="Place 1" value="Place 1" />
                    <Picker.Item label="Place 2" value="Place 2" />                        
                    <Picker.Item label="Place 3" value="Place 3" />
                    <Picker.Item label="Place 4" value="Place 4" />
                    <Picker.Item label="Place 5" value="Place 5" />
                </Picker>
            </View>        
            <View style={styles.row}>
                <Text>Living Area</Text>
                <Picker
                    style={{height: 50, width: 100}}
                    onValueChange={(itemValue, itemIndex) =>
                        this.setState({area: itemValue})
                    }
                    selectedValue={this.state.area}
                >
                    <Picker.Item label="Kitchen" value="Kitchen" />
                    <Picker.Item label="Closet" value="Closet" />
                    <Picker.Item label="Bedroom" value="Bedroom" />
                </Picker>
            </View>
            <View style={styles.row}>
                <Text>Rooms</Text>
                <Picker
                    style={{height: 50, width: 100}}
                    onValueChange={(itemValue, itemIndex) =>
                        this.setState({rooms: itemValue})
                    }
                    selectedValue={this.state.rooms}    
                >
                    <Picker.Item label="A" value="A" />
                    <Picker.Item label="B" value="B" />
                    <Picker.Item label="C" value="C" />
                    <Picker.Item label="D" value="D" />
                </Picker>
            </View>
            <View style={styles.row}>
                <Text>Priority</Text>
                <Picker
                    style={{height: 50, width: 100}}
                    onValueChange={(itemValue, itemIndex) =>
                        this.setState({priority: itemValue})
                    }
                    selectedValue={this.state.priority}    
                >
                    <Picker.Item label="1" value="1" />
                    <Picker.Item label="2" value="2" />
                    <Picker.Item label="3" value="3" />
                </Picker>
            </View>
            <View style={{padding: 10}}>
                <TextInput
                style={{height: 40}}
                placeholder="Enter Notes Here"
                onChangeText={(text) => this.setState({notes: text})}
                value={this.state.text}
                />
            </View>
            <Button
                title= 'Submit'
                color= '#93B4CD'
            />
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    textAlign: 'center',
  }, 
  row: {
    alignSelf: "stretch",
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  }, 
  title: {
    fontSize: 30,
  }
})

export default WorkOrder;
