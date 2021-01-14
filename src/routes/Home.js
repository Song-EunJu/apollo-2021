import React from "react";
import {gql} from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";

// JS에서 GQL 쿼리 작성하는 방법
const GET_MOVIES = gql` 
    {
    movies{
      id
      medium_cover_image
    }
  }
`;

export default () => {
    const { loading, error, data } = useQuery(GET_MOVIES); // useQuery는 쿼리가 필요, 쿼리가 없을 경우 error 리턴
    console.log(loading, error, data);
    return <h1>Home</h1>;
};