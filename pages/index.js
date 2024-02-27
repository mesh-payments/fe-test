import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Users from "../components/Users";
import {mock} from "../model/mock";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Mesh Frontend Test</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
          <Users users={mock.results}/>
      </main>


      <style jsx>{`
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        footer img {
          margin-left: 0.5rem;
        }
        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
          text-decoration: none;
          color: inherit;
        }
        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Arial, Helvetica, sans-serif;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: Arial, Helvetica, sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
