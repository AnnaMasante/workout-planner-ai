import React from "react";

// Définition des types pour les props du bouton
interface ButtonProps {
  type?: "button" | "submit" | "reset"; // Type du bouton (par défaut, "button")
  disabled?: boolean; // Détermine si le bouton est désactivé
  className?: string; // Classes CSS supplémentaires pour personnaliser le style
  children: React.ReactNode; // Contenu à afficher à l'intérieur du bouton
}

const Button: React.FC<ButtonProps> = ({
  type = "button",
  disabled = false,
  className = "",
  children,
}) => {
  return (
    <button
      type={type}
      disabled={disabled}
      className={`bg-blue-500 text-white font-semibold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 disabled:opacity-50 ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
