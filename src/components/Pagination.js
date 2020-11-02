import React from 'react'

function PaginationItem({list}) {
    return <li> {list} </li>
}


export default function Pagination(props) {
    return (
        <div className="pagination">
            <ul>
                {props.lists.map(list => {
                    return <PaginationItem key={list.toString()} list={list}/>
                })}
            </ul>
        </div>
    )    
}