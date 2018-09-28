import React from 'react';
import { Col, Grid, Row } from 'react-bootstrap';
import RateService from './RateService';


export default props => (
  <Grid fluid>
    <Row>
      <Col sm={12} >
                <RateService />
      </Col>
    </Row>
  </Grid>
);
