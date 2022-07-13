import { Card } from "react-bootstrap";

import React from 'react'

export const Cardd = ({trendmovie}) => {
  return (
    <div >
        <Card>
        {/* <Card style={{ width: '18rem' }}> */}
            <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500/${trendmovie.poster_path}`} />
            <Card.Body>
                <Card.Title>{trendmovie.original_title}</Card.Title>
                <Card.Text>
                {trendmovie.vote_average}/10
                </Card.Text>
                {/* <Button variant="primary">Go somewhere</Button> */}
            </Card.Body>
        </Card>
    </div>
  )
}
