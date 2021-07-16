import GameTab from "./GameTab"
import LearningTab from "./LearningTab"
import QuizTab from "./QuizTab"

const StudentData = ({studentID}) => {
  return (
    //     <div classNameName="card" style={{ width: "100%" }}>
    //     <div className="card-body">
    //       <h5 className="card-title">Data</h5>
    //     </div>
    //   </div>
    <div>
      <nav>
        <div class="nav nav-tabs nav-fill" id="nav-tab" role="tablist">
          <button
            class="nav-link active"
            id="nav-resource-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-resource"
            type="button"
            role="tab"
            aria-controls="nav-resource"
            aria-selected="true"
          >
            Resources
          </button>
          <button
            class="nav-link"
            id="nav-quiz-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-quiz"
            type="button"
            role="tab"
            aria-controls="nav-quiz"
            aria-selected="false"
          >
            Quizzes
          </button>
          <button
            class="nav-link"
            id="nav-game-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-game"
            type="button"
            role="tab"
            aria-controls="nav-game"
            aria-selected="false"
          >
            Games
          </button>
        </div>
      </nav>
      <div class="tab-content" id="nav-tabContent">
        <div
          class="tab-pane fade show active"
          id="nav-resource"
          role="tabpanel"
          aria-labelledby="nav-resource-tab"
        >
          <LearningTab studentid={studentID}/>
        </div>
        <div
          class="tab-pane fade"
          id="nav-quiz"
          role="tabpanel"
          aria-labelledby="nav-quiz-tab"
        >
          <QuizTab studentid={studentID}/>
        </div>
        <div
          class="tab-pane fade"
          id="nav-game"
          role="tabpanel"
          aria-labelledby="nav-game-tab"
        >
          <GameTab studentID={studentID}/>
        </div>
      </div>
    </div>
  );
};

export default StudentData;
