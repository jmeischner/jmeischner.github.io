import Container from 'base/container'
import Flex from 'base/flex'
import { Link } from 'gatsby'
import React from 'react'
import styled from 'styled-components'



const Navi = styled(Flex)`
    height: 20px;
    width: 320px;
    border-bottom: 2px solid ${p => p.theme.color.secondary};
    padding-right: 27px;
    margin-top: 20px;

    @media (${p => p.theme.media.small}) {
        width: 100%
    }
`

const NavigationItem = styled(Flex)`
    width: 70px;
    text-align: end;
`

const NavigationLink = styled(Link)`
    span {
        color: ${p => p.theme.color.primary};
        font-weight: ${p => p.theme.zilla.bold};
        text-decoration: none;
    }
`

const Navigation = () => {
    
    return (
        <Navi align="flex-end">
            <Container justifyContent="flex-end">
                <NavigationItem>
                    <NavigationLink>
                        <span>
                            About Me
                        </span>
                    </NavigationLink>
                </NavigationItem>
                <NavigationItem>
                    <NavigationLink to="/">
                        <span>
                            Blog
                        </span>
                    </NavigationLink>
                </NavigationItem>
            </Container>
        </Navi>  
    )
    
}

export default Navigation
