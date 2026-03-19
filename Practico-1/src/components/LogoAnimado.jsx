import { motion } from "motion/react";
import reactLogo from "../assets/react.svg";

const LogoAnimado = () => {
    return (
        <div className="flex justify-center items-center p-1">
        <motion.img
            src={reactLogo}
            alt="React Logo"
            className="w-24 h-24"
            // Animación de rotación infinita
            animate={{ rotate: 360 }}
            transition={{ 
            duration: 5,        // 5 segundos por vuelta
            repeat: Infinity,    // Repite infinitamente
            ease: "linear"       // Velocidad constante
            }}
        />
        </div>
    );
};

export default LogoAnimado;