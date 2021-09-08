import {
    Row,
    Col,
    Form,
    Button,
    Select
} from "antd";
import CurrencyInput from "react-currency-input";
import AlamatComponent from "./AlamatComponent";
import NavbarComponent from "../../assets/components/navbar/NavbarComponent";
import './TransaksiPage.css';
const { Option } = Select;

  
const JenisTransaksi = [
    {
      key: "laku-pandai",
      value: "disabled",
      label: "Laku Pandai",
      isDisabled: true,
    },
    {
      key: "cash-in-out",
      value: "cash-in-&-out",
      label: "Cash-in & Out",
      isDisabled: false,
    },
    {
      key: "report",
      value: "report",
      label: "Report",
      isDisabled: false,
    },
    {
      key: "setoran-uang",
      value: "setoran-uang",
      label: "Setoran Uang",
      isDisabled: false,
    },
    {
      key: "tarik-tunai",
      value: "tarik-tunai",
      label: "Tarik Tunai",
      isDisabled: false,
    },
    {
      key: "isi-ulang-pulsa",
      value: "isi-ulang-pulsa",
      label: "Isi Ulang Pulsa",
      isDisabled: false,
    },
    {
      key: "belanja-merchant",
      value: "belanja-merchant",
      label: "Belanja Merchant",
      isDisabled: false,
    },
    {
      key: "tunai",
      value: "disabled",
      label: "Tunai",
      isDisabled: true,
    },
    {
      key: "setoran-pinjaman",
      value: "setoran-pinjaman",
      label: "Setoran Pinjaman",
      isDisabled: false,
    },
    {
      key: "setoran-simpanan",
      value: "setoran-simpanan",
      label: "Setoran Simpanan",
      isDisabled: false,
    },
    {
      key: "tarik-tunai-2",
      value: "tarik-tunai-2",
      label: "Tarik Tunai",
      isDisabled: false,
    },
    {
      key: "mini-atm-bri",
      value: "mini-atm-bri",
      label: "Mini ATM BRI",
      isDisabled: true,
    },
    {
      key: "registrasi-mobile-banking",
      value: "registrasi-mobile-banking",
      label: "Registrasi Mobile Banking",
      isDisabled: false,
    },
    {
      key: "registrasi-internet-banking",
      value: "registrasi-internet-banking",
      label: "Registrasi Internet Banking",
      isDisabled: false,
    },
    {
      key: "informasi-rekening",
      value: "informasi-rekening",
      label: "Informasi Rekening",
      isDisabled: false,
    },
    {
      key: "transfer-pembayaran",
      value: "transfer-pembayaran",
      label: "Transfer Pembayaran",
      isDisabled: false,
    },
    {
      key: "isi-ulang-pulsa-2",
      value: "isi-ulang-pulsa-2",
      label: "Isi Ulang Pulsa",
      isDisabled: false,
    },
    {
      key: "setor-pasti",
      value: "setor-pasti",
      label: "Setor Pasti",
      isDisabled: false,
    },
];
  
const TransaksiPage = () => {
    function onChange(value) {
        console.log('changed', value);
    }
    return (
        <div>
            <NavbarComponent />
            <div className="formTransaksi" style={{ width:"100%"}}>
                <div style={{ width:"50%"}}>
                    <Row style={{width : "100%"}}>
                        <Col span={24} style={{paddingTop: "100px" }}>

                            <Form style={{width : "100%"}}>
                                <Form.Item as={Row} className="mb-3 center"
                                labelCol={{ span: 6 }}
                                wrapperCol={{ span: 24 }}
                                labelAlign="left"
                                label="Jenis Transaksi"
                                name="Jenis Transaksi"
                                rules={[
                                    {
                                    required: true
                                    }
                                ]}
                                >
                                    <Col >
                                        <Select
                                            placeholder="Pilih Jenis Transaksi"
                                            onChange={(value) => {
                                            console.log("value >> ", value);
                                            }}
                                        >
                                        {JenisTransaksi.map((option) => (
                                        <option key={option.key} value={option.value} disabled={option.isDisabled}>
                                            {option.label}
                                        </option>
                                        ))}
                                        </Select>
                                    </Col>
                                </Form.Item>   
                                <Form.Item as={Row} className="mb-3 center"
                                labelCol={{ span: 6 }}
                                wrapperCol={{ span: 24 }}
                                labelAlign="left"
                                label="Nominal Transaksi"
                                name="Nominal Transaksi"
                                rules={[
                                    {
                                    required: true
                                    }
                                ]}
                                
                                >

                                    <Col md={24} >
                                    <CurrencyInput style={{height:"32px"}} prefix="Rp" thousandSeparator="." precision="0" className="form-control" />
                                    </Col>
                                </Form.Item>
                
                                <AlamatComponent />
                            </Form>
                        </Col>
                    </Row>
                    <Row md={6}>
                        <Button 
                        type="primary" 
                        className="searching-agent"
                        style={{paddingRight:"35px",
                                marginTop:"50px"}}
                        >Cari Agen</Button>
                    </Row>

                </div>
            </div>
      </div>    

    );
};

export default TransaksiPage;