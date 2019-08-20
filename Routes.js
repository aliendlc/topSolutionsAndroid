import React, { Component } from "react";
import { createStackNavigator, createAppContainer, createBottomTabNavigator, createSwitchNavigator,  } from 'react-navigation';
import Approve from "./src/screens/Approve";
import ClosedWorkOrders from "./src/screens/ClosedWorkOrders";
import Login from "./src/screens/Login";
import OpenWorkOrders from "./src/screens/OpenWorkOrders";
import Welcome from "./src/screens/Welcome";
import WorkOrder from "./src/screens/WorkOrder";

import Icon from 'react-native-vector-icons/FontAwesome';
// import Icon from 'react-native-vector-icons/FontAwesome5';



const HomeStack = createStackNavigator({
    Home: {
        screen: createBottomTabNavigator({

            Welcome: {
                screen: Welcome,
            },
            Login: {
              screen: Login
            }
        })
    }
})

const WorkerStack = createStackNavigator({
      screen: createBottomTabNavigator({

          Create: {

              screen: WorkOrder,
          },
          Open: {
              screen: OpenWorkOrders
          },
          Closed: {
              screen: ClosedWorkOrders
          }
      })

});

const AdminStack = createStackNavigator({
      screen: createBottomTabNavigator({

        Create: {
            screen: WorkOrder,
            navigationOptions: () => ({
                tabBarIcon: ({tintColor}) => (
                    <Icon
                        name="plus-square"
                        size={24}
                    />
                )
            })
        },
        Open: {
            screen: OpenWorkOrders,
            navigationOptions: () => ({
                tabBarIcon: ({tintColor}) => (
                    <Icon
                        name="wrench"
                        size={24}
                    />
                )
            })
        },
        Closed: {
            screen: ClosedWorkOrders,
            navigationOptions: () => ({
                tabBarIcon: ({tintColor}) => (
                    <Icon
                        name="close"
                        size={24}
                    />
                )
            })
        },
        Approve: {
            screen: Approve,
            navigationOptions: () => ({
                tabBarIcon: ({tintColor}) => (
                    <Icon
                        name="check"
                        size={24}
                    />
                )
            })
            
          },

      })
});



const Elephant = createAppContainer(createSwitchNavigator(
    {
        HomeStack: HomeStack,
        WorkerStack: WorkerStack,
        AdminStack: AdminStack
    },
    {
        initialRouteName: 'AdminStack'
    }
));

console.log('ROUTES CONSOLE LOG');
export default createAppContainer(Elephant);