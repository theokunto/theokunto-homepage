import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import thumbKopra from '../public/images/kopra-banner.png'
import thumbKududateng from '../public/images/kududateng-banner.png'
import Layout from '../components/layouts/article'
const Works=()=>(
    <Layout title="Works">
        <Container>
            <Heading as="h3" fontSize={20} mb={4} my={12}>
                On Going
            </Heading>
            <SimpleGrid columns={[1,1,2]} gap={6}>
                <Section>
                    <WorkGridItem id="kopra" title="Kopra" thumbnail={thumbKopra}>
                    Kopra by Bank Mandiri, Wholesale digital super platform
                    </WorkGridItem>
                </Section>
            </SimpleGrid>
            <Divider/>
            <Heading as="h3" fontSize={20} mb={4} my={12}>
                Finished
            </Heading>
            <SimpleGrid columns={[1,1,2]} gap={6}>
                <Section>
                    <WorkGridItem id="kududateng" title="Kududateng.online" thumbnail={thumbKududateng}>
                        Online invitation services
                    </WorkGridItem>
                </Section>
            </SimpleGrid>
        </Container>
    </Layout>
)

export default Works