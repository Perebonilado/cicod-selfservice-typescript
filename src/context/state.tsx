import { createContext, useContext } from 'react';
import { useState, useEffect } from 'react';




type initialState = {
    id: number, 
    status: string, 
    date: string, 
    time:string, 
    comment:string}[]

const sharedState:initialState = [
    {
        id: 1,
        status: 'Open',
        date: '20-12-18',
        time: '18:3:00',
        comment: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste soluta eius fugiat!'
    },
    
    {
        id: 2,
        status: 'Open',
        date: '20-12-18',
        time: '18:3:00',
        comment: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste soluta eius fugiat!'
    },

    {
        id: 3,
        status: 'Open',
        date: '20-12-18',
        time: '18:3:00',
        comment: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste soluta eius fugiat!'
    }
]

const AppContext = createContext(sharedState);

export function AppWrapper ({children}:any){

  
    return (
        <AppContext.Provider value={sharedState}>
            {children}
        </AppContext.Provider>
    )
}


