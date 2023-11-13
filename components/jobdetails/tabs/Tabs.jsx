import React from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';

import styles from './tabs.style';
import { SIZES } from '../../../constants';

const TabButton = ({ name, activeTab, onHandleSearchType }) => (
  <TouchableOpacity>
    <Text>{name}</Text>
  </TouchableOpacity>
);

const Tabs = ({ tabs, activeTab, setActiveTab }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={tabs}
        renderItem={({ item }) => (
          <TabButton
            name={item}
            active={activeTab === item}
            onHandleSearchType={() => setActiveTab(item)}
          />
        )}
      />
    </View>
  );
};

export default Tabs;
