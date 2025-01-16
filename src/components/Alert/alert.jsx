import React from 'react';
import { Toaster, toast } from "react-hot-toast"


<Toaster
  position="top-center"
  reverseOrder={false}
/>

export const alertSuccess = (text) => {
    
    toast.success(text, {
        style: {
           backgroundColor: "#1F1F1F",
           color: "#FFFFFF",
        },
        
    });

}

export const alertError = (text) => {

    toast.error(text, {
        style: {
           backgroundColor: "#1F1F1F",
           color: "#FFFFFF",
        },
        
    });
}