import { Anchor, Breadcrumbs, Group, Title } from "@mantine/core";

type BreadcrumbsWidgetProps = {
    items : React.ReactNode
}

const BreadcrumbsWidget = (props: BreadcrumbsWidgetProps) => {
    return (
        <Group position={'apart'} align={'center'}>
            <Title order={2}>Products</Title>
            <>
                <Breadcrumbs sx={{ color: '#00ECE5', fontSize: 11, lineHeight: 1.4 }}>{props.items}</Breadcrumbs>
            </>
        </Group>
    )
}

export default BreadcrumbsWidget;