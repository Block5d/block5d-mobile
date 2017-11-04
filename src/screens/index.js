import {Navigation, ScreenVisibilityListener} from 'react-native-navigation';

import Screen1 from './screen1';
import Screen2 from './screen2';
import Screen3 from './screen3';
import Viewer from './viewer';


import Drawer from './drawer';

export function registerScreens() {
    Navigation.registerComponent('bcapp.Screen1', () => Screen1);
    Navigation.registerComponent('bcapp.Screen2', () => Screen2);
    Navigation.registerComponent('bcapp.Screen3', () => Screen3)
    Navigation.registerComponent('bcapp.Viewer', () => Viewer)
    Navigation.registerComponent('bcapp.Drawer', () => Drawer);
}  