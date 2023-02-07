import Head from 'next/head'

// Import Components
import { LandingPage, Intro, PurposeProject, CoreStrength, Documentation, Activity } from '../../components'

export default function Home() {
  return (
    <>
      <Head>
        <title>PT. Widji Nusantara Makmur</title>
        <meta name="description" content="PT. Widji Nusantara Makmur is a national company engaged in agriculture and logistics based in Malang, Indonesia." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      
      {/* Section for Landing Page */}
      <LandingPage />

      {/* Section for ... */}
      <Intro />
      <PurposeProject />
      <CoreStrength />
      <Activity />
      <Documentation />
    </>
  )
}
