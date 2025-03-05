import {use} from 'react';
import {Connect4Context} from '../context/Connect4Context'

export const useConnect4 = () =>{
 const context = use(Connect4Context)
 if(!context){
  throw new Error('useConnect4 should be use inside a provider')
 }
 return context
}