import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import {Button , Card} from "react-bootstrap"
import { Link } from 'react-router-dom';


function Venueshow(props){
console.log(props);
    const {url} = props.img_link;
    return(
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="Top" src={props.img_link} />
        <Card.Body>
            <Card.Title>{props.venuename}</Card.Title>
            <Card.Text>
                {props.venueaddress}
            </Card.Text>
            <Card.Text>
              Cost per hour =  {props.costperhour}
            </Card.Text>
            <Link to={{pathname:"/DoBooking",params:{props}  }} >
                <a className="nav-link " href="" tabindex="-1" aria-disabled="true">proceed to book</a>
            </Link>
        </Card.Body>
        </Card>
        // <div>
        //     <h2>55</h2>
        //     <img src = {props.img_link}/>
        //     <h2>{props.venuename}</h2>
        //     <p>Address : {props.venueaddress}</p>
        //     <p>{props.coatperhour}</p> 

        // </div>    
    )

}

export default Venueshow