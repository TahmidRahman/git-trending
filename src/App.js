import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { Filter, Header, Banner, List } from "./components";
import { processDateRange } from "./utils";

function App() {
  const [filterState, setFilterState] = useState({
    language: "java",
    created: processDateRange("this_week"),
  });

  const [results, setResults] = useState([]);

  useEffect(() => {
    async function repoSearch(query) {
      const res = await axios.get(
        process.env.REACT_APP_GITHUB_SEARCH_API_ENDPOINT || "",
        {
          params: {
            q: query,
            per_page: 10,
          },
        }
      );

      if (res && res.data && res.data.items && Array.isArray(res.data.items)) {
        setResults(res.data.items);
      }
    }

    function buildQuery(filterState) {
      let string = "";

      Object.keys(filterState).forEach((key) => {
        if (filterState[key]) {
          if (string.length > 0) {
            string += " ";
          }

          if (key === "created") {
            string += `${key}:>${filterState[key]}`;
          } else {
            string += `${key}:${filterState[key]}`;
          }
        }
      });
      return string;
    }

    const query = buildQuery(filterState);

    repoSearch(query);
  }, [filterState]);

  return (
    <div>
      <Header />
      <Banner />
      <div className="Content">
        <div className="List-container">
          <Filter
            state={filterState}
            onChange={(updateKeyValuePair) =>
              setFilterState({
                ...filterState,
                ...updateKeyValuePair,
              })
            }
          />
          <List items={results} />
        </div>
      </div>
    </div>
  );
}

export default App;
