import { Button, Flex, Group, Image } from "@mantine/core"

const ProductDetail = () => {
    return (
        <div>
            <Group mx="auto" direction="column" p={"md"} style={{ width: "100%", height:"100%", borderRadius: "10px"}} >
                <Group mx="auto" direction="column" p={"xl"} style={{ backgroundColor: "#FFF", width: "700px"}} >
                    <Group position="apart">
                        <div style={{ width: 240, marginLeft: 'auto', marginRight: 'auto' }}>
                        <Image
                            radius="md"
                            src="https://images.unsplash.com/photo-1511216335778-7cb8f49fa7a3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
                            alt="Random unsplash image"
                        />
                        </div>

                        <Flex
                            mih={50}
                            bg="rgba(0, 0, 0, .3)"
                            gap="md"
                            justify="flex-start"
                            align="flex-start"
                            direction="row"
                            wrap="wrap"
                        >
                            <Button>Button 1</Button>
                            <Button>Button 2</Button>
                            <Button>Button 3</Button>
                        </Flex>

                    </Group>
                </Group>
            </Group>
        </div>
    )
}