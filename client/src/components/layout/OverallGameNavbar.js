import HygieneRunOverall from "../StudentDashboard/HygieneRunOverall";
import GroupedBar from "../scores_analysis/learning/RpGroupbar";
import StairSlideOverall from "../StudentDashboard/StairSlideOverall";
import WordCloudFAQ from "../scores_analysis/learning/WordCloudFAQ";

const OverallGameNavbar = () => {
  return (
    <>
      <nav>
        <div className="nav nav-tabs nav-fill" id="nav-tab" role="tablist">
          <button
            className="nav-link active"
            id="nav-hygienerun-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-hygienerun"
            type="button"
            role="tab"
            aria-controls="nav-hygienerun"
            aria-selected="true"
          >
            Hygiene Run
          </button>
          <button
            className="nav-link"
            id="nav-stairandslide-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-stairandslide"
            type="button"
            role="tab"
            aria-controls="nav-stairandslide"
            aria-selected="false"
          >
            Stairs and Slides
          </button>
          <button
            className="nav-link"
            id="nav-reppuzzle-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-reppuzzle"
            type="button"
            role="tab"
            aria-controls="nav-reppuzzle"
            aria-selected="false"
          >
            Reproductive Puzzle
          </button>
          <button
            className="nav-link"
            id="nav-wordcloud-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-wordcloud"
            type="button"
            role="tab"
            aria-controls="nav-wordcloud"
            aria-selected="false"
          >
            FAQ WordCloud
          </button>
        </div>
      </nav>
      <div className="tab-content" id="nav-tabContent">
        <div
          className="tab-pane fade show active"
          id="nav-hygienerun"
          role="tabpanel"
          aria-labelledby="nav-hygienerun-tab"
        >
          {/* {JSON.stringify(games.hygeinerun[0].attempts)} */}
          <div style={{ width: "100%", height: "500px" }}>
            <HygieneRunOverall />
          </div>
        </div>
        <div
          className="tab-pane fade"
          id="nav-stairandslide"
          role="tabpanel"
          aria-labelledby="nav-stairandslide-tab"
        >
          <StairSlideOverall/>
        </div>
        <div
          className="tab-pane fade"
          id="nav-reppuzzle"
          role="tabpanel"
          aria-labelledby="nav-reppuzzle-tab"
        >
          <div style={{ width: "800px", height: "2000px", float: "left" }}>
            <GroupedBar />
          </div>
        </div>
        <div
          className="tab-pane fade"
          id="nav-wordcloud"
          role="tabpanel"
          aria-labelledby="nav-wordcloud-tab"
        >
        <WordCloudFAQ/>
        </div>
      </div>
    </>
  );
};

export default OverallGameNavbar;
