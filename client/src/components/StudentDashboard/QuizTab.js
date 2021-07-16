import {useState, useEffect} from "react";
import axios from "axios";
import MultiAxisLine from "../scores_analysis/learning/quizzes";



const QuizTab = ({studentid}) => {
    const [quizzes, setQuizzes] = useState();
    const getQuizData = async () => {
        const quiz = await axios({method:"GET",url:`http://localhost:5000/api/quizdata/${studentid}`});
        setQuizzes(quiz.data);
        console.log(quizzes)
    }
    useEffect(() => {
        getQuizData();
    }, [])
    
    return (
        <div style={{margin: "40px auto 100px"}} >
            {quizzes && <MultiAxisLine datap={quizzes}/>}
        </div>
        
    )
}

export default QuizTab;