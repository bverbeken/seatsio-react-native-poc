import React from 'react';
import {ScrollView, StyleSheet, Text, View, Alert, Button} from 'react-native';
import SeatsioSeatingChart from "../components/SeatsioSeatingChart";

class SimpleSeatingChartWithChangeConfig extends React.Component {

    render() {
        return (
            <View style={this.styles.container}>
                <ScrollView style={StyleSheet.absoluteFill} contentContainerStyle={this.styles.scrollview}>
                    <Text>Simple Seating Chart, no config</Text>
                    <View style={this.styles.chart}>
                        <SeatsioSeatingChart
                            workspaceKey="publicDemoKey"
                            event="smallTheatreEvent2"
                            onChartRendered={(chart) => this.chart = chart}
                        />
                        <Button
                            title="Press me"
                            onPress={() => {
                                console.log(this.chart)
                                this.chart.changeConfig({
                                    objectColor: object => object.isSelectable() ? 'green' : 'red'
                                })
                            }}
                        />
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
