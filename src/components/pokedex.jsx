import { QueryClient, QueryClientProvider, useQuery } from '@tanstack/react-query'

import { RecoilRoot, useRecoilState } from "recoil";
import Cara from "../containers/carac"
import { PokeDex } from '../recoil/atoms/PokeDex';
import { recoilPersist } from 'recoil-persist'
import Main from '../containers/main'
const queryClient = new QueryClient()


export default function Poki() {
 

    const [pokedexList, setPokdex] = useRecoilState(PokeDex);
  console.log(pokedexList)


    if (pokedexList.length==0) {

        return (
    <div className='BackgroundColorPokeDesk'>
       
     
      <br></br>

        <div className="container">
        <img width={480} className='Imageee' src='./assets/images/pic2.png'></img>
            <h1>choose your favorite pokemon or bulbasaur will cry</h1>
        </div>
        
    </div>
   
  )
    }
  return (
    <div className='BackgroundColorPokeDesk'>
       
     
      <br></br>

        <div className="container">
        <img width={480} className='Imageee' src='./assets/images/pic2.png'></img>
            <div className="row">
               
            {
                            pokedexList.map((elem) => (
                                <div className="col-sm">
                                    <div className="card" style={{ width: '18rem' }}>

                                        <div className="card-body">
                                            <h5 className="card-title">{elem}</h5>
                                            <br></br>
                                            {

                                            }
                                            <a href={"/caracteristiques/" + elem} className="btn btn-primary testbtn">More Info </a>

                                        </div>
                                    </div>
                                    <br></br>


                                </div>
                            ))

                        }

                
                   
               
               

            </div>
        </div>
        
    </div>
   
  )
}
