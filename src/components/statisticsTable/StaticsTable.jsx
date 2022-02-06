import axios from 'axios';
import {useEffect, useState,  } from 'react';
import './table.css'
import { Link } from 'react-router-dom';


export const StaticsTable = () => {
  const [data, setData]  = useState ([])
  const [searchData, setSearchData] = useState("")
  
  useEffect(() => {
    const getData =async () => {
      const res = await  axios.get('https://corona.lmao.ninja/v3/covid-19/countries')
      setData(res.data)
    }

    getData()

  }, [])
  function addCommas(nStr) {
    nStr += '';
    var x = nStr.split('.');
    var x1 = x[0];
    var x2 = x.length > 1 ? '.' + x[1] : '';
    var rgx = /(\d+)(\d{3})/;
    while (rgx.test(x1)) {
      x1 = x1.replace(rgx, '$1' + ',' + '$2');
    }
    return x1 + x2;
  }
  const searchFilter = data. filter(item => item.country.toLowerCase().includes(searchData.toLowerCase()))
  
  


  return (
    <>
       <input type="text" className='form-control mt-4 ' placeholder='Davlat Nomini Kiriting...' onChange={e => setSearchData(e.target.value)}/>
        <div className='table-responsive mt-4'>
        <table className='table table-striped text-center fw-bold' >
            <thead>
              <tr>
                <th>#</th>
                <th>Davlat</th>
                <th>Umumiy</th>
                <th>Yangi</th>
                <th>Umumiy vafot etganlar</th>
                <th>Yangi vafot etganlar</th>
                <th>Aktiv holatlar</th>
                <th>Umumiy tuzalganlar</th>
                <th>Bugun tuzalganlar</th>
                <th>Aholi</th>
              </tr>
            </thead>
            <tbody>
            {searchData.length === 0 ? (
                <>
                {data.map((item, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>
                      <Link to = {`/country/${item.countryInfo.Iso2}`}>{item.country}</Link>
                    </td>
                    <td>{addCommas(item.cases)}</td>
                    {item.todayCases === 0 ? <td>-</td> : <td className='bg-warning '>{addCommas(item.todayCases)}</td> }
                    <td>{addCommas(item.deaths)}</td>
                    {item.todayDeaths === 0 ? <td>-</td> : <td className='bg-danger text-white'>{addCommas(item.todayDeaths)}</td> }
                    <td>{addCommas(item.active)}</td>
                    <td>{addCommas(item.recovered)}</td>
                    {item.todayRecovered === 0 ? <td>-</td> : <td className='bg-success text-white'>{addCommas(item.todayRecovered)}</td> }
                    <td className='text-info'>{addCommas(item.population)}</td>
  
                   
                  </tr>
                ))}
                </>
            ):(
              <>
              {searchFilter.length > 0 ? (
                searchFilter.map((item, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>
                      <Link to = {`/country/${item.countryInfo.Iso2}`}>{item.country}</Link>
                    </td>
                    <td>{addCommas(item.cases)}</td>
                    {item.todayCases === 0 ? <td>-</td> : <td className='bg-warning '>{addCommas(item.todayCases)}</td> }
                    <td>{addCommas(item.deaths)}</td>
                    {item.todayDeaths === 0 ? <td>-</td> : <td className='bg-danger text-white'>{addCommas(item.todayDeaths)}</td> }
                    <td>{addCommas(item.active)}</td>
                    <td>{addCommas(item.recovered)}</td>
                    {item.todayRecovered === 0 ? <td>-</td> : <td className='bg-success text-white'>{addCommas(item.todayRecovered)}</td> }
                    <td className='text-info'>{addCommas(item.population)}</td>
  
                   
                  </tr>
                ))
              ):(
                <tr>
                  <td colSpan="10" className="alert alert-danger w-100 bg-danger text-white" >Ma`lumot topilmadi!</td>
                </tr>
                
              )}
              </>

            )}
            
            </tbody>

            
        </table>
      </div>
      </>
      
  
  )
    
  
};
