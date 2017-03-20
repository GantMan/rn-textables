import { StackNavigator } from 'react-navigation'

import LaunchScreen from '../Containers/LaunchScreen'
import SelectionScreen from '../Containers/Selection'

const PrimaryNav = StackNavigator({
  LaunchScreen: { screen: LaunchScreen },
  SelectionScreen: { screen: SelectionScreen }
}, {
  // headerMode: 'none'
})

export default PrimaryNav
