import axios from 'axios';
import  React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';



const CountryPage = () => {
  const params = useParams().iso;
  const [image, setImage] = useState();
  const[country, setCountry] =useState()
  const [cases, setCases ] = useState(0);
  const [deaths, setDeaths ] = useState(0);
  const [recovered, setRecovered] = useState (0);

  
  
  useEffect(() => {
    const getData = async() => {
      try {
        const res = await axios.get(`https://disease.sh/v3/covid-19/countries/${params}`);
        setImage(res.data.countryInfo.flag);
        setCountry(res.data.country);
        setCases(res.data.cases);
        setDeaths(res.data.deaths);
        setRecovered(res.data.recovered);
      } catch (err) {
        console.log(err);
      }
    }
    
    getData()
    
 }, [] );
 
      function addCommas(nStr) {
      nStr += '';
      var x = nStr.split('.');
      var x1 = x[0];
      var x2 = x.length > 1 ? '.' + x[1] : '';
      var rgx = /(\d+)(\d{3})/;
      while (rgx.test(x1)) {
        x1 = x1.replace(rgx, '$1'  + ',' + '$2');
      }
      return x1 + x2;
    }

  
  return (
    <div className='container mt-4 '>
      <div className='row'>
        <div className="col-12">
          <div className="d-flex align-items-center justify-content-center">
            <img src={image} alt={country}  className='me-w2'  width="80px"  />
            <h1 className='fw-bold text-uppercase'>{country}</h1>
            </div>
            <hr/>
          <div className='col-12 text-center mt-3'>
                  <h2>Jami Tasdiqlanganlar</h2>
                  <h1 className='text-warning'>{addCommas(cases)}</h1>
                  <h2>Vafot Etganlar</h2>
                  <h1 className='text-danger'>{addCommas(deaths)}</h1>
                  <h2>Tuzalgnalar</h2>
                  <h1 className='text-success' >{addCommas(recovered)}</h1>
              </div>
        </div>
      </div>
     </div>
  );
};

export default CountryPage;
