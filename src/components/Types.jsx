
import { QueryClient, useQueryClient, QueryClientProvider, useQuery } from '@tanstack/react-query'
import React, { useState, useEffect } from 'react';
import { Routes, Route, useParams } from 'react-router-dom';
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

        const data = axios.get(
            "https://pokeapi.co/api/v2/type/"
        ).then(response => response.data.results);
        return data;
    });
}

function Example() {






    const queryClient = useQueryClient();
    const { status, data, error, isFetching } = usePosts();

    if ((status != "loading")) {

        console.log(data)


        return (
            <>
                <div className='BackgroundTypes'>
                    <br>
                    </br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <div className="container">
                        <div className="row">
                            <div className="col-sm">

                                <div className="container">

                                    {

                                        data.map((elem) => (
                                            
                                            <a href={'/PokemonByType/' + elem.name} className="btn btnStyleType" data-toggle="button" aria-pressed="false" autocomplete="off">
                                                {elem.name} </a>
                                                
                                        ))
                                        
                                       
                                    }


                                </div>

                            </div>
                            <div className="col-sm">
                            <img src='./assets/images/pic4.png'></img> 
                            </div>
                        </div>
                    </div>





                </div>

            </>

        )

    } else {
        return (
            <h1>loading...</h1>
        );
    }







}
