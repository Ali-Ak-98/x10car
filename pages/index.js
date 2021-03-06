import Head from 'next/head'
import styles from '../styles/Home.module.css'
import axios from "axios";

export async function getServerSideProps(context) {
    const url = 'https://autoextract.scrapinghub.com/v1/extract'
    const data = [{
        'url': 'https://allegro.pl/oferta/bixenon-audi-q3-nieskretne-xenony-audi-q3-xenon-10645150905#aboutSeller',
        'pageType': 'product',
    }];
    const options = {
        headers: {
            'Authorization': 'Basic ' + Buffer.from('6db07fd5272a431483ff1ed3c530911a:').toString('base64'),
            'Content-Type': 'application/json',
            'Content-Length': data.length
        },
    };

    const res = await axios.post(url, data, options);

    return {
        props: {data: res.data,test:'test'}, // will be passed to the page component as props
    }
}

export default function Home(props) {
    const {data}=props;

    return (
        <div className={styles.container}>
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <main className={styles.main}>
                <pre>{JSON.stringify(data,null,2)}</pre>
            </main>

        </div>
    )
}
