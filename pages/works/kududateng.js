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
                    Kududateng.online <Badge>2020</Badge>
                </Title>
                <P>Online invitation services</P>
                <List ml={4} my={4} >
                    <ListItem>
                        <Meta>Website</Meta>
                        <Link href='http://www.kududateng.online/' >
                        http://www.kududateng.online/ <ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Platform</Meta>
                        <span>Windows/macOS/Linuk/iOS/Android</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>Html 5, css, Bootstrap 5</span>
                    </ListItem>
                    {/* <ListItem>
                        <Meta>Blogsport</Meta>
                        <span>NodeJs, Electron, ReactNative</span>
                    </ListItem> */}
                </List>
                <WorkImage src="/images/kududateng-banner.png" alt="Kopra" />
                <WorkImage src="/images/kududateng-inner-banner.png" alt="kopra" />
            </Container>
        </Layout>
    )
}

export default Work
