import React from 'react'
import { Card,CardBody,Row,Container } from 'react-bootstrap'
export default function CardApp() {
  return (
       <>
       
        <Card className='col-md-4 mt-5 m-0 p-0 rounded-5'>
         <img src='https://cdn.24c.in/prod/super-app/root/2024/07/24/8898c45b-7ee1-4f80-8fde-4dc61ef49c70-Drive-home.webp' className='img-fluid' />
         <CardBody className='text-white bg-dark'>
          <h1>Buy Now</h1>
          <h3>Drive home your dream car</h3>
          <button type='button' className='btn btn-md mt-4 w-100 btn-outline-light bg-primary text-white rounded-5'>View All Cars</button>

         </CardBody>
       </Card>

          <Card className='col-md-4 mt-5 m-0 p-0 rounded-5'>
         <img src='https://cdn.24c.in/prod/super-app/root/2024/07/24/8898c45b-7ee1-4f80-8fde-4dc61ef49c70-Drive-home.webp' className='img-fluid' />
         <CardBody className='text-white bg-dark'>
          <h1>Buy Now</h1>
          <h3>Drive home your dream car</h3>
          <button type='button' className='btn btn-md mt-4 w-100 btn-outline-light bg-primary text-white rounded-5'>View All Cars</button>

         </CardBody>
       </Card>

   <Card className='col-md-4 mt-5 m-0 p-0 rounded-5'>
         <img src='https://cdn.24c.in/prod/super-app/root/2024/07/24/8898c45b-7ee1-4f80-8fde-4dc61ef49c70-Drive-home.webp' className='img-fluid' />
         <CardBody className='text-white bg-dark'>
          <h1>Buy Now</h1>
          <h3>Drive home your dream car</h3>
          <button type='button' className='btn btn-md mt-4 w-100 btn-outline-light bg-primary text-white rounded-5'>View All Cars</button>

         </CardBody>
       </Card>
       </>
   
  )
}
