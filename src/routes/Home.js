import React from "react";
import {gql} from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";
import styled from "styled-components";
import Movie from "../components/Movie";

// JS에서 GQL 쿼리 작성하는 방법
const GET_MOVIES = gql`
    {
        movies{
        id
        medium_cover_image
        }
    }
`;

const Container = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`;

const Header = styled.header`
    background: linear-gradient(to right, #6be585, #dd3e54);
    height:45vh;
    margin-bottom:10px;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color:white;
    width:100%;
`;

const Title = styled.h1`
    font-size:50px;
    font-weight:bold;
`;


const Subtitle = styled.h3`
    margin-top:30px;
    font-size:23px;
`;

const Loading = styled.div`
    font-size:20px;
    opacity:0.5;
    font-weight:bold;
`;


export default () => {
    const { loading,  data } = useQuery(GET_MOVIES); // useQuery는 쿼리가 필요, 쿼리가 없을 경우 error 리턴
    return (
        <Container>
            <Header>
                <Title>Apollo 2020</Title>
                <Subtitle>Using with GraphQL</Subtitle>
            </Header>

            { loading && <Loading>Loading...</Loading> }
            { !loading && data.movies && data.movies.map(movie => 
                <Movie
                    key={movie.id}
                    movie={movie}
                />
                )
            }
        </Container>
    );
};