import { useEffect } from "react";
import Layout from "./Layout";
import {useNavigate} from 'react-router-dom'

const MahasiswaDashboard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if(sessionStorage.getItem('role') !== 'mahasiswa'){
      navigate(`/${sessionStorage.getItem('role')}`)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <Layout />
    </>
  );
};

export default MahasiswaDashboard;
