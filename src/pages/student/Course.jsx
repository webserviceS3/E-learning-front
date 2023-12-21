import CourseSection from '../../components/CourseSection'
import NavbarConextion from '../../components/NavbarConextion'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Course = () => {
  const navigate = useNavigate();
  useEffect(()=>{
    if (!(localStorage.getItem("role") === "ROLE_STUDENT")) {
      navigate("/")
    }
  })
  return (
    <main className='relative'>
      <NavbarConextion />
      <section className='padding-x pt-40'>
        <CourseSection />
      </section>
      {/* <section className='padding-x pt-24'>
        <Reaction />
      </section>
      <section className='padding-x pt-14'>
        <Pagination length={5} />
      </section>
      <section className='bg-black padding-x padding-t pb-8 mt-12'>
        <Footer />
      </section> */}
    </main>
  )
}

export default Course