import {creat} from "zustand";
// npm i zustand
const nameStore = creat(
    (set )=>({
        name :'Zafar',
        changeName: (name) => set({name})
    })   
)