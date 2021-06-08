import React from 'react';
import {Button, ScrollView, StyleSheet, Text, View} from 'react-native';
import SeatsioSeatingChart from "../components/SeatsioSeatingChart";

class SimpleSeatingChartWithChangeConfig extends React.Component {

    render() {
        return (
            <View style={this.styles.container}>
                <ScrollView style={StyleSheet.absoluteFill} contentContainerStyle={this.styles.scrollview}>
                    <Text>Demo: call methods on Objects</Text>
                    <View style={this.styles.chart}>
                        <SeatsioSeatingChart
                            workspaceKey="publicDemoKey"
                            event="smallTheatreEvent2"
                            onChartRendered={(chart) => this.chart = chart}
                        />

                    </View>
                    {<Button title={"Log object properties"}
                             onPress={() => {
                                 return this.chart.findObject('A-1')
                                     .then((o) => {
                                         console.log(o.label)
                                         return o.isInChannel('abc');
                                     })
                                     .then(isInChannel => console.log('in channel: ' + isInChannel))
                             }}/>}
                    <View>

                    </View>
                </ScrollView>

            </View>
        );
    }
    styles = StyleSheet.create({
        container: {
            ...StyleSheet.absoluteFillObject,
            justifyContent: 'flex-end',
            alignItems: 'center',
        },
        scrollview: {
            alignItems: 'center',
            paddingVertical: 40,
        },
        chart: {
            width: '100%',
            height: 400,
        },
    });

}


export default SimpleSeatingChartWithChangeConfig;
