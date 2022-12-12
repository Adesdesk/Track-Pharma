import { Button, Flex, Grid, Group, Image, List, Paper, Space, Text, Timeline, Title, useMantineTheme } from "@mantine/core";
import {IconGitBranch, IconGitCommit, IconGitPullRequest, IconMessageDots} from '@tabler/icons'; 

const ProductDetailPage = () => {

    const theme = useMantineTheme();

    const product = {
        manufacturerName: "Team201",
        manufacturerEmail: "team201@grandida.com",
        manufacturingDate: "November 03, 2022",
        expiryDate: "852",
        productName: "Tramadol ",
        scientificName: "Tramadol ",
        image: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/gettyimages-tramadol-capsules-1542117110.jpg",
    }

    return ( 
        <>
            
        <Paper shadow="xs" radius="md">
            <Group mx="auto" p={"md"} style={{ width: "100%", height:"100%", borderRadius: "10px"}} >
                <Group mx="auto" p={"lg"} style={{ 
                    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0], 
                    width: "900px"
                }} >
                    <Group mb={30} style={{ width: "100%" }}>

                        <Grid>
                            <Grid.Col md={6} lg={4}>
                                <Flex
                                    mih={50}
                                    justify="center"
                                    align="center"
                                    direction={'column'}
                                >
                                        <Image
                                            radius="md"
                                            src={ product.image }
                                            alt={ product.productName }
                                        />
                                </Flex>
                            </Grid.Col>
                            <Grid.Col md={6} lg={4}>
                                <Flex
                                    h={'100%'}
                                    justify="flex-start"
                                    align="flex-start"
                                    direction={'column'}
                                >
                                    <Title order={2}>{ product.productName }</Title>
                                    <Text m={0} fz="md">21</Text>
                                    <Text m={0} fz="md">MFG { product.manufacturingDate }</Text>
                                    <Text m={0} fz="md">Expires in { product.expiryDate } day(s)</Text>
                                </Flex>
                            </Grid.Col>
                            <Grid.Col md={6} lg={4}>
                                
                                <Flex
                                    h={'100%'}
                                    justify="flex-start"
                                    align="center"
                                    direction={'column'}
                                >
                                    <Text m={0} fz="lg">Batch Count</Text>
                                    <Title order={2}>5</Title>
                                </Flex>
                            </Grid.Col>
                        </Grid>
                    
                    </Group>

                    <Title order={2}>General Information</Title>
                    
                    <Group position={'apart'} w={"100%"}>
                        <Grid>
                            <Grid.Col span={6}>
                                <Text fw={800}>Type:</Text>
                            </Grid.Col>
                            <Grid.Col span={6}>
                                <Text fw={200}>BCG:</Text> 
                            </Grid.Col>
                        </Grid>                      
                    </Group>
                    <Group position={'apart'} w={"100%"}>
                        <Text fw={800}>Type:</Text>
                        <Text fw={200}>BCG:</Text>                        
                    </Group>
                    <Group position={'apart'} w={"100%"}>
                        <Text fw={800}>Type:</Text>
                        <List withPadding>
                            <List.Item>Clone or download repository from GitHub</List.Item>
                            <List.Item>Install dependencies with yarn</List.Item>
                            <List.Item>To start development server run npm start command</List.Item>
                            <List.Item>Run tests to make sure your changes do not break the build</List.Item>
                            <List.Item>Submit a pull request once you are done</List.Item>
                        </List>
                    </Group>
                    
                    <Group p={50} style={{ width: "100%" }}>
                        
                        <Timeline active={1} bulletSize={24} lineWidth={2}>
                            <Timeline.Item bullet={<IconGitBranch size={12} />} title="New branch">
                                <Text color="dimmed" size="sm">You&apos;ve created new branch <Text variant="link" component="span" inherit>fix-notifications</Text> from master</Text>
                                <Text size="xs" mt={4}>2 hours ago</Text>
                            </Timeline.Item>

                            <Timeline.Item bullet={<IconGitCommit size={12} />} title="Commits">
                                <Text color="dimmed" size="sm">You&apos;ve pushed 23 commits to<Text variant="link" component="span" inherit>fix-notifications branch</Text></Text>
                                <Text size="xs" mt={4}>52 minutes ago</Text>
                            </Timeline.Item>

                            <Timeline.Item title="Pull request" bullet={<IconGitPullRequest size={12} />} lineVariant="dashed">
                                <Text color="dimmed" size="sm">You&apos;ve submitted a pull request<Text variant="link" component="span" inherit>Fix incorrect notification message (#187)</Text></Text>
                                <Text size="xs" mt={4}>34 minutes ago</Text>
                            </Timeline.Item>

                            <Timeline.Item title="Code review" bullet={<IconMessageDots size={12} />}>
                                <Text color="dimmed" size="sm"><Text variant="link" component="span" inherit>Robert Gluesticker</Text> left a code review on your pull request</Text>
                                <Text size="xs" mt={4}>12 minutes ago</Text>
                            </Timeline.Item>
                        </Timeline>
                    </Group>
                </Group>
            </Group>
        </Paper>
        </>
     );
}
 
export default ProductDetailPage;