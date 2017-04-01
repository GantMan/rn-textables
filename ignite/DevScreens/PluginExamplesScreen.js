// Fair Warning:  PluginExamples has a good bit of Ignite automation in editing.
// Though robust, if you should modify this file, review your changes with us
// As to not break the automated addition/subtractions.
import React from 'react'
import { View, ScrollView, Text, TouchableOpacity, Image } from 'react-native'
import { StackNavigator } from 'react-navigation'
import { Images } from './DevTheme'

// Examples Render Engine
import ExamplesRegistry from '../../App/Services/ExamplesRegistry'
import SectionExample from '../Examples/Containers/ignite-ir-next/examples/SectionExample.js'
import GridExample from '../Examples/Containers/ignite-ir-next/examples/GridExample.js'
import RowExample from '../Examples/Containers/ignite-ir-next/examples/RowExample.js'
import RoundedButton from '../../App/Components/RoundedButton'
import '../Examples/Components/animatableExample.js'
import '../Examples/Components/i18nExample.js'
import '../Examples/Components/vectorExample.js'

// Styles
import styles from './Styles/PluginExamplesScreenStyles'

class PluginExamplesScreen extends React.Component {
  render () {
    return (
      <View style={styles.mainContainer}>
        <Image source={Images.background} style={styles.backgroundImage} resizeMode='stretch' />
        <TouchableOpacity onPress={() => this.props.navigation.goBack(null)} style={{
          position: 'absolute',
          paddingTop: 30,
          paddingHorizontal: 5,
          zIndex: 10
        }}>
          <Image source={Images.backButton} />
        </TouchableOpacity>
        <ScrollView style={styles.container}>
          <View style={{alignItems: 'center', paddingTop: 60}}>
            <Image source={Images.usageExamples} style={styles.logo} />
            <Text style={styles.titleText}>Plugin Examples</Text>
          </View>
          <View style={styles.section}>
            <Text style={styles.sectionText} >
              The Plugin Examples screen is a playground for 3rd party libs and logic proofs.
              Items on this screen can be composed of multiple components working in concert.  Functionality demos of libs and practices
            </Text>
          </View>

          {ExamplesRegistry.renderPluginExamples()}

          <View style={styles.screenButtons} />

          <RoundedButton onPress={() => this.props.navigation.navigate('SectionExample')}>
            Sections Example
          </RoundedButton>

          <RoundedButton onPress={() => this.props.navigation.navigate('GridExample')}>
            Grid Example
          </RoundedButton>

          <RoundedButton onPress={() => this.props.navigation.navigate('RowExample')}>
            Row Example
          </RoundedButton>

        </ScrollView>
      </View>
    )
  }
}

export default StackNavigator({
  RowExample: {screen: RowExample, navigationOptions: {header: {visible: true}}},
  GridExample: {screen: GridExample, navigationOptions: {header: {visible: true}}},
  SectionExample: {screen: SectionExample, navigationOptions: {header: {visible: true}}},
  PluginExamplesScreen: {screen: PluginExamplesScreen}
}, {
  headerMode: 'screen',
  initialRouteName: 'PluginExamplesScreen',
  navigationOptions: {
    header: {
      visible: false,
      style: {
        backgroundColor: '#3e243f'
      }
    }
  }
})
