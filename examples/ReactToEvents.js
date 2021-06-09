import React from 'react';
import {StyleSheet, View, Text, ScrollView} from 'react-native';
import SeatsioSeatingChart from "../components/SeatsioSeatingChart";

class ReactToEventsExample extends React.Component {

    render() {
        return (
            <View style={this.styles.container}>
                <ScrollView style={StyleSheet.absoluteFill} contentContainerStyle={this.styles.scrollview}>
                    <Text>Demo: Simple Seating Chart, no config</Text>
                    <View style={this.styles.chart}>
                        <SeatsioSeatingChart
                            workspaceKey="publicDemoKey"
                            event="smallTheatreEvent2"
                            onObjectSelected={o => o.pulse()}
                            onObjectDeselected={o => o.unpulse()}
                            onObjectClicked={o => console.log("object clicked: " + o.label)}
                            onSelectedObjectBooked={o => console.log("You selected " + o.label + ' but it became unavailable in the meantime')}
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


export default ReactToEventsExample;
