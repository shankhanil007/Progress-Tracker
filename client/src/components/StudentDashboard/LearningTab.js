import {useState, useEffect} from "react";
import axios from "axios";
import HorizontalBarChart from "../scores_analysis/learning/learning";



const LearningTab = ({studentid}) => {
    const [learnings, setLearnings] = useState();
    const getLearningData = async () => {
        const learning = await axios({method:"GET",url:`http://localhost:5000/api/learningdata/${studentid}`});
        setLearnings(learning.data);
        console.log(learnings)
    }
    useEffect(() => {
        getLearningData();
    }, [])
    
    return (
        <div style={{marginBottom: "100px"}}>
            {learnings && <HorizontalBarChart datap={learnings}/> }
        </div>
        
    )
}

export default LearningTab;