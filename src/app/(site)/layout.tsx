import Header from '@/components/landing-page/header'
import React from 'react'



function HomePageLayout({children}:{children: React.ReactNode}) {
  return (
    <main>
      <Header />
      {children}
    </main>
  )
}

export default HomePageLayout