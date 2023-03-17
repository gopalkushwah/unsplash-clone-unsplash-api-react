import './App.css';
import { useState } from 'react';
function App() {
  const [value, setValue] = useState('');
  const [result, setResults] = useState([]);
  // SoHzhQbBxv_zXCZy0oGOnaGqCq-YkXoQbsOuRNXcYFI

  const fetchImage = () => {
    fetch(`https://api.unsplash.com/search/photos/?client_id=SoHzhQbBxv_zXCZy0oGOnaGqCq-YkXoQbsOuRNXcYFI&query=${value}&orientation=squarish&per_page=30`)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setResults(data.results);
      })
  }
  return (
    <div className="App">
      <div className='nav-search'>
        <label>Search</label>
        <input type='text' placeholder='Search any image here...' value={value} onChange={(e) => setValue(e.target.value)} />
        <button onClick={fetchImage}>Search</button>
      </div>
      <div className='gallery'>
        {
          result.map((item) => {
            return <img key={item.id} src={item.urls.regular} />
          })
        }
      </div>
    </div>
  );
}

export default App;
