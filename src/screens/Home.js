import { useEffect, useState } from 'react';
import api from 'utilities/api';

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      let results = await api.get('/');

      setData(results);
    }

    getData();
  }, []);

  return (
    <>
      <>ET phone home</>
      <>{JSON.stringify(data)}</>
    </>
  )
};

export default Home;