import React from 'react'
import WelcomeSection from '../components/WelcomeSection/WelcomeSection'
import ServiceSection from '../components/ServiceSection/ServiceSection'
import Separator from '../components/Separator'
import LocationSection from '../components/LocationSection/LocationSection'
import ContactSection from '../components/ContactSection/ContactSection'

function HomePage() {
  return (
    <div>
      <WelcomeSection/>
      <Separator/>
      <ServiceSection/>
      <Separator/>
      <LocationSection/>
      <Separator/>
      <ContactSection/>
    </div>
  )
}

export default HomePage
