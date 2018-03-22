import React, {Component} from "react";

import {View, Text, TextInput, FlatList, StyleSheet} from "react-native";

class SimpleList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data : [
                {key : "A"},
                {key : "B"},
                {key : "C"},
                {key : "D"},
                {key : "A longer example"},
                {key : "E"},
                {key : "F"},
                {key : "G"},
                {key : "H"}
            ]
        };
    }

    _renderItem = data => {
        return <Text style={styles.row}>{data.item.key}</Text>;
    };


    render() {
        return (
            <View style={styles.container}>
                <FlatList data = {this.state.data} renderItem = {this._renderItem} />
            </View>
        )
    }
}

const styles = StyleSheet.create ( {
    container : {
        flex : 1,
        justifyContent : "center",
        alignItems : "center",
        backgroundColor : "#F5FCFF"
    },
    row : { fontSize : 24, padding : 42, borderWidth : 1, borderColor : "#DDDDDD"}
})

export default SimpleList;