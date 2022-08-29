import { QueryClient, QueryClientProvider, useQuery } from '@tanstack/react-query'

import { RecoilRoot, useRecoilState } from "recoil";

import Main from '../containers/main'
const queryClient = new QueryClient()

export default function Home() {
 


  



  return (
    <div className='BackColor'>
     
    

     
      <Main></Main>
      
    </div>
  )
}
