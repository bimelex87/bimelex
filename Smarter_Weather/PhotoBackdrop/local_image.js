import React, {Component} from "react";

import {ImageBackground, StyleSheet} from "react-native";

class PhotoBackdrop extends Component{
    render(){
        return (
            <ImageBackground style = {styles.backdrop} source={require("./flowers.png")} resizeMode="cover">
                {this.props.children}
            </ImageBackground>
        )
    }
}

const styles= StyleSheet.create ({
    backdrop: {
        flex : 1,
        flexDirection : 'column',
        width : undefined,
        height : undefined
    }
})

export default PhotoBackdrop;