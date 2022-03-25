import React, { Component } from 'react'
import { FlatList } from 'react-native'
import Digimon from './digimon'
import Context from '../../context/context';

export default class Index extends Component {

    static contextType = Context;

    constructor(props:  any) {
        super(props);
        this.renderItem = this.renderItem.bind(this);
    }

    renderItem({item}: any) {
        return <Digimon digimon={item} />
    }

    render() {
        return (
            <FlatList
            data={this.context.digimons}
            renderItem={this.renderItem}
            keyExtractor={item => item.name}
          />
        )
    }
}