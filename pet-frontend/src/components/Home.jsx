import '../styles/Home.css';
import backgroundImage from '../assets/petbg.jpeg';

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="home-content">
        <h1>Welcome to Pet Management System</h1>
        <p>Manage your pets with ease and efficiency</p>
      </div>
    </div>
  );
}

export default Home;