import { useState,useEffect,useRef } from "react";
export const useForm=(initialForm)=>{
    const [form,setForm]=useState(initialForm);
    const button=useRef();
    const [pasive,setPasive]=useState({
        email:false,
        password:false
    });
    const [animation,setAnimation]=useState({
        email:false,
        password:false
    });
   /* useEffect(()=>{
        if(animation.email || animation.password){

        }
    },[animation])*/
    const handleBlur=(e)=>{
        handleChange(e);
        const {name,value}=e.target
        if(value!==""){

            setAnimation({
                ...animation,
                [name]:true
            })
            setPasive({
                ...pasive,
                [name]:true
            })
        }
        else{
            setAnimation({
                ...animation,
                [name]:false
            })
            setPasive({
                ...pasive,
                [name]:false
            })
        }
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
    }
    const loginButton=()=>{
        
        localStorage.setItem("logged",true);
        localStorage.setItem("email",form.email);
        localStorage.setItem("password",form.password);
        window.location.replace("/home");
    }
    const handleFocus=(e)=>{
        const {name}=e.target;
        setAnimation({
            ...animation,
            [name]:true
        })
    }
    const handleChange=(e)=>{
        const {name,value}=e.target;
        setForm({
            ...form,
            [name]:value
        })
        if(form.email!=="" && form.password!==""){
            button.current.disabled=false;
        }
        else{
            button.current.disabled=true;
        }
    }
    return{
        button,
        animation,
        pasive,
        form,
        handleChange,
        handleFocus,
        handleBlur,
        loginButton,
        handleSubmit
    }
}