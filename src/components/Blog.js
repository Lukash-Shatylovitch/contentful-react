import React from 'react';
import { MDBCard, MDBCardTitle, MDBCardText, MDBCardBody, MDBCardImage, MDBRow, MDBCol } from 'mdb-react-ui-kit';

export default function Blog(props) {
  return (
<>

<MDBCard style={{ maxWidth: '80%', margin: '4%'}}>
      <MDBRow className='g-0'>
        <MDBCol md='4'>
          <MDBCardImage src={`https:${props.image}`} className="img-rounded"  alt=""  fluid />
        </MDBCol>
        <MDBCol md='8'>
          <MDBCardBody>
          <MDBCardTitle>{props.title}</MDBCardTitle>
          <MDBCardText style={{ padding: 'center'}}>
        {props.description}
        </MDBCardText >
            <MDBCardText>
              <small className='text-muted'></small>
            </MDBCardText>
          </MDBCardBody>
        </MDBCol>
      </MDBRow>
    </MDBCard>



  </>
  );
}