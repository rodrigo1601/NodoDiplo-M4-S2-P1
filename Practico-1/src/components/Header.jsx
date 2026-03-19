import LogoAnimado from "./LogoAnimado";
import ModalWatchlist from "./WatchlistModal";

// Recibe todo por props desde App, ya no maneja su propio estado de watchlist
function Header({ watchlist, isModalOpen, setIsModalOpen, removeFromWatchlist }) {
    return (
        <header className="bg-gray-900 border-b border-gray-700 shadow-lg">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
            <h1 className="text-2xl font-bold text-indigo-400 flex flex-row items-center gap-2">
            <LogoAnimado /> Sprint 1 React con Tailwind CSS
            </h1>
            <nav className="bg-gray-800">
            <div className="max-w-6xl mx-auto px-6 py-2 flex space-x-4">
                <button
                onClick={() => setIsModalOpen(true)}
                className="hover:cursor-pointer relative"
                >
                Mi Watchlist
                {watchlist.length > 0 && (
                    <span className="ml-2 bg-indigo-500 text-white text-xs rounded-full px-2 py-0.5">
                    {watchlist.length}
                    </span>
                )}
                </button>
            </div>
            </nav>
        </div>

        {isModalOpen && (
            <ModalWatchlist
            watchlist={watchlist}
            removeFromWatchlist={removeFromWatchlist}
            onClose={() => setIsModalOpen(false)}
            />
        )}
        </header>
    );
}

export default Header;