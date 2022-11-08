import { LoremIpsum } from 'react-lorem-ipsum';

function Home() {
  return (
    <div className="homepage">
      <h2 className="welcome-message">Welcome to our page! </h2>
      <LoremIpsum p={2} />
    </div>
  );
}

export default Home;
