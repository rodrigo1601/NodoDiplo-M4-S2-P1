import { useState, useEffect } from "react";

export function useWatchlist() {
  // Inicializar leyendo desde localStorage
    const [watchlist, setWatchlist] = useState(() => {
        const guardada = localStorage.getItem("watchlist");
        return guardada ? JSON.parse(guardada) : [];
    });

  // Cuando cambia watchlist, la guarda en localStorage
    useEffect(() => {
        localStorage.setItem("watchlist", JSON.stringify(watchlist));
    }, [watchlist]);

    const addToWatchlist = (pelicula) => {
        
        if (!watchlist.find((p) => p.id === pelicula.id)) {
        setWatchlist([...watchlist, pelicula]);
        }
    };

    const removeFromWatchlist = (id) => {
        setWatchlist(watchlist.filter((p) => p.id !== id));
    };  

    return { watchlist, addToWatchlist, removeFromWatchlist };
}