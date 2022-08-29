import { QueryClient, QueryClientProvider, useQuery } from '@tanstack/react-query'
import Navbar from '../containers/navbar'
import { RecoilRoot, useRecoilState } from "recoil";
import Cara from "../containers/carac"
import Main from '../containers/main'
const queryClient = new QueryClient()


export default function Home() {
 


  



  return (
    <div className='BackgroundColorCarac22'  >
    
     <h1 className='typeCarCol'> <span><img src='./assets/images/back.png'></img></span>Pokemon type</h1>
    

     
     
    </div>
  )
}
