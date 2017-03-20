import { StackNavigator } from 'react-navigation'

import LaunchScreen from '../Containers/LaunchScreen'
import SelectionScreen from '../Containers/Selection'

const PrimaryNav = StackNavigator({
  LaunchScreen: { screen: LaunchScreen },
  SelectionScreen: {
    screen: SelectionScreen,
    navigationOptions: { title: 'Textables' }
  }
}, {
  // headerMode: 'none',
  initialRouteName: 'SelectionScreen',
  navigationOptions: {
    header: {
      style: { backgroundColor: '#cdf5eb' }
    }
  }
})

export default PrimaryNav
