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
          href="https://hw-sigma.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          ✏️Project
        </a>
        <a
          className="link-button"
          href="https://roa-family.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          🍎RoaFamily
        </a>
      </div>
    </div>
  );
}

export default App;
