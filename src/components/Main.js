import React, { useState, useEffect } from 'react'
import Pagination from '@material-ui/lab/Pagination'
import Box from '@material-ui/core/Box'
import Filters from './Filters'
import PokeGrid from './PokeGrid'
import useDidUpdateEffect from '../hooks/useDidUpdateEffect'

function Main() {
    const [results, setResults] = useState([])
    const [page, setPage] = useState(1)
    const [count, setCount] = useState(0)
    const [selectedCategory, setSelectedCategory] = useState('')
    const [selectedProperty, setSelectedProperty] = useState('')
    const [properties, setProperties] = useState([])

    const pageCapacity = 20
    const pageCount = Math.ceil(count / pageCapacity)

    useEffect(() => {
        fetchBasicData()
    }, [])

    useDidUpdateEffect(() => {
        if (selectedCategory) {
            fetch(`https://pokeapi.co/api/v2/${selectedCategory}`)
                .then(response => response.json())
                .then(data => {
                    setProperties(data.results)
                })
        } else {
            setProperties([])
            fetchBasicData()
        }
    }, [selectedCategory])

    useDidUpdateEffect(() => {
        if (selectedProperty) {
            fetch(selectedProperty)
                .then(response => response.json())
                .then(data => {
                    setResults(data.pokemon_species)
                    setCount(data.pokemon_species.length)
                    setPage(1)
                })
        } else {
            fetchBasicData()
        }
    }, [selectedProperty])


    function fetchBasicData() {
        fetch('https://pokeapi.co/api/v2/pokemon?offset=0&limit=964')
            .then(response => response.json())
            .then(data => {
                setResults(data.results)
                setCount(data.count)
                setPage(1)
            })
    }

    return (
        <main>
            <Filters
                properties={properties}
                selectedCategory={selectedCategory}
                selectedProperty={selectedProperty}
                setSelectedCategory={setSelectedCategory}
                setSelectedProperty={setSelectedProperty}
            />

            <PokeGrid results={results} page={page} pageCapacity={pageCapacity} />

            <Box m={1} mb={2} mt={2} display='flex' justifyContent='center'>
                <Pagination
                    count={pageCount}
                    color='primary'
                    page={page}
                    onChange={(event, page) => setPage(page)}
                />
            </Box>
        </main>
    )
}

export default Main
