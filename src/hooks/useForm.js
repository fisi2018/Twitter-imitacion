import { useState,useEffect } from "react";
export const useForm=(initialForm)=>{
    const [form,setForm]=useState(initialForm);
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
    }
    return{
        animation,
        pasive,
        form,
        handleChange,
        handleFocus,
        handleBlur
    }
}