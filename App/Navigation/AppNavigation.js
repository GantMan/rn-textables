import { StackNavigator } from 'react-navigation'
import TextablesScreen from '../Containers/TextablesScreen'

import styles from './Styles/NavigationStyles'

// Manifest of possible screens
const PrimaryNav = StackNavigator({
  TextablesScreen: { screen: TextablesScreen }
}, {
  // Default config for all screens
  headerMode: 'none',
  initialRouteName: 'TextablesScreen',
  navigationOptions: {
    header: {
      style: styles.header
    }
  }
})

export default PrimaryNav
