import StudentList from "../StudentList";
import OverallGameNavbar from "./OverallGameNavbar";

const FacNavbar = ({ data, setStudent }) => {
  return (
    <>
      <nav>
        <div className="nav nav-tabs nav-fill" id="nav-tab" role="tablist">
          <button
            className="nav-link active"
            id="nav-studentlist-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-studentlist"
            type="button"
            role="tab"
            aria-controls="nav-studentlist"
            aria-selected="true"
          >
            Student List
          </button>
          <button
            className="nav-link"
            id="nav-overallgame-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-overallgame"
            type="button"
            role="tab"
            aria-controls="nav-overallgame"
            aria-selected="false"
          >
            Overall Details
          </button>
        </div>
      </nav>
      <div className="tab-content" id="nav-tabContent">
        <div
          className="tab-pane fade show active"
          id="nav-studentlist"
          role="tabpanel"
          aria-labelledby="nav-studentlist-tab"
        >
          {/* {JSON.stringify(games.hygeinerun[0].attempts)} */}
          <StudentList data={data} setStudent={setStudent} />
        </div>
        <div
          className="tab-pane fade"
          id="nav-overallgame"
          role="tabpanel"
          aria-labelledby="nav-overallgame-tab"
        >
          <OverallGameNavbar />
        </div>
      </div>
    </>
  );
};

export default FacNavbar;
