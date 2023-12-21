
import Footer from '../../components/Footer'
import Pagination from '../../components/Pagination'
import QcmSection from '../../components/QcmSection'
import NavbarConextion from '../../components/NavbarConextion'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import NaveTeacher from '../../components/NaveTeacher'

const QCMStudent = () => {
  const navigateqcm = useNavigate()
  useEffect(()=>{
    if (localStorage.getItem("role") != "ROLE_STUDENT") {
      navigateqcm("/")
    }
  })
  return (
    <main className='relative'>
      <NavbarConextion />
      <section className='padding-x pt-40'>
        <QcmSection length={4}/>
      </section>
      {/* <section className='padding-x pt-20'>
        <Pagination length={5} />
      </section>
      <section className='bg-black padding-x padding-t pb-8 mt-12'>
        <Footer />
      </section> */}
    </main>
  )
}

export default QCMStudent