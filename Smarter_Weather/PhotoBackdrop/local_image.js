import React, {Component} from "react";

import {Image, StyleSheet} from "react-native";

class PhotoBackdrop extends Component{
    render(){
        return (
            <Image style = {styles.backdrop} source={require("./flower.png")} resizeMode="cover">
                {this.props.children}
            </Image>
        )
    }
}

const styles= StyleSheet.create ({
    backdrop: {
        flex : 1,
        flexDirection : column,
        width : undefined,
        height : undefined
    }
})

export default PhotoBackdrop;