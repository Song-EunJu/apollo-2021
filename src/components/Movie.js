import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components"

const Container = styled.div`
    display:flex;
    align-items:center;
    
`;

export default ({movie}) => (
    <div>
            <Link to={`/${movie.id}`}>
                <Container>
                    <img src={movie.medium_cover_image} alt="0" />
                </Container>            
            </Link> 
       
        
    </div>
);