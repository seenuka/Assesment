import React from "react"
import  {Nav} from "react-bootstrap"
function  Navbar(){
  return(
<nav className="navbar">
    <div>
      <img src="data:image/png;base64,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"></img>
    </div>




  <Nav className="justify-content-end" activeKey="/home">
    <Nav.Item>
      <Nav.Link href="/">Home</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link href="/about">About</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link href="/contact">Contact</Nav.Link>
    </Nav.Item>
    <Nav.Item>
    <Nav.Link href="/branch">Branch</Nav.Link>
      

    </Nav.Item>
  </Nav>
</nav>
  )
}
export default Navbar