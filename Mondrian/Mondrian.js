import React, {Component} from "react";
import {StyleSheet, Text, View} from "react-native";

import styles from "./style";

class Mondrian extends Component {
    render() {
        return (
            <View style={styles.parent}>
                <View style={styles.topBlock}>
                    <View style={styles.leftCol}>
                        <View style={[styles.cellOne, styles.base]}><Text>cell-one</Text></View>
                        <View style={[styles.base, styles.cellTwo]} ><Text>cell-two</Text></View>
                    </View>
                    <View style={[styles.cellThree, styles.base]}><Text>cell-three</Text></View>
                </View>
                <View style={styles.bottomBlock}>
                    <View style={[styles.cellFour, styles.base]} ><Text>cell-four</Text></View>
                    <View style={[styles.cellFive, styles.base]} ><Text>cell-five</Text></View>
                    <View style={styles.bottomRight}>
                        <View style={[styles.cellSix, styles.base]}><Text>cell-six</Text></View>
                        <View style={[styles.cellSeven, styles.base]} ><Text>cell-seven</Text></View>
                    </View>
                </View>
            </View>
        );
    }
}

export default Mondrian;
