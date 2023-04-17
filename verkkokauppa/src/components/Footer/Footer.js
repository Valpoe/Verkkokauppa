import React from "react";
import { NavLink } from "react-router-dom";
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

const Footer = () => {
  const currentYear = new Date().getFullYear();
return (
  <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span>Ota meihin yhteyttä sosiaalisessa mediassa:</span>
        </div>
        <div>
          <a href="/#" className='me-4 text-reset'>
            <MDBIcon fab icon="facebook-f" />
          </a>
          <a href='/#' className='me-4 text-reset'>
            <MDBIcon fab icon="twitter" />
          </a>
          <a href='/#' className='me-4 text-reset'>
            <MDBIcon fab icon="google" />
          </a>
          <a href='/#' className='me-4 text-reset'>
            <MDBIcon fab icon="instagram" />
          </a>
          <a href='/#' className='me-4 text-reset'>
            <MDBIcon fab icon="linkedin" />
          </a>
          <a href='/#' className='me-4 text-reset'>
            <MDBIcon fab icon="github" />
          </a>
        </div>
      </section>

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon icon="gem" className="me-3" />
                Kynä & Kumi
              </h6>
              <p>         
              </p>
            </MDBCol>
            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Navigoi</h6>
              <p>
                <NavLink to="/" className='text-reset'>Etusivu</NavLink>
              </p>
              <p>
              <NavLink to="/tuotteet" className='text-reset'>Tuotteet</NavLink>
              </p>
              <p>
              <NavLink to="/tietoa-meista" className='text-reset'>Tietoa meistä</NavLink>
              </p>
              <p>
              <NavLink to="/ota-yhteytta" className='text-reset'>Ota yhteyttä</NavLink>
              </p>
              <p>
              <NavLink to="/ostoskori" className='text-reset'>Ostoskori</NavLink>
              </p>
              <p>
              <NavLink to="/privacystatement" className='text-reset'>Tietosuojalausunto</NavLink>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Pricing
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Settings
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Orders
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Help
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <MDBIcon icon="home" className="me-3" />
                Umpikuja 3, 12345 Kaupunki
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                ohj2ryhmaf@gmail.com
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" />+ 01 234 567 88
              </p>
              <p>
                <MDBIcon icon="print" className="me-3" />+ 01 234 567 89
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © {currentYear} Copyright: <a className='text-reset fw-bold' href='https://mdbootstrap.com/'>
           Kynä & Kumi
        </a>
      </div>
    </MDBFooter>
);
};
export default Footer;
