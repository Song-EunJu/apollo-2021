import React from "react";
import { useParams} from "react-router-dom";
import {gql} from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";

const GET_MOVIE = gql`
    query getMovie($id: Int!){ 
        movie(id: $id){
            title
            medium_cover_image
            language
            rating
            description_intro
        } 
    }
`;

export default () => {
    const { id } = useParams(); 
    const { loading, data} = useQuery(GET_MOVIE,{
        variables: {id:parseInt(id)}
    });

    if(loading){
        return "Loading"
    }
    if(data && data.movie){
        return data.movie.title;
    }
}