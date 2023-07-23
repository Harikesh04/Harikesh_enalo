import { Pagination, Table } from 'antd'
import { getUserData } from './api'
import { useEffect, useState } from 'react';
import "./App.css";
import { TableHeader } from './dummy/table';




function App() {
  const [pageNumber, setPageNumber] = useState(0);
  const [data, setData] = useState([]);
  const [limit, setLimit] = useState(null);


  const getData = async () => {

    try {
      const res = await getUserData(pageNumber);
      setLimit(res?.data?.count);

      setData(res?.data?.results);
     

    } catch (error) {
      console.log(error);

    }

  }

  useEffect(() => {
    getData();
  }, [])

  useEffect(() => {
    getData();
    console.log("called");

  }, [pageNumber])

  const handleChange = (e) => {
    setPageNumber(e);

  }

  return (
    <>
      <div className="home-page">
        <div className="table-container">
          <Table dataSource={data} columns={TableHeader} pagination={false} />

        </div>


        <div className='pagination-container'>
          <Pagination defaultCurrent={1} total={limit} onChange={handleChange} />

        </div>

      </div>





    </>
  )
}

export default App
