import React, { useEffect, useState } from 'react';
import { DashHeader } from '../../components';
import Table, { AvatarCell, SelectColumnFilter, StatusPill } from '../../components/Table';
import { getData } from '../../constants';
import getAllUser from '../../services/getAllUser';
import axios from "axios";
import { useNavigate } from 'react-router-dom';



const Users = ({ activeLink }) => {
  const [dataTest, setDataTest] = useState([

  ]);

  const columns = React.useMemo(
    () => [
      {
        Header: "Username",
        accessor: "username",
        Cell: AvatarCell,
        imgAccessor: "imgUrl",
      },
      {
        Header: "Email",
        accessor: "email",
      },
      {
        Header: "Age",
        accessor: 'age',
      },
      {
        Header: "Roles",
        accessor: "roles",
        Filter: SelectColumnFilter,
        filter: 'includes',
        Cell: StatusPill,
      },
    ],
    []
  );

  const [data, setData] = useState(dataTest);
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("role") != "ROLE_ADMIN") {
      navigate("/")
    }
    const token = localStorage.getItem('token');
    const headers = {
      Authorization: `Bearer ${token}`,
    };
    axios.get("http://localhost:8080/api/test/Allusers", { headers })
      .then(response => {
        console.log('Response:', response.data);
        setData(response.data);
      })
      .catch(error => {
        console.error('Error:', error);
      });


  }, []);

  return (
    <main className='my-2 lg:mb-4 lg:mt-6 mx-4 lg:mx-6 z-20'>
      <DashHeader activeLink={activeLink} />
      <Table columns={columns} data={data} />
    </main>
  );
};

export default Users;
