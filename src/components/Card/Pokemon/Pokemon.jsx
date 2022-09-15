import { Card, Grid, Row, Text } from '@nextui-org/react'

const Pokemon = (props) => {
    const { name, imgURL } = props
    console.log(name)
    return (
        <Grid.Container gap={2} justify="flex-start">
            <Grid xs={6} sm={3}>
                <Card isPressable>
                    <Card.Body css={{ p: 0 }}>
                        <Card.Image
                            src={
                                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/35.png'
                            }
                            objectFit="cover"
                            width="100%"
                            height={140}
                            alt={name}
                        />
                    </Card.Body>
                    <Card.Footer css={{ justifyItems: 'flex-start' }}>
                        <Row wrap="wrap" justify="space-between" align="center">
                            <Text b>{name}</Text>
                            <Text css={{ color: '$accents7', fontWeight: '$semibold', fontSize: '$sm' }}>{imgURL}</Text>
                        </Row>
                    </Card.Footer>
                </Card>
            </Grid>
        </Grid.Container>
    )
}

export default Pokemon
