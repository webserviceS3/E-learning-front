import React, { useEffect, useState } from 'react'
import getAllUser from '../services/getAllUser';
import Visitor from '../services/Visitor';



const Insights = () => {
    const [nomberStudent, setNomberStudent] = useState('0');
    const [nomberProf,setNomberProf]=useState('0');
    const [nomberVisitor,setNomberVisitor]= useState('0');

    useEffect(() => {
        const fetchData = async () => {
          try {
            // Call the asynchronous method from getAllUsers class
            const studentCount = await getAllUser.nomberStudent();
            const ProfCount = await getAllUser.nomberPROF();
            const visitorCount = await Visitor.count();
            setNomberProf(ProfCount);
            setNomberVisitor(visitorCount);
            localStorage.setItem("visitor",visitorCount);
            // Update state with the fetched data
            setNomberStudent(studentCount);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
    
        // Call the fetchData function
        fetchData();
      }, []);
    
      const insights = [
        { title: nomberStudent, text: 'student count', icon: 'bx bx-user' },
        { title: nomberProf, text: 'teacher count', icon: 'bx bxs-graduation' },
        { title: nomberVisitor, text: 'visitor count', icon: 'bx bx-line-chart' },
        
      ];
    
    
    return (
        <ul className="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 grid-cols-auto-fit grid-col-minmax-60 gap-6 mt-9 font-palanquin">
            {insights.map((insight, index) => {
                return (
                    <li key={index} className={`p-8 bg-white shadow-xl rounded-lg flex items-center gap-6 cursor-pointer`}>
                        <i className={`${insight.icon} w-20 h-20 rounded-lg text-3xl flex items-center justify-center ${index === 0 ? 'bg-[#CFE8FF] text-[#1976D2]' : index === 1 ? 'bg-[#FFF2C6] text-[#FBC02D]' : index === 2 ? 'bg-[#BBF7D0] text-[#388E3C]' : index === 3 ? 'bg-[#FECDD3] text-[#D32F2F]' : ''}`}></i>
                        <span>
                            <h3 className="font-semibold text-slate-gray text-[24px]">
                                {insight.title}
                            </h3>
                            <p className='text-slate-gray'>{insight.text}</p>
                        </span>
                    </li>
                )
            })}
        </ul>
    )
}

export default Insights