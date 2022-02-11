import {useEffect, useState} from 'react';
import axios from 'axios';
import moment from 'moment'
import { StaticsTable } from '../../components/statisticsTable/StaticsTable';

export const Home = () => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false);

    useEffect(() =>{
      const getData = async ( ) =>{
        try {
          const res = await axios.get('https://corona.lmao.ninja/v3/covid-19/all')
          setData(res.data);
          setLoading(true);

        } catch (error) {
          console.log(error)
        }
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
    return (
        <div className='container mt-3'>
            {loading ? (
                <div className='row'>
                <div className="col-10 offset-1 text-center">
                  <div className='alert alert-info text-center'>
                    <p className=' fw-bold mb-0'> <i className='fas fa-chart-bar'style={{transform:'rotate(270deg)'}} ></i> Koronavirus bo`yicha to`liq statistikani bizning saytimizdan oling</p>
                  </div>
                </div>
                <div className='col-12 text-center'>
                    <p className="text-info"><i className="far fa-clock"></i> Qayta Yuklangan vaqti:
                    {moment(data.updated).format(' MMM DD , YYYY , hh:mm:ss A')} 
                    </p>
                    <h2>Jami Tasdiqlanganlar</h2>
                    <h1 className='text-warning'>{addCommas(data.cases)}</h1>
                    <h2>Vafot Etganlar</h2>
                    <h1 className='text-danger'>{addCommas(data.deaths)}</h1>
                    <h2>Tuzalgnalar</h2>
                    <h1 className='text-success' >{addCommas(data.recovered)}</h1>
                </div>
                <div className="col-12">
                  <StaticsTable/>
                </div>
              </div>
            ):(
              <div className="d-flex align-items-center justify-content-center " style={{height:'80vh'}}>
                  <div className="spinner-grow text-primary d-flex align-items-center"   role="status">
                    <span className="visually-hidden">Loading...</span>
                  </div>
              </div>
              
            )}
            
        </div>
      
    )
};
