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
                            title="changeConfig()"
                            onPress={() => {
                                this.chart.changeConfig({
                                    objectColor: object => object.isSelectable() ? 'green' : 'red',
                                    objectLabel: object => 'x',
                                    numberOfPlacesToSelect: 5
                                })
                            }}
                        />
                        <Button title={"resetView()"} onPress={() => this.chart.resetView()}/>
                        <Button title={"startNewSession()"} onPress={() => this.chart.startNewSession()}/>
                        <Button title={"listSelectedObjects()"} onPress={() => this.chart.listSelectedObjects(objects => alert(objects.map(o => o.label).join(', ')))} />

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
