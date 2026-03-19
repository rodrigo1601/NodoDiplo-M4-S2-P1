import { useState } from "react"
import { motion } from "framer-motion"
import Like from "../assets/like.svg"

function PeliculaCard({pelicula, onAdd}){

    const [mostrar, setMostrar] = useState(false)
    const [likes, setLikes] = useState(false)

    return(

        <motion.div
        initial={{opacity:0, y:40}}
        animate={{opacity:1, y:0}}
        transition={{duration:0.6}}
        className="bg-gray-900 p-6 rounded-xl shadow-lg"
        >

            <h3 className="text-xl font-bold flex flex-row justify-center mb-4">
                {pelicula.titulo}
            </h3>

            <img className="h-[600px] object-cover" src={pelicula.portada} alt={pelicula.titulo} />

            <p className="text-gray-400 mt-3">
                {pelicula.genero}
            </p>

            <div className="mt-4 space-x-2 flex flex-row">

                <button
                onClick={()=> setMostrar(!mostrar)}
                className="bg-blue-800 px-3 py-1 rounded hover:cursor-pointer">

                    {mostrar ? "Ocultar sinopsis" : "Ver sinopsis"}

                </button>

                {likes ? (
                    <button
                        onClick={() => setLikes(false)}
                        className="bg-red-600 px-3 py-1 rounded flex flex-row items-center hover:cursor-pointer transition-colors"
                    >
                        <img src={Like} alt="Like" className="w-5 h-5 mr-2" /> Quitar like
                    </button>
                ) : (
                    <button
                        onClick={() => setLikes(true)}
                        className="bg-green-600 px-3 py-1 rounded flex flex-row items-center hover:cursor-pointer transition-colors"
                    >
                        <img src={Like} alt="Like" className="w-5 h-5 mr-2" /> Me gusta
                    </button>
                )}
                

                <button
                onClick={() => onAdd(pelicula)}
                className="bg-indigo-600 px-3 py-1 rounded hover:cursor-pointer"
                >
                Añadir a Watchlist
                </button>

            </div>

            {mostrar && (
                
                <motion.div
                initial={{opacity:0, y:40}}
                animate={{opacity:1, y:0}}
                transition={{duration:0.6}}
                className="bg-gray-900 p-1 rounded-xl shadow-lg">

                    <p className="mt-4 text-gray-300">
                        {pelicula.sinopsis}
                    </p>
                </motion.div>

            )}

        </motion.div>
    )
}

export default PeliculaCard