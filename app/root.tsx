// import {
//   Links,
//   Meta,
//   Outlet,
//   Scripts,
//   ScrollRestoration,
//   useLoaderData,
// } from "@remix-run/react";
// import type { LinksFunction, LoaderFunction } from "@remix-run/node";

// import "./tailwind.css";
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
// // Removed incorrect import of 'request'
// import { verifyToken } from "./services/authService";


// export const loader: LoaderFunction = async ({ request }) => {
//   const isAuthenticated = await verifyToken(request);
//   return {
//     isAuthenticated,
//   };
// };

// export const links: LinksFunction = () => [
//   { rel: "preconnect", href: "https://fonts.googleapis.com" },
//   {
//     rel: "preconnect",
//     href: "https://fonts.gstatic.com",
//     crossOrigin: "anonymous",
//   },
//   {
//     rel: "stylesheet",
//     href: "https://fonts.googleapis.com/css2?family=Inter:wght@100..900&family=Poppins:wght@100..900&family=Raleway:wght@100..900&family=Nunito:wght@100..900&family=Montserrat:wght@100..900&family=Reddit+Sans:wght@100..900&display=swap",
//   },
// ];

// export function Layout({ children }: { children: React.ReactNode }) {
//   const { isAuthenticated } = useLoaderData<{ isAuthenticated: boolean }>();
//   return (
//     <html lang="en">
//       <head>
//         <meta charSet="utf-8" />
//         <meta name="viewport" content="width=device-width, initial-scale=1" />
//         <Meta />
//         <Links />
//       </head>
//       <body>
//         <Navbar isAuthenticated={isAuthenticated} />
//         {children}
//         <Footer />
//         <ScrollRestoration />
//         <Scripts />
//       </body>
//     </html>
//   );
// }

// export default function App() {
//   return <Outlet />;
// }

import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import type { LinksFunction } from "@remix-run/node";

import "./tailwind.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FloatingButtons from "./components/FloatingButtons";


/**
 * Tipado del loader
 */
// Interfaz para los datos del loader - mantenida para compatibilidad
interface LoaderData {
  isAuthenticated: boolean;
}

// Loader removido para compatibilidad con SPA mode
// La autenticación ahora se maneja del lado del cliente en cada ruta

/**
 * Links para fuentes y estilos
 */
export const links: LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:wght@100..900&family=Poppins:wght@100..900&family=Raleway:wght@100..900&family=Nunito:wght@100..900&family=Montserrat:wght@100..900&family=Reddit+Sans:wght@100..900&display=swap",
  },
];

/**
 * Componente Layout que envuelve la aplicación
 */
export function Layout({ children }: { children: React.ReactNode }) {
  // En SPA mode, no usamos datos del loader
  // La autenticación se maneja del lado del cliente en cada ruta individual

  return (
    <html lang="es">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Navbar />
        {children}
        <FloatingButtons /> {/* Botón de Wompi y Whatsapp*/}
        <Footer />
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

/**
 * Componente principal de la aplicación
 */
export default function App() {
  return <Outlet />;
}
