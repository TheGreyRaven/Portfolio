import { Image, Title, Center, SimpleGrid } from '@mantine/core';

const centerStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
}

const titleStyle = {
    fontSize: '32px'
}

const WelcomeText = () => {
    return (
        <Center style={{marginTop: '4%'}}>
            <SimpleGrid cols={1}>
                <div style={centerStyle}>
                    <Image radius={50} src="https://avatars.githubusercontent.com/u/14842471" width={96} height={96} />
                </div>
                <div>
                    <Title style={titleStyle}>
                        Oscar Bråberg
                    </Title>
                </div>
            </SimpleGrid>
        </Center>
    )
}

export { WelcomeText }