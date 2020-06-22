import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile69359Navigator from '../features/UserProfile69359/navigator';
import Tutorial69358Navigator from '../features/Tutorial69358/navigator';
import NotificationList69330Navigator from '../features/NotificationList69330/navigator';
import Settings69329Navigator from '../features/Settings69329/navigator';
import Settings69321Navigator from '../features/Settings69321/navigator';
import UserProfile69319Navigator from '../features/UserProfile69319/navigator';
import MessengerNavigator from '../features/Messenger/navigator';
import TutorialNavigator from '../features/Tutorial/navigator';
import MapsNavigator from '../features/Maps/navigator';
import CalendarNavigator from '../features/Calendar/navigator';
import CameraNavigator from '../features/Camera/navigator';
import EmailAuthNavigator from '../features/EmailAuth/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
    SplashScreen: {
      screen: SplashScreen
    },
    //@BlueprintNavigationInsertion
UserProfile69359: { screen: UserProfile69359Navigator },
Tutorial69358: { screen: Tutorial69358Navigator },
NotificationList69330: { screen: NotificationList69330Navigator },
Settings69329: { screen: Settings69329Navigator },
Settings69321: { screen: Settings69321Navigator },
UserProfile69319: { screen: UserProfile69319Navigator },
Messenger: { screen: MessengerNavigator },
Tutorial: { screen: TutorialNavigator },
Maps: { screen: MapsNavigator },
Calendar: { screen: CalendarNavigator },
Camera: { screen: CameraNavigator },
EmailAuth: { screen: EmailAuthNavigator },

    /** new navigators can be added here */
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu,
    initialRouteName: 'SplashScreen',
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
