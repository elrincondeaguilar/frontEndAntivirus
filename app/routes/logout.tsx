import { useEffect } from "react";
import { useNavigate } from "@remix-run/react";

// Función para eliminar cookies del lado del cliente
const clearAuthCookies = () => {
    if (typeof document === 'undefined') return;

    // Eliminar token cookie
    document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    // Si tienes más cookies de autenticación, añádelas aquí
};

export default function Logout() {
    const navigate = useNavigate();

    useEffect(() => {
        // Limpiar cookies de autenticación
        clearAuthCookies();

        // Redirigir al login
        navigate("/login", { replace: true });
    }, [navigate]);

    return (
        <div>
            <p>Cerrando sesión...</p>
        </div>
    );
}
