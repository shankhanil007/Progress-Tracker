import {useState, useEffect} from "react";
import axios from "axios";
import StairSlideStacked from "../scores_analysis/learning/StaieSlideStacked";

const StairSlideOverall = () => {
  const [ssoverall, setSsoverall] = useState();
  const getSsData = async () => {
      const ss = await axios({method:"GET",url:`http://localhost:5000/api/Stairslidedata`});
      setSsoverall(ss.data);
      console.log(ssoverall);
  }
  useEffect(() => {
    getSsData();
  }, [])
  
  return (
      <div style={{width: "50%"}} >
          {ssoverall && <StairSlideStacked datap={ssoverall}/>}
      </div>
      
  )
}
export default StairSlideOverall;