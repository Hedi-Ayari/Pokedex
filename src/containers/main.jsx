import { QueryClient, QueryClientProvider, useQueryClient, useQuery } from '@tanstack/react-query'
import React, { useState, useEffect } from 'react';
import { FaEmpire } from 'react-icons/fa';
import { RecoilRoot, atom, selector, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import Pokedexx from '../components/pokedex';
import Types from '../components/Types';
import { PokList } from '../recoil/atoms/Pok';
import { PokeDex } from '../recoil/atoms/PokeDex';
import axios from "axios";


const queryClient = new QueryClient()

export default function Main() {
    return (
        <QueryClientProvider client={queryClient}>
            <Example />
        </QueryClientProvider>
    )
}

function usePosts() {
    return useQuery(["posts"], async () => {
        const { data } = await axios.get(
            "https://pokeapi.co/api/v2/pokemon/"
        );

        return data;
    });
}
function Example() {

    const [pokedexList, setPokdex] = useRecoilState(PokeDex);
    const [Pok, setPok] = useRecoilState(PokList);


    const queryClient = useQueryClient();
    const { status, data, error, isFetching } = usePosts();
    function add(Bname) {
        console.log(pokedexList.length)

        setPokdex([...pokedexList, Bname]);
        console.log(pokedexList);

    }
    const [v, SetV] = useState(false);


    useEffect(() => {
        setTimeout(() => {
            SetV(true)
        }, 1000);
    }, []

    )

    if (v) {
     
        setPok(data.results)
        return (
            <div>

<Pokedexx></Pokedexx>
                
                        
                <div className="container mt-5 mb-5">
                    <div className="row">


               {
                   Pok.map((elem) => (
                    <div className="col-md-4">
                    <div className="cardd p-3 mb-2 colorcard">
                        <div className="d-flex justify-content-between ">
                            <div className="d-flex flex-row align-items-center">
                                <img src="./assets/images/img.png" className="bx bxl-mailchimp sizeimg" />
                               
                            </div>
                        </div>
                        <div className="mt-5">
                            <h3 className="heading colorText">{elem.name}<br /></h3>
                            <div className="mt-4">
                               
                                <div className="mt-3"> <a href={"/caracteristiques/"+elem.name} className="btn btn-warning ">More Info </a>
                                <button className="btn btn-success" id={elem.name} onClick={(e)=>{add(e.target.id)}}>Add to Pokédex</button></div>
                            </div>
                        </div>
                    </div>
                </div>

                   ))
                    }
                </div>
                </div>
                <Types></Types>
            </div>
           

        )
    } else {
        return (
            <div className='colorr'>

                <img className='align-middle ml-1' src='./assets/images/logo.png'></img>



            </div>
        )
    }


}
