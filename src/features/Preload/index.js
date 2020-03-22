import React from 'react';
import {StyleSheet, View} from 'react-native';
import {LineChart} from 'react-native-charts-wrapper';

const Preload = () => {
  return (
    <View style={{flex: 1}}>
      <View style={styles.container}>
        <LineChart
          style={styles.chart}
          data={{
            dataSets: [
              {
                label: 'demo',
                config: {fillColor: '#00ff'},
                values: [
                  {x: 5, y: 90},
                  {x: 10, y: 130},
                  {x: 50, y: 2000, marker: 'eat more'},
                  {x: 80, y: 9000, marker: 'eat less'},
                  ,
                ],
              },
              {
                label: 'demo 2',
                values: [
                  {x: 20, y: 30},
                  {x: 10, y: 130},
                  {x: 50, y: 2000, marker: 'eat more'},
                  {x: 80, y: 9000, marker: 'eat less'},
                  ,
                ],
              },
            ],
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  chart: {
    width: 300,
    height: 300,
  },
});

export default Preload;
