import React, { Component } from 'react'
import Item from './Item'
import request from 'request';


class List extends Component {
    state = {
        items: []
    }
    componentWillMount() {
        request(window.location.origin + '/data/matchboxbrasil.json', (error, response, body) => {
            this.setState({ items: JSON.parse(body).data })
        })
    }
    render() {
        return (

            <ul className="itemCardGroup">
                {this.state.items.map((item, i) => {
                    item.index = i+1; 
                    return <Item key={item.__id} data={item} />
                })}

            </ul>
        )
    }
}
export default List