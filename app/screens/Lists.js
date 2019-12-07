import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

export default class componentName extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}> Lists </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#F5FCFF'
    },
    title:{
        fontSize:20,
        textAlign:'center',
        margin:10
    }
})