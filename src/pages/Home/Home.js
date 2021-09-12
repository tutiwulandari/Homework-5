import React, { Component } from "react";
import { Row, Col, Form, Input, Button, Card, Typography } from "antd";
import "./Home.css";
import NavbarComponent from "../../assets/components/navbar/NavbarComponent";
import { useAuthorizedContext } from "../../AuthorizedContext";

const { Title, Text } = Typography;

function Home() {
  const { isLoggedIn, userLevel } = useAuthorizedContext();
  console.log("value >> ", isLoggedIn, userLevel);
  return (
    <div className="outer-home">
      <NavbarComponent />
      <div className="statusTransaksi">
        <div className="title">
          <Title level={3}>Transaksi Saat Ini:</Title>
        </div>
        <div className="resume">
          <Card title=" " style={{ width: "30%" }}>
            <Form style={{ marginLeft: "10%" }}>
              <Row style={{ marginBottom: "8px" }}>
                <Col style={{ width: "35%" }}>
                  <Text>Waktu Request </Text>
                </Col>
                <Col offset={0} style={{ width: "65%" }}>
                  <Text> : {new Date().toLocaleString()}</Text>
                </Col>
              </Row>
              <Row style={{ marginBottom: "8px" }}>
                <Col style={{ width: "35%" }}>
                  <Text>Jenis Transaksi</Text>
                </Col>
                <Col style={{ width: "65%" }}>
                  <Text>: Setoran Pinjaman </Text>
                </Col>
              </Row>

              <Row style={{ marginBottom: "8px" }}> 
                <Col style={{ width: "35%" }}>
                  <Text>Nominal Transaksi</Text>
                </Col>
                <Col sstyle={{ width: "65%" }}>
                  <Text> : Rp. 10.000.000 </Text>
                </Col>
              </Row>

              <Row style={{ marginBottom: "8px" }}>
                <Col style={{ width: "35%" }}>
                  <Text>Alamat Agen</Text>
                </Col>
                <Col style={{ width: "65%" }}>
                  <Text> : Jl. Banjaran no 181 </Text>
                </Col>
              </Row>

              <Row style={{ marginBottom: "8px" }}>
                <Col style={{ width: "35%" }}>
                  <Text>Status</Text>
                </Col>
                <Col style={{ width: "65%" }}>
                  <Text>: Menunggu Konfirmasi Agen</Text>
                </Col>
              </Row>

              <div className="float-right">
                <Button
                  type="primary"
                  style={{
                    margin: "0px",
                    paddingRight: "15px",
                    backgroundColor: "#F03D3E",
                    fontWeight: "bold",
                  }}
                >
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
