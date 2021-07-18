import React from 'react'
import styled from 'styled-components'
import CloseIcon from '@material-ui/icons/Close'

const Header = () => {
    return (
        <Container>
            <a>
                <img src='/images/logo.svg' alt='' />
            </a>
            <Menu>
                <a href='#'>Model S</a>
                <a href='#'>Model 3</a>
                <a href='#'>Model X</a>
                <a href='#'>Model Y</a>
                <a href='#'>Solar Roof</a>
                <a href='#'>Solar Panels</a>
            </Menu>
            <RightMenu>
                <a href='#'>Shop</a>
                <a href='#'>Account</a>
                <a href='#'>Menu</a>
            </RightMenu>
            <MenuNav>
                <CloseWrapper>
                    <CustomClose />
                </CloseWrapper>
                <li><a href='#'>Existing Inventory</a></li>
                <li><a href='#'>Used Inventory</a></li>
                <li><a href='#'>Trade-In</a></li>
                <li><a href='#'>Test Drive</a></li>
                <li><a href='#'>Cybertruck</a></li>
                <li><a href='#'>Roadster</a></li>
                <li><a href='#'>Semiy</a></li>
                <li><a href='#'>Charging</a></li>
                <li><a href='#'>Powerwall</a></li>
                <li><a href='#'>Commercial Energy</a></li>
                <li><a href='#'>Utilities</a></li>
                <li><a href='#'>Find Us</a></li>
                <li><a href='#'>Support</a></li>
            </MenuNav>
        </Container>
    )
}

export default Header

const Container = styled.div`
    min-height: 60px;
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1;
`

const Menu = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;

    a {
        font-weight: 600;
        padding: 0 10px;
        flex-wrap: nowrap;
    }

    @media (max-width: 768px) {
        display: none;
    }
`

const RightMenu = styled.div`
    a {
        font-weight: 600;
        margin-right: 10px;
    }
`

const MenuNav = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    background: white;
    width: 300px;
    z-index: 16;
    list-style: none;
    padding: 20px;
    dosplay: flex;
    flex-direction: column;
    text-align: start;

    li {
        padding: 15px 0;
        font-weight: 600;
        color: rgb(57, 60, 65);
        
    
    }
`

const CustomClose = styled(CloseIcon)`
    cursor: pointer;
`

const CloseWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
`