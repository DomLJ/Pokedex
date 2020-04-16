import React from 'react'
import Box from '@material-ui/core/Box'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import InputLabel from '@material-ui/core/InputLabel'
import FormControl from '@material-ui/core/FormControl'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120
    }
}))

function Filters({ properties, selectedCategory, selectedProperty, setSelectedCategory, setSelectedProperty }) {
    const classes = useStyles()

    const categories = [
        {
            name: 'color',
            endpoint: 'pokemon-color'
        },
        {
            name: 'shape',
            endpoint: 'pokemon-shape'
        },
        {
            name: 'habitat',
            endpoint: 'pokemon-habitat'
        }
    ]

    const renderCategories = categories.map(category =>
        <MenuItem value={category.endpoint} key={category.name}> {category.name} </MenuItem>
    )

    const renderProperties = properties.map(property =>
        <MenuItem value={property.url} key={property.name}> {property.name} </MenuItem>
    )

    return (
        <Box p={1} display='flex' justifyContent='center'>
            <FormControl className={classes.formControl}>
                <InputLabel id='categories-label'>Category</InputLabel>
                <Select
                    labelId='categories-label'
                    value={selectedCategory}
                    onChange={(event) => setSelectedCategory(event.target.value)}
                >
                    <MenuItem value=''>None</MenuItem>
                    {renderCategories}
                </Select>
            </FormControl>

            <FormControl className={classes.formControl}>
                <InputLabel id='properties-label'>Property</InputLabel>
                <Select
                    labelId='properties-label'
                    value={selectedProperty}
                    onChange={(event) => setSelectedProperty(event.target.value)}
                    disabled={properties.length === 0}
                >
                    <MenuItem value=''>None</MenuItem>
                    {renderProperties}
                </Select>
            </FormControl>
        </Box>
    )
}

export default Filters
