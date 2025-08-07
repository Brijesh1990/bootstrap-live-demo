import React from 'react'
import { Container,Row } from 'react-bootstrap'
import ButtonApp from './ButtonApp'
import CardApp from './CardApp'
export default function ContainerApp() {
  return (
    <Container className='overflow-x-hidden content'>
        <Row className='gx-5 g-4 p-2 m-5'>
            <div className='col-md-4  fs-3 text-white bg-dark p-3  mt-5'>
                Grid1
                <ButtonApp />
            </div>
            
            <div className='col-md-4  fs-3 text-white bg-dark p-3 mt-5'>
                Grid1
                
                <ButtonApp />
            </div>
            
            <div className='col-md-4  fs-3 text-white bg-dark p-3 mt-5'>
                Grid1
            
                <ButtonApp />
            </div>

            <CardApp />
            
        </Row>
    </Container>
  )
}

