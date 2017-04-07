import React from 'react'
import { View, TouchableOpacity, Text } from 'react-native'
import styles from './Styles/FacesCellStyle'
import Icon from 'react-native-vector-icons/FontAwesome'

export default class FacesCell extends React.Component {

  render () {
    const starColor = this.props.favorited ? 'yellow': 'white'
    return (
      <TouchableOpacity style={styles.row}>

        <TouchableOpacity onPress={this.props.onFavorite} style={{
          position: 'absolute',
          top: 0,
          right: 0,
          backgroundColor: 'transparent',
          borderStyle: 'solid',
          borderRightWidth: 45,
          borderTopWidth: 45,
          borderRightColor: 'transparent',
          borderTopColor: '#ddcab2',
          transform: [
            {rotate: '90deg'}
          ]
        }} >
          <View style={{
            position: 'absolute',
            bottom: 21,
            left: 3
          }}>
            <Icon name='star' size={20} color={starColor} style={{
              top: 0,
              left: 0
            }} />
          </View>
        </TouchableOpacity>

        <Text style={styles.boldLabel}>{this.props.name}</Text>
        <Text style={styles.label}>{this.props.art}</Text>
      </TouchableOpacity>
    )
  }
}

// // Prop type warnings
FacesCell.propTypes = {
  name: React.PropTypes.string.isRequired,
  art: React.PropTypes.string.isRequired,
  favorited: React.PropTypes.bool,
  onFavorite: React.PropTypes.func.isRequired
}
//
// // Defaults for props
// FacesCell.defaultProps = {
//   someSetting: false
// }
