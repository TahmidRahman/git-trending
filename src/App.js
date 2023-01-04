import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Filter, Header, Banner, List } from './components';
import { processDateRange } from './utils';

function App() {
  const [filterState, setFilterState] = useState({
    language: 'java',
    created: processDateRange('today')
  });

  const [results, setResults] = useState([]);

  useEffect(() => {
    async function fetchRepositories() {
      const res = await axios.get(
        process.env.REACT_APP_GITHUB_SEARCH_API_ENDPOINT || '',
        {
          params: {
            sort: 'stars',
            order: 'desc',
            q: `language:${filterState.language} created:>${filterState.created}`,
            per_page: 10
          }
        }
      );

      if (res && res.data && res.data.items && Array.isArray(res.data.items)) {
        setResults(res.data.items);
      }
    }

    fetchRepositories();
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
                ...updateKeyValuePair
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
