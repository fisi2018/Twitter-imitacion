import {Footer} from "../components/Footer.js";
import {Link} from "react-router-dom";
import "./Register.css";
export const Register=()=>{
    return(
        <div>
            <div className="container-no-footer">
<div className="aside-svg">
            <svg className="logo-big" viewBox="0 0 24 24" >
        <g >
        <path  fill="#FFFFFF" d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z">
        </path>
        </g>
      </svg>
</div>
      <div className="container-register">
         <div className="subcontainer-regiser" >

        <svg className="logo-twitter-register" viewBox="0 0 24 24">
            <g>
                <path fill="#d9d9d9" d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z"></path>
            </g>
        </svg>
        <div className="tittle-div">
            <span className="tittle-span">Lo que está pasando ahora</span>
        </div>
        <div className="subtittle-div" >
            <span className="subtittle-span">Únete a Twitter hoy mismo.</span>
        </div>
        <div>
            <div className="container-button">
             <Link to="/login" className="button-register">
                 <svg className="logo-google" viewBox="0 0 24 24">
                     <g>
                         <path fill="#EA4335" d="M18.977 4.322L16 7.3c-1.023-.838-2.326-1.35-3.768-1.35-2.69 0-4.95 1.73-5.74 4.152l-3.44-2.635c1.656-3.387 5.134-5.705 9.18-5.705 2.605 0 4.93.977 6.745 2.56z" >
                         </path>
                         <path fill="#FBBC05" d="M6.186 12c0 .66.102 1.293.307 1.89L3.05 16.533C2.38 15.17 2 13.63 2 12s.38-3.173 1.05-4.533l3.443 2.635c-.204.595-.307 1.238-.307 1.898z"></path>
                         <path fill="#34A853" d="M18.893 19.688c-1.786 1.667-4.168 2.55-6.66 2.55-4.048 0-7.526-2.317-9.18-5.705l3.44-2.635c.79 2.42 3.05 4.152 5.74 4.152 1.32 0 2.474-.308 3.395-.895l3.265 2.533z"></path>
                         <path fill="#4285F4" d="M22 12c0 3.34-1.22 5.948-3.107 7.688l-3.265-2.53c1.07-.67 1.814-1.713 2.093-3.063h-5.488V10.14h9.535c.14.603.233 1.255.233 1.86z"></path>
                     </g>
                 </svg>
                 <span className="text-span-register">Registrarse con Google</span>
             </Link>
            </div>
            <div className="container-button">
                <Link to="/login" className="button-register">
                 <svg className="logo-google" viewBox="0 0 24 24">
                     <g>
                         <path d="M16.365 1.43c0 1.14-.493 2.27-1.177 3.08-.744.9-1.99 1.57-2.987 1.57-.12 0-.23-.02-.3-.03-.01-.06-.04-.22-.04-.39 0-1.15.572-2.27 1.206-2.98.804-.94 2.142-1.64 3.248-1.68.03.13.05.28.05.43zm4.565 15.71c-.03.07-.463 1.58-1.518 3.12-.945 1.34-1.94 2.71-3.43 2.71-1.517 0-1.9-.88-3.63-.88-1.698 0-2.302.91-3.67.91-1.377 0-2.332-1.26-3.428-2.8-1.287-1.82-2.323-4.63-2.323-7.28 0-4.28 2.797-6.55 5.552-6.55 1.448 0 2.675.95 3.6.95.865 0 2.222-1.01 3.902-1.01.613 0 2.886.06 4.374 2.19-.13.09-2.383 1.37-2.383 4.19 0 3.26 2.854 4.42 2.955 4.45z">
                         </path>
                         </g>
                 </svg>
                 <span className="text-span-register">Registrarse con Apple</span>
             </Link>
            </div>
            <div className="container-button">
                <Link to="/login" className="button-register">
                 
                 <span className="text-span-register">Regístrate con el número de teléfono</span>
             </Link>
            </div>
            <div className="text-terminos-div">Al registrarte aceptas los <a href="www.twitter.com">Términos de servicio</a> y la 
            <a href="www.twitter.com">Política de privacidad</a>, incluida la política de <a href="www.twitter.com">Uso de Cookies</a> </div>
            <div className="text-login-div">
                ¿Ya tienes una cuenta? <Link to="/login">Inicia sesión</Link>
            </div>
        </div>
         </div>
      </div>
            </div>
            <Footer></Footer>
        </div>
    )
}
