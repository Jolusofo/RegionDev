import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';


import Main from './pages/Main';
import Profile from './pages/Profile';



const Routes = createAppContainer(
    createStackNavigator({
        Main: {
            screen: Main,
            navigationOptions:{
                title: 'Region Dev'
            }
        },
        Profile: {
            screen: Profile,
            navigationOptions:{
                title: 'Perfil do Github'
            }
        }
    }, {
        defaultNavigationOptions: {
            headerTintColor: '#FFF',
            headerBackTitleVisible: false,
            headerStyle: {
                backgroundColor: '#00BFFF'
            },
        },
    })
);

export default Routes;