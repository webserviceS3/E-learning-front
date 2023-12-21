import React from 'react'
import { Navbar, Footer } from '../../components'
import Contact from '../../components/Contact'
import AddLink from '../../components/Addlink'

const ContactPage = () => {
  return (
    <main className='relative'>
      <Navbar />
      <section className='padding-x pt-[120px]'>
        <Contact />
        {/* <AddLink /> */}

      </section>
      <section className='bg-black padding-x padding-t pb-8 mt-12'>
        <Footer />
      </section>
    </main>
  )
}

export default ContactPage