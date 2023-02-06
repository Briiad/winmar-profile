import React from 'react'
import Head from 'next/head'

import { VisionMissionPage, VisionMissionDesc } from 'components'

const VisiMisi = () => {
  return (
    <>
      <Head>
        <title>Visi dan Misi - Widji Nusantara Makmur</title>
        <meta name="description" content="Visi dan Misi of WINMAR" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Vision and Mission Page */}
      <VisionMissionPage />

      {/* Description Section */}
      <VisionMissionDesc />
    </>
  )
}

export default VisiMisi