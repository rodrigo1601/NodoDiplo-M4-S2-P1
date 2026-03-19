import { useState } from "react";

function ModalWatchlist({ watchlist, removeFromWatchlist, onClose }) {
    return (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-gray-900 p-6 rounded-lg w-3/4 max-w-md">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-2xl font-bold text-white">Mi Watchlist</h2>
                <button
                    className=" bg-indigo-500 text-white px-4 py-2 rounded"
                    onClick={onClose}
                >
                    Cerrar
                </button>
                </div>
                {watchlist.length > 0 ? (
                    <ul>
                        {watchlist.map((movie) => (
                            <li key={movie.id} className="flex justify-between items-center mb-4">
                            <img src={movie.portada} alt={movie.titulo} className="w-16 h-16 object-cover rounded" />
                                <span>{movie.titulo}</span>
                                <button
                                    className="text-red-500"
                                    onClick={() => removeFromWatchlist(movie.id)}
                                >
                                    Eliminar
                                </button>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p className="text-gray-600">No tienes películas en tu lista aún.</p>
                )}
            </div>
        </div>
    );
}

export default ModalWatchlist;