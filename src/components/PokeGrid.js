import React from 'react'
import PokeTile from './PokeTile'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'

function PokeGrid({ results, pageCapacity, page }) {

    const renderPokeTiles = results
        .slice((page - 1) * pageCapacity, page * pageCapacity)
        .map((result, index) => <PokeTile key={index} name={result.name} />)

    return (
        <Box p={1} >
            <Grid container justify='center' spacing={2} >
                {renderPokeTiles}
            </Grid>
        </Box>
    )
}

export default PokeGrid
