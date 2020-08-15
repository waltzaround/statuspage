import React from "react";
import { useHistory } from "react-router-dom";
import AlertFeed from "./AlertFeed";
import "./App.css";
import Header from "./Header";

function AppDetails({ location }) {
  const category = new URLSearchParams(location.search).get("category");
  let history = useHistory();

  const barGraphs = [
    {
      name: "Hospital Beds",
      timestampValue: "24 mins ago",
      year: "2010",
      date: "today",
      description: "",
    },
    {
      name: "Intensive Care Beds",
      timestampValue: "24 mins ago",
      year: "2010",
      date: "today",
      description: "",
    },
    {
      name: "Ventilators",
      timestampValue: "24 mins ago",
      year: "2010",
      date: "today",
      description: "",
    },
    {
      name: "Response time",
      timestampValue: "24 mins ago",
      year: "2010",
      date: "today",
      description: "",
    },
  ]

  return (
    <div className="App">
      {/* Header */}
      <Header
        title="Healthcare Status"
        location="Browns Bay, Auckland, NZ"
        openEditLocation={() => {
          document.activeElement.blur();
        }}
        getAlerts={() => Notification.requestPermission()}
      />

      <div className="app-details__container">
        {/* ILIA TO DO */}

        <h1>
          <span onClick={() => history.push("/")} style={{ cursor: "pointer" }}>
            ←
          </span>{" "}
          Healthcare Status
        </h1>

        {barGraphs.map((barGraph) => (
          <div className="bar-graph__container">
            <div className="bar-graph__header">
              <div className="bar-graph__status-indicator"></div>
              <div className="bar-graph__title">
                <div className="bar-graph__title-text">{barGraph.name}</div>
                <div className="bar-graph__info">?</div>
              </div>
              <div className="bar-graph__timestamp">
                <div className="bar-graph__timestamp-desc">Last updated</div>
                <div className="bar-graph__timestamp-value">{barGraph.timestampValue}</div>
              </div>
            </div>
            <div className="bar-graph__graph">
              <div className="bar-graph__bar bar-graph__bar--green" />
              <div className="bar-graph__bar bar-graph__bar--green" />
              <div className="bar-graph__bar bar-graph__bar--green" />
              <div className="bar-graph__bar bar-graph__bar--green" />
              <div className="bar-graph__bar bar-graph__bar--green" />
              <div className="bar-graph__bar bar-graph__bar--green" />
              <div className="bar-graph__bar bar-graph__bar--green" />
              <div className="bar-graph__bar bar-graph__bar--green" />
              <div className="bar-graph__bar bar-graph__bar--green" />
              <div className="bar-graph__bar bar-graph__bar--green" />
              <div className="bar-graph__bar bar-graph__bar--green" />
              <div className="bar-graph__bar bar-graph__bar--green" />
              <div className="bar-graph__bar bar-graph__bar--green" />
              <div className="bar-graph__bar bar-graph__bar--green" />
              <div className="bar-graph__bar bar-graph__bar--green" />
              <div className="bar-graph__bar bar-graph__bar--green" />
              <div className="bar-graph__bar bar-graph__bar--green" />
              <div className="bar-graph__bar bar-graph__bar--green" />
              <div className="bar-graph__bar bar-graph__bar--green" />
              <div className="bar-graph__bar bar-graph__bar--green" />
              <div className="bar-graph__bar bar-graph__bar--green" />
              <div className="bar-graph__bar bar-graph__bar--green" />
              <div className="bar-graph__bar bar-graph__bar--green" />
              <div className="bar-graph__bar bar-graph__bar--green" />
              <div className="bar-graph__bar bar-graph__bar--green" />
              <div className="bar-graph__bar bar-graph__bar--green" />
              <div className="bar-graph__bar bar-graph__bar--green" />
              <div className="bar-graph__bar bar-graph__bar--green" />
              <div className="bar-graph__bar bar-graph__bar--green" />
              <div className="bar-graph__bar bar-graph__bar--green" />
              <div className="bar-graph__bar bar-graph__bar--green" />
              <div className="bar-graph__bar bar-graph__bar--green" />
              <div className="bar-graph__bar bar-graph__bar--green" />
              <div className="bar-graph__bar bar-graph__bar--green" />
              <div className="bar-graph__bar bar-graph__bar--green" />
              <div className="bar-graph__bar bar-graph__bar--green" />
              <div className="bar-graph__bar bar-graph__bar--green" />
              <div className="bar-graph__bar bar-graph__bar--green" />
              <div className="bar-graph__bar bar-graph__bar--green" />
              <div className="bar-graph__bar bar-graph__bar--green" />
            </div>
            <div className="bar-graph__footer">
              <div className="bar-graph__year">{barGraph.year}</div>
              <div className="bar-graph__date">{barGraph.date}</div>
            </div>
          </div>
        ))}

        {/* OLAF TO DO */}
        <h1>Latest alerts</h1>
        <div className="last-alerts__container"></div>
        User wants to view details about {category}
        <AlertFeed />
      </div>
    </div>
  );
}

export default AppDetails;
