import './App.css';

function App() {
  const items = [

    {
      id: 1,
      image: '/tanktop.png', // make sure this image exists in /public
      tags: ['shirt', 'tank top'],
      selected: true,
    },
     
    {
      id: 4,
      image: '/blazer.png', // make sure this image exists in /public
      tags: ['top', 'jacket'],
      selected: true,
    },
    {
      id: 2,
      image: '/jeans.png', // make sure this image exists in /public
      tags: ['pants', 'denim'],
      selected: true,
    },
    
    {
      id: 3,
      image: '/cardgian.png', // make sure this image exists in /public
      tags: ['top', 'sweater'],
      selected: true,
    }
   
    // 7 empty placeholders
   // ...Array.from({ length: 4 }, (_, i) => ({ id: i + 2 })),
  ];

  return (
    <div className="App">
      <header className="App-header">
        <img src="/stamp1.png" className="circle-image" alt="hi" />

        <h1>Solivana</h1>
        <p>Get started with your ideal wardrobe today.</p>

        {/* 🔳 Clothing Grid Section */}
        <div className="grid-container">
          {items.map((item) => (
            <div
              key={item.id}
              className={`grid-item ${item.selected ? 'selected' : 'placeholder'}`}
            >
              {item.image && (
                <>
                  <img src={item.image} alt="Clothing item" className="item-image" />
                  <div className="tags">
                    {item.tags.map((tag, idx) => (
                      <span key={idx} className="tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                </>
              )}
            </div>
          ))}
        </div>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
