import Head from 'next/head';

type Props = {
    title: string;
}

const PageHead: React.FC<Props> = ({title}) => {
    return (
        <Head>
            <title>{title}</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <link rel="icon" href="./images/Logo.svg" />
        </Head>
    );
}

export default PageHead;