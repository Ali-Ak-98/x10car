import Head from 'next/head'
import styles from '../styles/Home.module.css'
import axios from "axios";

export async function getServerSideProps(context) {
    return {
        props: {data: 'testData'}, // will be passed to the page component as props
    }
}

export default function Home(props) {
    console.log(props)

    const test = async () => {
        const https = require('https');

        const data = JSON.stringify([{
            'url': 'https://allegro.pl/uzytkownik/bula_lukasz/lampy-przednie-i-elementy-lampy-przednie-255099?bmatch=cl-e2101-d3794-c3683-aut-1-2-0412',
            'pageType': 'productList',
        }]);
        const options = {
            host: 'autoextract.scrapinghub.com',
            path: '/v1/extract',
            headers: {
                'Authorization': 'Basic ' + Buffer.from('6db07fd5272a431483ff1ed3c530911a:').toString('base64'),
                'Content-Type': 'application/json',
                'Content-Length': data.length
            },
            method: 'POST',
        };
        const req = https.request(options, res => {
            console.log(`statusCode: ${res.statusCode}`);
            res.on('data', d => {
                process.stdout.write(d);
                console.log(d);
            });
        });
        req.on('error', error => {
            console.error(error);
        });
        req.write(data);
        req.end();

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
