import QrCode from './images/image-qr-code.png'
import './App.css';

function App() {
  return (
    <>
      <div className='container'>
        <img src={QrCode} alt='QR Code' />
        <p className='title'>Improve your front-end skills by building projects</p>
        <p className='instructions'>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
      </div >
      <div class="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
        Coded by <a href="#">Pixie Moortgat</a>.
      </div>
    </>
  );
}

export default App;
