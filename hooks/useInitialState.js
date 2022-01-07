import { useEffect, useState } from 'react';


const useGetData = () => {
  const [info, setInfo] = useState([]);

  useEffect(async () => {
      const response = await fetch();
      const data = await response.json();
      setInfo(data);
  }, []);

  return info;
};

export default useGetData;