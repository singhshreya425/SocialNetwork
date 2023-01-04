import logo from './logo.svg';
import './App.css'


function App() {
  return (
    <div>
      <nav>
      <a href="https://mail.google.com/mail/u/0/#inbox" className="navtext">Gmail</a>
      <a href="https://linkedin.com/in/ravi-singh-763378182" className="navtext">Images</a>
      
      <img src="https://www.pngarts.com/files/11/Avatar-PNG-Download-Image.png" alt="React Image" className="avatar" />
    </nav>

    <div className="main">
        <div className="">
          <img src="https://p.kindpng.com/picc/s/721-7214985_google-logo-png-free-image-google-png-transparent.png" alt="" className="google"/>
        </div>
        <div className="searchb">
          <span className="material-icons searchicon"></span>
          <input type="text" value="" placeholder="Search Google or type a URL" required/>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Google_mic.svg/1200px-Google_mic.svg.png" alt="" className="mic"/>
        </div>
        <div className="sbutton">
          <input type="button" name="https://reactjs.org/" value="Google Search"/>
          <input type="button" name="https://www.google.com/doodles" value="I'm Feeling Lucky"/>
        </div>
    </div>
    </div>
  );
}



export default App;
