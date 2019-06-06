import React from 'react';
import ListItem from './ListItem/ListItem';


const ListWrapper = (props) => (
    <ul>
        {props.items.map(item => (
            <ListItem key={item.name} {...item} />
        )) }
    </ul>
)

export default ListWrapper;