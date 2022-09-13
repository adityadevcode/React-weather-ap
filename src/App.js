import React,{useState} from 'react'

const App = () => {
  
  const [city,setCity] = useState("");
  const [result,setResult] = useState("");
  const changeHandler = e =>{
    setCity(e.target.value);
  }
  const submitHandler = e =>{
    e.preventDefault();
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d885aa1d783fd13a55050afeef620fcb`).then(
    // after getting data vachina response ni json obj ga convert chesthuna
    response=> response.json()).then(
        data => {
          // data obj lo main ane variable use chesthunam
          const kelvin = data.main.temp;
          // temp kelvin nundi celcius ki convert cheyali ante
          const celcius = kelvin - 273.15;
          setResult("Temperature at "+city+"\n"+Math.round(celcius)+"°C");
        }
      ).catch(error => console.log(error))
      setCity("");
  }

  return (
    <div>
      <center>
        {/* using bootstrap */}
        <div className="card">
          <div className="card-body">
            <h4 className="card-title">Weather App</h4>
            {/* creating form here */}
            <form onSubmit={submitHandler}>
              <input size="30" type="text" name="city" onChange={changeHandler} value={city}/> <br /><br />
              <input type="submit" value="Get Temperature" />
            </form><br /> <br />
            <div>
               <h1>{result}</h1> 
            </div>
          </div>
        </div>
      </center>
    </div>
  )
}

export default App
// form lo type chese data particular varible lo store chesukovali e varibale 
// use chesukoni api get chesukuntam
//city oka varibale store chesukuntam , variable ni declare cheyali
// useState hook use chesi varible create chesthuna
/*
const [city,setCity]=useState("")
to reset city value setCity 
e particular city value ni manam input type  value lo use chestham
//e input field lo proper ga handle cheyali ante onchange event handler
const changeHandler=e=>{} using setCity to reset value of city
setCity(e.targe.value);
sumbit handler anedi chala important form ki actions emain pending vunte cancel chesthuna
e.preventDefault();