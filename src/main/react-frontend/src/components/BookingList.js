import axios from 'axios';
import React, { Component } from 'react';
import { CardDeck } from 'react-bootstrap';
import BookingService from "../services/BookingService"
import Venueshow from "./Venueshow"

class BookingList extends Component {
    constructor (props){
        super(props)
        this.state={
            bList : [],
            uId:0

        }
     
        
    }
    
    componentDidMount(){
        console.log(this.props.uId)
        console.log(this.state.uId)
        this.state.uId = this.props.uId
        
        
        BookingService.getBookingByUser(this.state.uId).then((res) => {
            this.setState({ bList: res.data});
            console.log(res.data)

        });
        console.log(this.state.bList)
    }
    
    bookingTime(booking){
    //    booking.venue.slots.forEach( function(element) {
    //        if(element.slot_id==booking.venue.slot){
    //         console.log(element.start_time)   
    //         return element.start_time;
    //        }

    //    });
    console.log(booking.slot)
    let time=booking.venue.slots.map(function(data){
        console.log(data.slot_id)
        console.log(booking.slot)
        if(data.slot_id==booking.slot){
                    console.log(data.start_time)   
                    return (data.start_time+" To "+data.end_time)
                   }
    });
         return(time);
}

    render() {
        console.log(this.props.uId)
        console.log(this.bList)
    return(<div>
        <h2 className="text-center">Booking History</h2>
        <br></br>
        <div className = "row">
               <table  className = "table table-striped table-bordered">

                   <thead>
                       <tr>
                           <th>#</th>
                           <th>slot</th>
                           <th> venue Name</th>
                           <th> booked By</th>
                           <th> Booking date</th>
                           <th> booking time</th>
                           
                       </tr>
                   </thead>
                   <tbody>
                       {
                           this.state.bList.map(
                               booking => 
                               <tr key = {booking.booking_id}>
                                    <td> { booking.slot} </td>
                                    <td> { booking.slot} </td>
                                    <td> { booking.venue.venueName} </td>
                                    <td> { booking.user.firstName +" " +booking.user.lastName} </td>
                                    <td> { booking.booking_date} </td>
                                    <td> { this.bookingTime(booking)} </td>
                                    
                               </tr>
                           )
                       }
                   </tbody>
               </table>

        </div>

   </div>
   )
        
    }
}

export default BookingList;