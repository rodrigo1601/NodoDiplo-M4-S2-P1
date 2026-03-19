import Peliculas from "../components/Peliculas";

function Home({ addToWatchlist }) {
  return (
    <div>
      <Peliculas addToWatchlist={addToWatchlist} />
    </div>
  );
}

export default Home;