import {useState, useEffect} from "react";
import axios from "axios";
import HygieneStacked from "../scores_analysis/learning/HygieneStacked";

const HygieneRunOverall = () => {
  const [hroverall, setHyoverall] = useState();
  const getHrData = async () => {
      const hr = await axios({method:"GET",url:`http://localhost:5000/api/hygienedata`});
      setHyoverall(hr.data);
      console.log(hroverall);
  }
  useEffect(() => {
    getHrData();
  }, [])
  
  return (
      <div style={{width: "50%"}} >
          {hroverall && <HygieneStacked datap={hroverall}/>}
      </div>
      
  )
}
export default HygieneRunOverall;