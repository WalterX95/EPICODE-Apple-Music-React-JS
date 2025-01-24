import { useEffect, useState } from "react";
import { Container, Row, Col, Navbar, Nav } from "react-bootstrap";
import SidebarMenu from "react-bootstrap-sidebar-menu";
import "../MenuComponent.css";
import HeroSection from "./HeroSection";
import NewEpisodesSection from "./NewEpisodesSection";
import NewReleasesSection from "./NewReleasesSection";
import ExploreSection from "./ExploreSection";

const MenuComponent = () => {
    const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);

    useEffect(() => {
        const handleResize = () => {
            setIsDesktop(window.innerWidth >= 768);
        };

        window.addEventListener("resize", handleResize);

        // Cleanup listener on unmount
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <Container fluid className="menu-container">
            <Row className="h-100">
                {/* Sidebar visibile solo su desktop */}
                {isDesktop && (
                    <Col md={3} className="sidebar-container">
                        <SidebarMenu className="sidebar-dark">
                            <SidebarMenu.Header>
                                <SidebarMenu.Brand>Apple Music</SidebarMenu.Brand>
                            </SidebarMenu.Header>
                            <SidebarMenu.Body>
                                <SidebarMenu.Nav>
                                    <SidebarMenu.Nav.Link>
                                        <SidebarMenu.Nav.Icon>
                                            {/* Icona personalizzata */}
                                        </SidebarMenu.Nav.Icon>
                                        <SidebarMenu.Nav.Title>Home</SidebarMenu.Nav.Title>
                                    </SidebarMenu.Nav.Link>
                                    <SidebarMenu.Nav.Link>
                                        <SidebarMenu.Nav.Icon>
                                            {/* Icona personalizzata */}
                                        </SidebarMenu.Nav.Icon>
                                        <SidebarMenu.Nav.Title>Novità</SidebarMenu.Nav.Title>
                                    </SidebarMenu.Nav.Link>
                                    <SidebarMenu.Nav.Link>
                                        <SidebarMenu.Nav.Icon>
                                            {/* Icona personalizzata */}
                                        </SidebarMenu.Nav.Icon>
                                        <SidebarMenu.Nav.Title>Radio</SidebarMenu.Nav.Title>
                                    </SidebarMenu.Nav.Link>
                                </SidebarMenu.Nav>
                            </SidebarMenu.Body>
                        </SidebarMenu>
                    </Col>
                )}

                {/* Contenuto principale */}
                <Col xs={12} md={isDesktop ? 9 : 12} className="content-container">
                    {/* Navbar visibile solo su mobile */}
                    {!isDesktop && (
                        <Navbar collapseOnSelect expand="md" bg="dark" variant="dark" className="navbar-mobile">
                            <Container>
                                <Navbar.Brand href="#home">Apple Music</Navbar.Brand>
                                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                                <Navbar.Collapse id="responsive-navbar-nav">
                                    <Nav className="ms-auto">
                                        <Nav.Link href="#home">Home</Nav.Link>
                                        <Nav.Link href="#novita">Novità</Nav.Link>
                                        <Nav.Link href="#radio">Radio</Nav.Link>
                                    </Nav>
                                </Navbar.Collapse>
                            </Container>
                        </Navbar>
                    )}
                   <HeroSection/>
                   <NewEpisodesSection />
                    <NewReleasesSection />
                    <ExploreSection />
                </Col>
            </Row>
        </Container>
    );
};

export default MenuComponent;
