import Header from './components/Header'
import Footer from './components/footer'
import Home from './pages/Home'
import { useWatchlist } from './hooks/useWatchlist'
import { useState } from 'react'

function App() {
  // Estado que necesitan AMBOS: Header y Home
  const { watchlist, addToWatchlist, removeFromWatchlist } = useWatchlist();
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-gray-950 text-gray-200">
      <Header
        watchlist={watchlist}
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        removeFromWatchlist={removeFromWatchlist}
      />
      <Home
        addToWatchlist={addToWatchlist}
      />
      <Footer />
    </div>
  )
}

export default App