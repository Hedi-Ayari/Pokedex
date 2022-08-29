import { QueryClient,useQueryClient, QueryClientProvider, useQuery } from '@tanstack/react-query'
import React, { useState, useEffect } from 'react';
import { Routes, Route, useParams } from 'react-router-dom';
import Accordion from 'react-bootstrap/Accordion';
import {IdCarac}  from '../recoil/atoms/idcaract';
import { RecoilRoot, atom, selector, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';

import { Carac } from '../recoil/atoms/caract';
import axios from "axios";

import Navbar from './navbar'
const queryClient = new QueryClient()

export default function Main() {
  return (
    <QueryClientProvider client={queryClient}>
      <Example />
    </QueryClientProvider>
  )
}

function usePosts() {
  let { id } = useParams();
  return useQuery(["posts"], async () => {
    
    const  data  = axios.get(
      "https://pokeapi.co/api/v2/pokemon/" + id
    ).then(response => response.data);
    return data;
  });
}
function usePosts2(idCarac) {

    return useQuery(["posts"], async () => {
        console.log('------------------');
        const data = axios.get(
            "https://pokeapi.co/api/v2/pokemon-color/",idCarac
            
            
        ).then(response => response.data);
     
        
        return data;
    });
}
function Example() {
    let { id } = useParams();

    const [idCarac , SetIdCarac] = useRecoilState(IdCarac);
    const [carac, setCARAC] = useRecoilState(Carac);
    /* useEffect(() => {
       async function getResults() {
         const results = await axios('https://pokeapi.co/api/v2/pokemon/' + id);
         //console.log("hhh",results.data);
         setCARAC(results.data)
       }
       getResults()
     }, [])
   
     console.log(carac.types)*/

    const queryClient = useQueryClient();
    const { status, data, error, isFetching } = usePosts();
    const { status2, data2, error2, isFetching2 } = usePosts2(idCarac);
    
    


    if ((status != "loading")) {
      
        SetIdCarac(data.id)
      
        setCARAC(data)
        if((status2 != "loading")){
            console.log(data2)
            return (
                <>
                    <div className='BackgroundColorCarac22'  >
                        <br></br>
                        <br></br>
                        <h1 className='typeCarCol'> <span className='styleBack px-4'><a href='../'><img src='../assets/images/back.png'></img></a></span>Pokemon type</h1>
                        <br></br>
                        <h2 className='typeCarCol NamePokStyle'>{id}</h2>
                        <br></br>
                        <br></br>
                        <br></br>
                        <h3 className='typeCarCol NamePokStyle StatsStyle'>Stats</h3>
                        <br></br>
                        <br></br>
                        <div class="container">
                            <div class="row">
                                <div class="col">
                                    <h4 className='typeCarCol NamePokStyle DescriptionStyle'>Biodata</h4>
                                    <br></br>
                                    <h6 className='typeCarCol NamePokStyle DescriptionStyle '>Name : </h6>
                                    <h7 className='typeCarCol NamePokStyle DescriptionStyle '>{id}</h7>
                                    <br></br><br></br>
                                    <h6 className='typeCarCol NamePokStyle DescriptionStyle '>Forms: </h6>
    
                                    {
                                        data.forms.map((el) => {
                                            return <h7 className='typeCarCol NamePokStyle DescriptionStyle '> {el.name} </h7>
                                        })
                                    }
    
                                    <br></br>
                                    <br></br>
                                    <h6 className='typeCarCol NamePokStyle DescriptionStyle '>Color: </h6>
                                    <h7 className='typeCarCol NamePokStyle DescriptionStyle '>Black</h7>
                                    <br></br><br></br>
                                    <h6 className='typeCarCol NamePokStyle DescriptionStyle '>Height:  </h6>
                                    <h7 className='typeCarCol NamePokStyle DescriptionStyle '>{data.height} decimetres</h7>
                                    <br></br><br></br>
                                    <h6 className='typeCarCol NamePokStyle DescriptionStyle '>Weight:  </h6>
                                    <h7 className='typeCarCol NamePokStyle DescriptionStyle '>{data.weight} hectogram</h7>
                                    <br></br><br></br>
                                </div>
                                <div class="col">
                                    <h4 className='typeCarCol NamePokStyle DescriptionStyle'>Habitats & Location Areas</h4>
                                    <br></br>
                                    <h6 className='typeCarCol NamePokStyle DescriptionStyle '>Habitats: </h6>
                                    <h7 className='typeCarCol NamePokStyle DescriptionStyle '>test</h7>
                                    <br></br>
                                    <br></br>
                                    <h6 className='typeCarCol NamePokStyle DescriptionStyle '>Location:  </h6>
                                    <h7 className='typeCarCol NamePokStyle DescriptionStyle '>test</h7>
                                    <br></br>
                                    <br></br>
                                    <h4 className='typeCarCol NamePokStyle DescriptionStyle'>Types</h4>
                                    <br></br>
                                    <div class="container">
                                        <div class="row">
                                            {
                                                data.types.map((el) => {
                                                    return <div class="col">
                                                        <button type="button" class="btn btnStyle " disabled> <span className='typeCarCol'>{el.type.name}</span> </button>
                                                    </div>
                                                })
                                            }
    
    
    
                                        </div>
                                    </div>
                                </div>
                                <div class="col">
                                    <img width={"300px"} src='../assets/images/pic3.png'></img>
                                </div>
    
    
                            </div>
                        </div>
    
    
    
    
    
                    </div>
    
                </>
    
            )
        }

        

    } else {
        return (
            <h1>loading...</h1>
        );
    }

  



  
}
