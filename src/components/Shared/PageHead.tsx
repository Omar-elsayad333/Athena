import Head from 'next/head'

type Props = {
    title: string
    description?: string
}

const PageHead: React.FC<Props> = ({ title, description }) => {
    return (
        <Head>
            <title>{title}</title>
            <link rel="icon" href="./images/Logo.svg" />
            <meta name="description" content={description} />
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
    )
}

export default PageHead
