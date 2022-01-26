import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = ()=>{
    return(
        <Layout title="Kopra" >
            <Container>
                <Title>
                    Kopra <Badge>2021</Badge>
                </Title>
                <P>Wholesale digital super platform by Bank Mandiri</P>
                <List ml={4} my={4} >
                    <ListItem>
                        <Meta>Website</Meta>
                        <Link href='https://kopra.bankmandiri.co.id/' >
                            https://kopra.bankmandiri.co.id/ <ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Platform</Meta>
                        <span>Windows/macOS/Linuk/iOS/Android</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>ReactJs</span>
                    </ListItem>
                    {/* <ListItem>
                        <Meta>Blogsport</Meta>
                        <span>NodeJs, Electron, ReactNative</span>
                    </ListItem> */}
                </List>
                <WorkImage src="/images/kopra-banner.png" alt="Kopra" />
                <WorkImage src="/images/inner-kopra-banner.png" alt="kopra" />
            </Container>
        </Layout>
    )
}

export default Work
