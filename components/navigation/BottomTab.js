import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../home/Home';
import { List } from '../list/List';
import Settings from '../settings/Settings';


const Tab = createBottomTabNavigator();

export const Navigation = () => {
    return (
        <Tab.Navigator
            backBehavior='history'
        >
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="List" component={List} />
            <Tab.Screen name="Settings" component={Settings} />
        </Tab.Navigator>
    );
}
