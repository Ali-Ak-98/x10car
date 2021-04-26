import Head from 'next/head'
import styles from '../styles/Home.module.css'
import axios from "axios";

export async function getServerSideProps(context) {
    const url = 'https://autoextract.scrapinghub.com/v1/extract'
    const data = [{
        'url': 'https://allegro.pl/uzytkownik/bula_lukasz/lampy-przednie-i-elementy-lampy-przednie-255099?bmatch=cl-e2101-d3794-c3683-aut-1-2-0412',
        'pageType': 'productList',
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
        props: {data: res.data}, // will be passed to the page component as props
    }
}

export default function Home(props) {
    console.log(props);

    const test = async () => {
        const url = 'https://autoextract.scrapinghub.com/v1/extract'
        const data = [{
            'url': 'https://allegro.pl/uzytkownik/bula_lukasz/lampy-przednie-i-elementy-lampy-przednie-255099?bmatch=cl-e2101-d3794-c3683-aut-1-2-0412',
            'pageType': 'productList',
        }];
        const options = {
            headers: {
                'Authorization': 'Basic ' + Buffer.from('6db07fd5272a431483ff1ed3c530911a:').toString('base64'),
                'Content-Type': 'application/json',
                'Content-Length': data.length
            },
        };

        const res = await axios.post(url, data, options);
        console.log(res.data);
    }

    return (
        <div className={styles.container}>
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <main className={styles.main}>
                <h1 className={styles.title} onClick={test}>
                    Welcome to <a href="https://nextjs.org">Next.js!</a>
                </h1>

                <p className={styles.description}>
                    Get started by editing{' '}
                    <code className={styles.code}>pages/index.js</code>
                </p>

                <div className={styles.grid}>
                    <a href="https://nextjs.org/docs" className={styles.card}>
                        <h3>Documentation &rarr;</h3>
                        <p>Find in-depth information about Next.js features and API.</p>
                    </a>

                    <a href="https://nextjs.org/learn" className={styles.card}>
                        <h3>Learn &rarr;</h3>
                        <p>Learn about Next.js in an interactive course with quizzes!</p>
                    </a>

                    <a
                        href="https://github.com/vercel/next.js/tree/master/examples"
                        className={styles.card}
                    >
                        <h3>Examples &rarr;</h3>
                        <p>Discover and deploy boilerplate example Next.js projects.</p>
                    </a>

                    <a
                        href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                        className={styles.card}
                    >
                        <h3>Deploy &rarr;</h3>
                        <p>
                            Instantly deploy your Next.js site to a public URL with Vercel.
                        </p>
                    </a>
                </div>
            </main>

            <footer className={styles.footer}>
                <a
                    href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Powered by{' '}
                    <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo}/>
                </a>
            </footer>
        </div>
    )
}
