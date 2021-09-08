import React, {Component} from 'react';
// import { Form, Col, Row, Button, Navbar} from 'react-bootstrap';
import {
  Row,
  Col,
  Form,
  Input,
  Button,
  Card

} from "antd";
import'./Home.css'
import NavbarComponent from "../../assets/components/navbar/NavbarComponent"
import {useAuthorizedContext} from '../../AuthorizedContext'

function Home() {
  const { isLoggedIn, userLevel } = useAuthorizedContext()
  console.log("value >> ", isLoggedIn, userLevel)
  return (  
    <div className="outer-home">
      <NavbarComponent />

      <div className="statusTransaksi">
        <div className="title">
          <p>Transaksi Saat Ini:</p>
        </div>
        <div className="resume">
          <Card title=" "  style={{ width: "30%"}}>
          <Form style={{ marginLeft: "10%"}}>
            <Row >
              <Col style={{width: "35%"}}>
              <p>Waktu Request </p>
              </Col>
            <Col offset={0} style={{width: "65%"}}> 
            <p> : {new Date().toLocaleString()}</p>
            </Col>
            </Row>
            <Row >
            <Col style={{width: "35%"}}>
              <p>Jenis Transaksi</p>
              </Col>
              <Col style={{width: "65%"}}> 
            <p>: Setoran Pinjaman </p>
            </Col>
            
            </Row>

            <Row >
            <Col style={{width: "35%"}}>
              <p>Nominal Transaksi</p>
              </Col>
              <Col sstyle={{width: "65%"}}> 
            <p> : Rp. 10.000.000 </p>
            </Col>
            </Row>

            <Row >
            <Col style={{width: "35%"}}>
              <p>Alamat Agen</p>
              </Col>
              <Col style={{width: "65%"}}> 
            <p> : Jl. Banjaran no 181 </p>
            </Col>
            </Row>

            <Row >
            <Col style={{width: "35%"}}>
                <p>Status</p>            
              </Col>
              <Col style={{width: "65%"}}>
                <p>: Menunggu Konfirmasi Agen</p>            
              </Col> 
            </Row>

            <div className="float-right">
              <Button type="primary" style={{margin:"0px", paddingRight: "15px", 
              backgroundColor:"#F03D3E", fontWeight:"bold"}}>
                  Batalkan
              </Button>
            </div>
          </Form> 
        

      </Card>



        </div>
        
      </div>

      
      
    </div>

    
  );
}

export default Home;