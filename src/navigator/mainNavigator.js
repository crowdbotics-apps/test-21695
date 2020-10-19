import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Maps148853Navigator from '../features/Maps148853/navigator';
import Add-Item148852Navigator from '../features/Add-Item148852/navigator';
import Maps148848Navigator from '../features/Maps148848/navigator';
import UserProfile148844Navigator from '../features/UserProfile148844/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
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
