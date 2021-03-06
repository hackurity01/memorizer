import React from 'react';
import { View, StyleSheet } from 'react-native';
import Item from '../Item';

function ItemList({ itemList }) {
	return <View>{itemList.map((item, index) => <Item key={index} {...item} />)}</View>;
}

const styles = StyleSheet.create({});

export default ItemList;
