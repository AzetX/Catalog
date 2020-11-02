import React, { useEffect, useState } from 'react'


//получаем данные из массива => рендерим их


export default function TableProducts() {
    const [error, setError] = useState(null)
    // const [filter, setFilter] = useState()
    // const [tab, setTabe] = useState(1)
    const [items, setItems] = useState([])
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(()=> {
        fetch("https://api.punkapi.com/v2/beers?per_page=10")
            .then((result) =>{ 
            setIsLoaded(true)
            setItems(result)
        },
        (error) => {
            setIsLoaded(true)
            setError(error)
        }
        )
    }, [])
    return (items)
    
}