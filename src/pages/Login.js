import "./Login.css";
import {useForm} from "../hooks/useForm";

const initialForm={
    email:"",
    password:""
}
export const Login=()=>{
    
    const {button, pasive, animation,form,handleFocus,handleChange,handleBlur,loginButton,handleSubmit}=useForm(initialForm);
    
    return(
        <div className="container-login">
            <div className="container-login-main" >
                <div className="container-tittle-login">
                    <svg className="logo-twitter-register login-mode" viewBox="0 0 24 24">
                    <g>
                        <path fill="#d9d9d9" d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z"></path>
                    </g>
                    </svg>
                    <h1>Iniciar sesión en Twitter</h1>
                </div>
                <div className="container-form" >
                    <form onSubmit={handleSubmit} className="form-login"  >
                        <div className="container-input">
                            <div className={`input-design ${animation.name && `selected`} ${pasive.name && `pasive-mode-div`} `}>
                                <p className={`text-animation ${animation.name && `activate-text`} ${pasive.name && `pasive-mode`} ` }> Nombre </p>
                                <input onFocus={handleFocus} value={form.name} onBlur={handleBlur} onChange={handleChange} name="name" className="input" type="text" required/>
                            </div>
                            </div>
                        <div className="container-input">
                            <div className={`input-design ${animation.email && `selected`} ${pasive.email && `pasive-mode-div`} `}>
                                <p className={`text-animation ${animation.email && `activate-text`} ${pasive.email && `pasive-mode`} ` }> Correo o usuario</p>
                                <input onFocus={handleFocus} value={form.email} onBlur={handleBlur} onChange={handleChange} name="email" className="input" type="email" required/>
                            </div>
                            </div>
                            <div className="container-input">
                            <div className={`input-design ${animation.password && `selected`} ${pasive.password && `pasive-mode-div`} `}>
                                <p className={`text-animation ${animation.password && `activate-text` } ${pasive.password && `pasive-mode`} `} >Contraseña</p>
                                <input onFocus={handleFocus} value={form.password} onBlur={handleBlur} onChange={handleChange} name="password" className="input" type="password" required />
                            </div>
                            </div>
                            <div className="container-input">

                        <button onClick={loginButton} ref={button} disabled={(form.email==="" || form.password==="") && "true" } className="button-input-login"  >Iniciar sesión</button> 
                            </div>
                    </form>
                </div>
                <div className="container-text-down">
                    <a className="text-down" href="www.twitter.com">¿Olvidaste tu contraseña</a> · <a className="text-down" href="www.twitter.com">Regístrate en Twitter</a>
                </div>
            </div>
        </div>
    )
}