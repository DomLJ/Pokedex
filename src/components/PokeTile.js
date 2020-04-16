import React, { useState, useEffect } from 'react'
import Card from '@material-ui/core/Card'
import Chip from '@material-ui/core/Chip'
import Divider from '@material-ui/core/Divider'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles(() => ({
    card: {
        textAlign: 'center',
        width: '200px'
    },
    image: {
        width: '96px',
        height: '96px'
    },
    statLabel: {
        fontSize: '0.75rem',
        fontWeight: 500,
        margin: 0
    },
    statValue: {
        fontSize: '1.25rem',
        fontWeight: 'bold',
        marginTop: 12,
        marginBottom: 4,
        letterSpacing: '1px'
    },
    typeChip: {
        margin: 5
    }
}))

function PokeTile(props) {
    const [data, setData] = useState(null)

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${props.name}`)
            .then(response => response.json())
            .then(response => setData(response))
    }, [props.name])

    const classes = useStyles()

    if (data) {
        const renderTypes = data.types.map((type, index) =>
            <Chip color='primary' label={type.type.name} key={index} className={classes.typeChip} />
        )

        return (
            <Grid item >
                <Box boxShadow={3} borderRadius={3}>
                    <Card className={classes.card} >

                        <img alt={data.name} src={data.sprites.front_default} className={classes.image}/>

                        <Typography variant='subtitle1'>
                            {data.name}
                        </Typography>

                        <Divider light />

                        <Box display='flex' pt={2} pb={1}>
                            <Box flex='auto'>
                                <Typography className={classes.statLabel}>height</Typography>
                                <Typography className={classes.statValue}>{data.height / 10}m</Typography>
                            </Box>

                            <Box flex='auto'>
                                <Typography className={classes.statLabel}>weight</Typography>
                                <Typography className={classes.statValue}>{data.weight / 10}kg</Typography>
                            </Box>
                        </Box>

                        <Divider light />

                        <Box display='flex' justifyContent='center' flexWrap='wrap' pt={2} pb={1}>
                            {renderTypes}
                        </Box>
                    </Card>
                </Box>
            </Grid>
        )
    } else {
        return null
    }
}

export default PokeTile
