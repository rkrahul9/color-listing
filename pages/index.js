import Head from 'next/head'
import Colors from '../containers/Colors';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Color Listing App</title>
        <meta name="description" content="Listing Random colors according to color name" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container">
        <Colors />
      </main>

      <footer>
      </footer>
    </div>
  )
}
