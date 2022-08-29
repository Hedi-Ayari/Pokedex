
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
    let { type } = useParams();
    console.log(type);
    return useQuery(["posts"], async () => {

        const data = axios.get(
            "https://pokeapi.co/api/v2/type/" + type
        ).then(response => response.data.pokemon);
        return data;
    });
}


function Example() {






    const queryClient = useQueryClient();
    const { status, data, error, isFetching } = usePosts();
    console.log(data)
    if ((status != "loading")) {

        // console.log(data)
        data.map((elem) => (
            console.log(elem.pokemon.name)
        ))

        return (
            <>
                <div className='BackColor'>
                    <br>
                    </br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <div className="container mt-5 mb-5">
                        <div className="row">

                            {
                                data.map((elem) => (
                                    <div className="col-md-4">
                                        <div className="cardd p-3 mb-2 colorcard">
                                            <div className="d-flex justify-content-between ">
                                                <div className="d-flex flex-row align-items-center">
                                                    <img src="../assets/images/img.png" className="bx bxl-mailchimp sizeimg" />

                                                </div>
                                            </div>
                                            <div className="mt-5">
                                                <h3 className="heading colorText">{elem.pokemon.name}<br /></h3>
                                                <div className="mt-4">

                                                    <div className="mt-3"> <a href={"/caracteristiques/" + elem.pokemon.name} className="btn btn-warning ">More Info </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                ))
                            }
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
