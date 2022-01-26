import NextLink from 'next/link'
import { Box, Container, Heading, Image, useColorModeValue, Link, Button, SimpleGrid, List, ListItem, Icon } from "@chakra-ui/react";
import Section from "../components/section";
import Paragraph from "../components/paragraph";
import { ChevronRightIcon } from '@chakra-ui/icons';
import { BioSection, BioYear } from '../components/bio';
import Layout from '../components/layouts/article'
import { GridItem } from '../components/grid-item';
import {
    IoLogoInstagram,
    IoLogoGithub,
} from 'react-icons/io5'
import thumbYoutube from '../public/images/links/youtube.png'
import { Meta } from '../components/work';
import I18n from '../utils/i18n';
import { withNamespaces } from 'react-i18next';

const Page = () =>{
    return (
        <Layout>
            <Container>
                {/* <Box borderRadius="lg" bg={useColorModeValue('whiteAlpha.500','whiteAlpha.200')} p={3} mb={6} align="center">
                    Hello, I&apos;m a FrontEnd developer based on Indonesia!
                </Box> */}
                <Box display={{md:'flex'}} my={12}>
                    <Box flexGrow={1}>
                        <Heading as="h2" variant="page-title">
                            {I18n.t("lang.theofilus")}
                        </Heading>
                        <Meta>FrontEnd Developer</Meta>
                    </Box>
                    <Box 
                        flexShrink={0} 
                        mt={{base: 4,md: 0}}
                        ml={{md: 6}}
                        align="center"
                    >
                        <Image 
                            borderColor={useColorModeValue("grey.800","whiteAlpha.800")}
                            borderWidth={2}
                            borderStyle="solid"
                            maxWidth="100px"
                            display="inline-block"
                            borderRadius="full"
                            src="/images/theo.jpg"
                            alt="Profile Image"
                            />
                    </Box>
                </Box>
                <Box 
                    align="left"
                    my={4}

                >
                    <NextLink href="/works">
                        <Button rightIcon={<ChevronRightIcon/>} colorScheme="purple">
                            {I18n.t("lang.myPortofolio")}
                        </Button>
                    </NextLink>
                </Box>
                <Section delay={0.1}>
                    <Heading as="h3" variant="section-title">
                        about Me
                    </Heading>
                    <Paragraph>
                                Theo is a FrontEnd developer based in Jakarta. 
                    </Paragraph>
                    
                </Section>
                <Section delay={0.2}>
                    <Heading as="h3" variant="section-title">
                        bio
                    </Heading>
                    <BioSection>
                        <BioYear>1997</BioYear>
                        Born in Surakarta ( Jawa Tengah ), Indonesia.
                    </BioSection>
                    <BioSection>
                        <BioYear>2015</BioYear>
                        Completed the Vocational High School of Software Engineering at SMK Negri 2 Surakarta.
                    </BioSection>
                    <BioSection>
                        <BioYear>2019</BioYear>
                        Worked at PT. Berbagi dan Berkarya Indonesia as FrontEnd Developer.
                    </BioSection>
                    <BioSection>
                        <BioYear>2021 to present</BioYear>
                        Worked at PT. Enigma Cipta Humanika as Software Developer.
                    </BioSection>
                </Section>

                <Section delay={0.3}>
                    <Heading as="h3" variant="section-title" >
                        find Me
                    </Heading>
                    <List>
                        <ListItem>
                            <Link href="" target="_blank">
                                <Button variant="ghost" colorScheme="teal" leftIcon={<Icon as={IoLogoGithub}/>}>@theokunto</Button>
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Link href="" target="_blank">
                                <Button variant="ghost" colorScheme="teal" leftIcon={<Icon as={IoLogoInstagram}/>}>@theokunto</Button>
                            </Link>
                        </ListItem>
                    </List>
                </Section>
                {/* <SimpleGrid columns={[1,2,2]} gab={6} >
                    <GridItem 
                        href="https://www.google.com/"
                        title="Dev as Life"
                        thumbnail={thumbYoutube}
                    >
                        A similikiti
                    </GridItem>
                </SimpleGrid> */}
            </Container>
        </Layout>
    )
}

export default withNamespaces()(Page);