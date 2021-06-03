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

                    </View>

                    <View>
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
                        <Button title={"clearSelection()"} onPress={() => this.chart.clearSelection()}/>

                        <Button title={"selectObjects(['A-1', 'A-2'])"} onPress={() => this.chart.selectObjects(['A-1', 'A-2'])}/>
                        <Button title={"deselectObjects(['A-1', 'A-2'])"} onPress={() => this.chart.deselectObjects(['A-1', 'A-2'])}/>

                        <Button title={"selectCategories(['3'])"} onPress={() => this.chart.selectCategories(['3'])}/>
                        <Button title={"deselectCategories(['3'])"} onPress={() => this.chart.deselectCategories(['3'])}/>
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
