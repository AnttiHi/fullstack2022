import React from 'react'

const SearchFilter = ({persons, filterShown}) => {
    return (
        {persons}.filter(person => person.name.toLowerCase().includes(filterShown.toLowerCase()))
    )
}

export default SearchFilter