import './App.css';
import ProfileCard from './components/ProfileCard';
import profileImg from './assets/images/mung.png';

function App() {
  return (
    <div className="main-container">
      <h1 className="title">🍒채원이의 개발노트</h1>

      <ProfileCard
        image={profileImg}
        name="채원"
        description="GSITM 부트캠프 진주 10기"
      />

      <div className="link-area">
      <a
          className="link-button"
          href="https://hw1.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          ✏️0422 과제
        </a>
        <a
          className="link-button"
          href="https://hw2-lemon.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          🍎0423 과제01
        </a>
        <a
          className="link-button"
          href="https://hw-bear.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          🧸0423 과제02
        </a>
        <a
          className="link-button"
          href="https://hw-travel.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          🧳0423 과제03
        </a>
        <a
          className="link-button"
          href="https://hw-trend.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          ✨0423 과제04
        </a>
        <a
          className="link-button"
          href="https://hw-mic.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          🎙️0423 과제05
        </a>
      </div>
    </div>
  );
}

export default App;
