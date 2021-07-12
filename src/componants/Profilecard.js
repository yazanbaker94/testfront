import React, { Component } from 'react';
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'

export class Profilecard extends Component {
    render() {
        return (
            <div>
                <CardGroup>
                    <Card border="primary" style={{ width: '30px', display: 'inline-block', marginBottom: '200px' }}>
                        <Card.Img variant="top" src="https://marketifythemes.com/html/waxon/img/about/2.jpg" style={{ width: '200px', marginTop: '35px', marginLeft: '20px' }} />
                        <Card.Body style={{ height: '400px' }}>
                            <Card.Title style={{ marginTop: '60px' }}>Name:{this.props.name} </Card.Title>
                            <Card.Title style={{ marginTop: '60px' }}>Bio:{this.props.bio}</Card.Title>
                            <Card.Title style={{ position: "absolute", top: '30px', left: '300px' }}>Skills:{this.props.skills}</Card.Title>
                            {/* <Card.Title style={{position:"absolute",top:'100px',left:'300px'}}>Work Samples:</Card.Title> */}
                            {/* <Card.Img variant="top" src="https://marketifythemes.com/html/waxon/img/about/2.jpg" style={{width:'200px', marginTop:'20px',marginLeft:'0px',position:"absolute",top:'150px',left:'300px'}} />
                            <Card.Img variant="top" src="https://marketifythemes.com/html/waxon/img/about/2.jpg" style={{width:'200px', marginTop:'20px',marginLeft:'200px',position:"absolute",top:'150px',left:'400px'}}/>
                             <Card.Img variant="top" src="https://marketifythemes.com/html/waxon/img/about/2.jpg" style={{width:'200px', marginTop:'20px',marginLeft:'400px',position:"absolute",top:'150px',left:'500px'}}/> */}
                            <Card.Title style={{ position: "absolute", top: '400px', left: '300px' }}>Contact Info</Card.Title>
                            <Card.Title style={{ position: "absolute", top: '500px', left: '300px' }}>Phone:{this.props.phone}</Card.Title>
                            <Card.Title style={{ position: "absolute", top: '500px', left: '700px' }}>WebsiteUrl:{this.props.websiteUrl}</Card.Title>
                            <Card.Text>
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                        </Card.Footer>
                    </Card>
                </CardGroup>
            </div>
        )
    }
}

export default Profilecard;
