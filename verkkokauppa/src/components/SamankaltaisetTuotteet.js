import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { MDBRow, MDBCol, MDBCard, MDBCardImage, MDBCardBody, MDBBtn, MDBInput, MDBCardHeader, MDBCardTitle, MDBCardText, MDBCardFooter, MDBContainer, MDBSpinner, MDBIcon } from 'mdb-react-ui-kit';
import { getKategoriaTuotteet } from "./Server/TuoteAPI";

function SamankaltaisetTuotteet(props) {

    const HandleAddToCart = (tuote) => {
        props.setItems([...props.items,{tuotenimi: tuote.tuotenimi, hinta: tuote.hinta, kuva: tuote.kuva, tuoteid: tuote.tuoteID}]);
        console.log(props.items);
      }

      const [tuotekategoria, setTuotekategoria] = useState([props.tuotekategoria]);

      useEffect(() => {
        async function TuoteKategoriaHaku() {
          if (props.tuotekategoria && props.tuotekategoria) {
            console.log(props.tuote.tuotekategoria + "  kategoria id haettu!!!");
            setTuotekategoria(await getKategoriaTuotteet(props.tuotekategoria));
          }
        }
        TuoteKategoriaHaku();
      
      }, [props.tuotekategoria]);
      


return (
    <>
        {tuotekategoria.map((tuotteet) => (
                    <MDBCol key={tuotteet.tuoteID}>
                    <MDBCard className="h-100">
                        <MDBCardImage
                        src={tuotteet.kuva}
                        position="top"
                        alt="..."
                        />
                        <MDBCardBody>
                        <MDBCardHeader>
                                <MDBCardTitle>{tuotteet.tuotenimi}</MDBCardTitle>
                                </MDBCardHeader>
                            <MDBCardBody>
                                <MDBCardText>
                                Saldo: {tuotteet.varastosaldo}
                                </MDBCardText>
                                <MDBCardText>
                                <NavLink to={`/tuotteet/${tuotteet.tuoteID}`} onClick={() => props.setAktiivinenTuote(tuotteet.tuoteID)}>
                                    Lisätietoja
                                </NavLink>
                                </MDBCardText>
                                <MDBCardText><button className='btn btn-success' onClick={() => HandleAddToCart(tuotteet)}>Lisää ostoskoriin</button></MDBCardText>
                            </MDBCardBody>
                            <MDBCardFooter className="fw-bold">Hinta: {tuotteet.hinta} <MDBIcon fas icon="euro-sign" /></MDBCardFooter>
                        </MDBCardBody>
                    </MDBCard>
                    </MDBCol>
                        ))}
    </>
 )
}

export default SamankaltaisetTuotteet;