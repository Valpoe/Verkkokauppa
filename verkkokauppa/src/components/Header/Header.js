import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarToggler,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBIcon,
    MDBCollapse,  
    MDBBtn,
    MDBModal,
    MDBModalDialog,
    MDBModalContent,
    MDBModalHeader,
    MDBModalTitle,
    MDBModalFooter,
  } from 'mdb-react-ui-kit';
import Ostoskori from '../Ostoskori';
import LoginRegister from '../LoginRegister';

const Header = (props) => {
    const [showNavCentred, setShowNavCentred] = useState(false);
    const [basicModal, setBasicModal] = useState(false);
    const [basicModalLogin, setBasicModalLogin] = useState(false);

    const toggleShow = () => setBasicModal(!basicModal);
    const toggleShowLogin = () => setBasicModalLogin(!basicModalLogin);

    return(
        <MDBNavbar expand='lg' light bgColor='light'>
      <MDBContainer fluid>
        <MDBNavbarBrand tag="strong">
          Kynä & Kumi
         </MDBNavbarBrand>
        <MDBIcon fas icon="pencil-ruler" className="text-dark" />
        <MDBNavbarToggler
          type='button'
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setShowNavCentred(!showNavCentred)}>
          <MDBIcon icon='bars' fas />
        </MDBNavbarToggler>
        <MDBCollapse navbar show={showNavCentred} className="collapse navbar-collapse justify-content-center" >
          <MDBNavbarNav fullWidth={false} className="mb-2 mb-lg-0" >
            <MDBNavbarItem>
            <NavLink to="/" className='nav-link'>Etusivu</NavLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <NavLink to="/tuotteet" className='nav-link'>Tuotteet</NavLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
            <NavLink to="/tietoa-meista" className='nav-link'>Tietoa meistä</NavLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
            <NavLink to="/ota-yhteytta" className='nav-link'>Ota yhteyttä</NavLink>
            </MDBNavbarItem>
          </MDBNavbarNav>
        </MDBCollapse>
            <MDBBtn color="success" onClick={toggleShow} className='me-2'><MDBIcon fas icon="shopping-cart" className='me-2'/>{props.items.length}</MDBBtn>
            <MDBModal show={basicModal} setShow={setBasicModal} tabIndex='-1'>
              <MDBModalDialog className="modal-dialog modal-xl">
                <MDBModalContent>
                  <MDBModalHeader>
                    <MDBModalTitle>Ostoskori</MDBModalTitle>
                    <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn>
                  </MDBModalHeader>
                  <Ostoskori setItems={props.setItems} items={props.items} removeItem={props.removeItem} getTotal={props.getTotal} countItem={props.countItem} />
                  <MDBModalFooter>
                    <MDBBtn className="btn btn-dark" onClick={toggleShow}>
                      Close
                    </MDBBtn>
                    <NavLink className="btn btn-primary" to={"/tilaus"} onClick={toggleShow}>Siirry tilaamaan</NavLink>
                  </MDBModalFooter>
                </MDBModalContent>
              </MDBModalDialog>
            </MDBModal>
            {props.user && (
          <NavLink className="btn btn-primary" to={"/tilinhallinta"}>{props.user}  {props.userID} </NavLink>
          
        )}{
          !props.user && 
            <>
            <MDBBtn color="success" onClick={toggleShowLogin} className='me-2'><MDBIcon fas icon="child" className='me-1'/><MDBIcon fas icon="circle-right" className='me-2'/>kirjaudu / luo asiakastili</MDBBtn>
            <MDBModal show={basicModalLogin} setShow={setBasicModalLogin} tabIndex='-1'>
              <MDBModalDialog className="modal-dialog modal-xl">
                <MDBModalContent>
                  <MDBModalHeader>
                    <MDBBtn className='btn-close' color='none' onClick={toggleShowLogin}></MDBBtn>
                  </MDBModalHeader>
                  <LoginRegister setUserID={props.setUserID} userID={props.userID} setUser={props.setUser} toggleShowLogin={toggleShowLogin} setAsiakasTiedot={props.setAsiakasTiedot} asiakasTiedot={props.asiakasTiedot} email={props.email} setEmail={props.setEmail} password={props.password} setPassword={props.setPassword}/>
                  <MDBModalFooter>
                    <MDBBtn className="btn btn-dark" onClick={toggleShowLogin}>
                      Sulje
                    </MDBBtn>
                  </MDBModalFooter>
                </MDBModalContent>
              </MDBModalDialog>
            </MDBModal>
            </>
            }
      </MDBContainer>
    </MDBNavbar>
    );
};

export default Header;