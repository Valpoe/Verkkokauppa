import React, { useState } from 'react';
import { NavLink, Link } from "react-router-dom";
import "./HeaderCSS.css";
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
    MDBDropdown,
    MDBDropdownToggle,
    MDBDropdownMenu,
    MDBDropdownItem,
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
          <MDBContainer className="text-center text-md-start justify-content-center">
        <MDBNavbarBrand tag="strong">
          Kynä & Kumi
        <MDBIcon fas icon="pencil-ruler" className="text-dark ms-3" />
         </MDBNavbarBrand>
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
            <NavLink to="/" className='nav-link fw-bold'>Etusivu</NavLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <NavLink to="/tuotteet" className='nav-link fw-bold'>Tuotteet</NavLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
            <NavLink to="/tietoa-meista" className='nav-link fw-bold'>Tietoa meistä</NavLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
            <NavLink to="/ota-yhteytta" className='nav-link fw-bold'>Ota yhteyttä</NavLink>
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
                      Sulje
                    </MDBBtn>
                    <NavLink className="btn btn-primary" to={"/tilaus"} onClick={toggleShow}>Siirry tilaamaan</NavLink>
                  </MDBModalFooter>
                </MDBModalContent>
              </MDBModalDialog>
            </MDBModal>
            {props.user && (
              <MDBDropdown>
                <MDBDropdownToggle color="success" className='me-2'>
                  <MDBIcon fas icon="user" className='me-2'/>
                  {props.user}
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  <MDBDropdownItem link className="asd" childTag="button">
                    <NavLink className="asd" exact to="/tilinhallinta">
                      <MDBBtn color="tertiary" className="asd" rippleColor='light'><MDBIcon fas icon="user-cog" className='me-2'/>Oma tili</MDBBtn>
                      </NavLink>
                      </MDBDropdownItem>
                  <MDBDropdownItem link className="asd" childTag="button">
                  <NavLink className="asd" exact to="/">
                    <MDBBtn color="tertiary" className="asd" rippleColor='light' onClick={() => {props.setUser(null)}}><MDBIcon fas icon="sign-out-alt" className='me-2'/>Kirjaudu ulos</MDBBtn>
                      </NavLink>
                  </MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>     
        )}{
          !props.user && 
            <>
            <MDBBtn color="success" onClick={toggleShowLogin}><MDBIcon fas icon="child" className='me-2'/><MDBIcon fas icon="circle-right"/></MDBBtn>
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