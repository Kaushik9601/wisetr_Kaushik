import './App.css';
import {useState} from "react";
function App() {
  
  /*Inital State of Body */
  var [body, setBody]=useState({       
    margin:'0',                           
    padding:'0',                        
    fontFamily: 'Inter',                      
    fontSize: '14px',
    backgroundImage: 'linear-gradient(to right, rgb(80, 190, 209), rgb(11, 120, 148))'
    
  })
 
  const [kpiCard, setKpiCard]=useState({backgroundColor: '#ebf1ff',
    height: '250px',
    width: '300px',
    margin: '10px',
    borderRadius: '8px'})                
 
  const [unitOf,setUnitOf]=useState({
    color: '#63687E',
    fontWeight: 'normal',
    textAlign: 'center',
    top: '-20px',
    position: 'relative'
  })

  const [kpi,setKpi]=useState({
    textAlign: 'center',
    fontSize: '65px',
    fontWeight:' bold'
  })

  return (
    <div className="App" >
      <div className='card123'>
       <div className='cards' >
       <div className="kpi-card cards1" style={kpiCard}>
            <div className='cardFront'>
            <div className="kpi" style={kpi}><img src="https://avatars.dicebear.com/v2/avataaars/wisetr.svg" /></div>
            <div><h4 className="unit-of-measure" style={unitOf}>Leanne Graham</h4></div>
            </div>
            <div className='cardBack'>
                  <h4 >Sincere@april.biz</h4>
                  <h4 >1-770-736-8031</h4>
                  <a href="hildegard.org" target="_blank" >hildegard.org</a>
            </div>
          </div>
        </div>

        <div className='cards' >
       <div className="kpi-card cards1" style={kpiCard}>
            <div className='cardFront'>
            <div className="kpi" style={kpi}><img src="https://avatars.dicebear.com/v2/avataaars/z%7FBusername%7D%7D.svg" /></div>
            <div><h4 className="unit-of-measure" style={unitOf}>Ervin Howell</h4></div>
            </div>
            <div className='cardBack'>
                  <h4 >Sincere@april.biz</h4>
                  <h4 >1-770-736-8031</h4>
                  <a href="hildegard.org" target="_blank" >hildegard.org</a>
            </div>
          </div>
        </div>
        
        <div className='cards' >
       <div className="kpi-card cards1" style={kpiCard}>
            <div className='cardFront'>
            <div className="kpi" style={kpi}><img src="https://avatars.dicebear.com/v2/avataaars/z%7Busername%7D%7D.svg" /></div>
            <div><h4 className="unit-of-measure" style={unitOf}>Clementine Bauch</h4></div>
            </div>
            <div className='cardBack'>
                  <h4 >Sincere@april.biz</h4>
                  <h4 >1-770-736-8031</h4>
                  <a href="hildegard.org" target="_blank" >hildegard.org</a>
            </div>
          </div>
        </div>

        <div className='cards' >
       <div className="kpi-card cards1" style={kpiCard}>
            <div className='cardFront'>
            <div className="kpi" style={kpi}><img src="https://avatars.dicebear.com/v2/avataaars/z%7FsBusername%7D%7E.svg" /></div>
            <div><h4 className="unit-of-measure" style={unitOf}>Clementine Bauch</h4></div>
            </div>
            <div className='cardBack'>
                  <h4 >Sincere@april.biz</h4>
                  <h4 >1-770-736-8031</h4>
                  <a href="hildegard.org" target="_blank" >hildegard.org</a>
            </div>
          </div>
        </div>
        </div>
        
        <div className='card123'>
       <div className='cards' >
       <div className="kpi-card cards1" style={kpiCard}>
            <div className='cardFront'>
            <div className="kpi" style={kpi}><img src="https://avatars.dicebear.com/v2/avataaars/z%7ABusername%7D%7D.svg" /></div>
            <div><h4 className="unit-of-measure" style={unitOf}>Clementine Bauch</h4></div>
            </div>
            <div className='cardBack'>
                  <h4 >Sincere@april.biz</h4>
                  <h4 >1-770-736-8031</h4>
                  <a href="hildegard.org" target="_blank" >hildegard.org</a>
            </div>
          </div>
        </div>

        <div className='cards' >
       <div className="kpi-card cards1" style={kpiCard}>
            <div className='cardFront'>
            <div className="kpi" style={kpi}><img src="https://avatars.dicebear.com/v2/avataaars/%7D%7Busername%7D%7D.svg" /></div>
            <div><h4 className="unit-of-measure" style={unitOf}>Clementine Bauch</h4></div>
            </div>
            <div className='cardBack'>
                  <h4 >Sincere@april.biz</h4>
                  <h4 >1-770-736-8031</h4>
                  <a href="hildegard.org" target="_blank" >hildegard.org</a>
            </div>
          </div>
        </div>

        <div className='cards' >
       <div className="kpi-card cards1" style={kpiCard}>
            <div className='cardFront'>
            <div className="kpi" style={kpi}><img src="https://avatars.dicebear.com/v2/avataaars/%7C%7Busername%7D%7D.svg" /></div>
            <div><h4 className="unit-of-measure" style={unitOf}>Kurtis Weissnat</h4></div>
            </div>
            <div className='cardBack'>
                  <h4 >Sincere@april.biz</h4>
                  <h4 >1-770-736-8031</h4>
                  <a href="hildegard.org" target="_blank" >hildegard.org</a>
            </div>
          </div>
        </div>

        <div className='cards' >
       <div className="kpi-card cards1" style={kpiCard}>
            <div className='cardFront'>
            <div className="kpi" style={kpi}><img src="https://avatars.dicebear.com/v2/avataaars/%7B%7Busername%7D%7D.svg" /></div>
            <div><h4 className="unit-of-measure" style={unitOf}>Nicholas Runolfsdottir V</h4></div>
            </div>
            <div className='cardBack'>
                  <h4 >Sincere@april.biz</h4>
                  <h4 >1-770-736-8031</h4>
                  <a href="hildegard.org" target="_blank" >hildegard.org</a>
            </div>
          </div>
        </div>
        </div>
    </div>
  );
}

export default App;
