import './App.css';
import img from './b.jpg';
import f1 from './video.mp4';

  function App() {
    return (
      <div className="App">
        <div style={{border: 'solid 1px black', maxWidth: '100vw'}}>
          <h1 className="title red">Your name here</h1>
          <br />
          <img src={img} alt="/imageInSrc.jpg" />
          <br />
          <img src="/a.jpg" />
        </div>
        <video width={320} height={240} controls>
          <source src={f1} type="video/mp4" />
        </video>
      </div>
    );
  }


export default App;
