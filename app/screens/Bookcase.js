import React, { Component } from 'react';
import {
    StatusBar,
    StyleSheet,
    FlatList,
    Text,
    View
} from 'react-native';

import BookcaseItem from './BookLists';

export default class Boookcase extends Component {

    state = {
        books:[{
            id:1,
            title:'harry potter and the goblet of fire',
            author:'J K Rowling',
            thumbnail:'https://covers.openlibrary.org/w/id/7984916-M.jpg'
        },
        {
            id:2,
            title:'The Hobbit',
            author:'AR rahman',
            thumbnail:'https://covers.openlibrary.org/w/id/6979861-M.jpg'
        },
        {
            id:3,
            title: 'the war',
            author:"Geore orwell",
            thumbnail:"https://covers.openlibrary.org/w/id/7222246-M.jpg"
        }
    ]
}

_renderItem = ({item}) =>(
    <BookcaseItem
     id={item.id}
     title={item.title}
     author={item.author}
     thumbnail = {item.thumbnail}
     navigation = {this.props.navigation}
    />
    
);

_keyExtractor = (item, index) => item.id.toString()

render(){
    
    return(
        <View style={styles.container}>
            <StatusBar
            barStyle="light-content"
            />
            <FlatList
             data={this.state.books}
             keyExtractor={this._keyExtractor}
             renderItem={this._renderItem}
            />

        </View>
    )
    
}
   
};


const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#F5FCFF'
    }
})





















