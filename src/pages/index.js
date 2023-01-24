import Head from 'next/head'

// Import Components
import { LandingPage } from '../../components'

export default function Home() {
  return (
    <>
      <Head>
        <title>PT. Widji Nusantara Makmur</title>
        <meta name="description" content="Company Profile of WINMAR" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      {/* Section for Landing Page */}
      <LandingPage />

      {/* Section for ... */}

      {/* Section for Footer */}
    </>
  )
}
