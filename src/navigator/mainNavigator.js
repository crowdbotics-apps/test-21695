import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Maps148902Navigator from '../features/Maps148902/navigator';
import Add-Item148901Navigator from '../features/Add-Item148901/navigator';
import Maps148897Navigator from '../features/Maps148897/navigator';
import UserProfile148893Navigator from '../features/UserProfile148893/navigator';
import Maps148853Navigator from '../features/Maps148853/navigator';
import Add-Item148852Navigator from '../features/Add-Item148852/navigator';
import Maps148848Navigator from '../features/Maps148848/navigator';
import UserProfile148844Navigator from '../features/UserProfile148844/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Maps148902: { screen: Maps148902Navigator },
Add-Item148901: { screen: Add-Item148901Navigator },
Maps148897: { screen: Maps148897Navigator },
UserProfile148893: { screen: UserProfile148893Navigator },
Maps148853: { screen: Maps148853Navigator },
Add-Item148852: { screen: Add-Item148852Navigator },
Maps148848: { screen: Maps148848Navigator },
UserProfile148844: { screen: UserProfile148844Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
