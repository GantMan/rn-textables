import React from 'react'
import { View, Text, ListView, TouchableOpacity, Clipboard, TextInput } from 'react-native'
import { connect } from 'react-redux'

// For empty lists
// import AlertMessage from '../Components/AlertMessage'

// Styles
import styles from './Styles/SelectionStyle'

const Textables = require('../Fixtures/textables.json')

class Selection extends React.Component {

  state: {
    dataSource: Object
  }

  constructor (props) {
    super(props)
    // If you need scroll to bottom, consider http://bit.ly/2bMQ2BZ

    /* ***********************************************************
    * STEP 1
    * This is an array of objects with the properties you desire
    * Usually this should come from Redux mapStateToProps
    *************************************************************/
    // const dataObjects = [
    //   {title: 'First Title', description: 'First Description'},
    //   {title: 'Second Title', description: 'Second Description'},
    //   {title: 'Third Title', description: 'Third Description'},
    //   {title: 'Fourth Title', description: 'Fourth Description'},
    //   {title: 'Fifth Title', description: 'Fifth Description'},
    //   {title: 'Sixth Title', description: 'Sixth Description'},
    //   {title: 'Seventh Title', description: 'Seventh Description'}
    // ]

    const dataObjects = Textables[0].items

    /* ***********************************************************
    * STEP 2
    * Teach datasource how to detect if rows are different
    * Make this function fast!  Perhaps something like:
    *   (r1, r2) => r1.id !== r2.id}
    *************************************************************/
    const rowHasChanged = (r1, r2) => r1 !== r2

    // DataSource configured
    const ds = new ListView.DataSource({rowHasChanged})

    // Datasource is always in state
    this.state = {
      dataSource: ds.cloneWithRows(dataObjects)
    }
  }

  copyClipboard = (text) => {
    Clipboard.setString(text)
  }

  /* ***********************************************************
  * STEP 3
  * `_renderRow` function -How each cell/row should be rendered
  * It's our best practice to place a single component here:
  *
  * e.g.
    return <MyCustomCell title={rowData.title} description={rowData.description} />
  *************************************************************/
  _renderRow (rowData) {
    return (
      <TouchableOpacity style={styles.row} onPress={() => Clipboard.setString(rowData.art)}>
        <Text style={styles.boldLabel}>{rowData.name}</Text>
        <Text style={styles.label}>{rowData.art}</Text>
      </TouchableOpacity>
    )
  }

  /* ***********************************************************
  * STEP 4
  * If your datasource is driven by Redux, you'll need to
  * reset it when new data arrives.
  * DO NOT! place `cloneWithRows` inside of render, since render
  * is called very often, and should remain fast!  Just replace
  * state's datasource on newProps.
  *
  * e.g.
    componentWillReceiveProps (newProps) {
      if (newProps.someData) {
        this.setState({
          dataSource: this.state.dataSource.cloneWithRows(newProps.someData)
        })
      }
    }
  *************************************************************/

  // Used for friendly AlertMessage
  // returns true if the dataSource is empty
  _noRowData () {
    return this.state.dataSource.getRowCount() === 0
  }

  // Render a footer.
  _renderFooter = () => {
  }

  render () {
    return (
      <View style={styles.container}>
        <ListView
          contentContainerStyle={styles.listContent}
          dataSource={this.state.dataSource}
          renderRow={this._renderRow}
          renderFooter={this._renderFooter}
          enableEmptySections
          pageSize={15}
        />
        <TextInput style={{backgroundColor: 'orange', width: 300, height: 30, margin: 20}} />
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    // ...redux state to props here
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Selection)