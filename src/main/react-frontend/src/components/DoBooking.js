import React, { Component } from 'react'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";
import BookingService from "../services/BookingService"

export default class DoBooking extends Component {
    
    constructor(props){
        super(props)
        this.state={
            selectedDate:null,
            selectedTime:null,
            selectedSlot:null
            
        }

    }

    makeBooking = (event) => {
        event.preventDefault();
        let booking = {user:{user_id:this.props.location.params.props.uId},venue:{venue_id:this.props.location.params.props.vId} ,slot: this.state.selectedSlot, booking_date: this.state.selectedDate     }
        console.log("hiiiiiiiiiiii");
        console.log(JSON.stringify(booking));
        BookingService.createBooking(booking).then(res => {
            this.props.history.push('/VenueList');    
        });
    }
    cancel(){
        this.props.history.push('/VenueList');
    }

    changeDateHandler = (event) => {
        this.setState({selectedDate: event});
        console.log(event);
    }
    changeSlotHandler = (event)=>{
         this.setState({selectedSlot : event.target.value})
        console.log(event.target.value)
        console.log(this.state.selectedSlot)
    }
    

    
    
    render() {
        console.log(this.props.location.params.props)
        console.log(this.props.location.params.props.venuename)
        console.log(this.state.selectedSlot)
        console.log(this.state.selectedDate)
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center"> Booking The {this.props.location.params.props.venuename}</h3>
                                <div className = "card-body">
                                    <form>
                                        
                                        <div className = "form-group">
                                            <lable>Select Date</lable>
                                            <DatePicker 
                                            selected={this.state.selectedDate}
                                            onChange={date => this.changeDateHandler(date)}
                                            // dateFormat="yyyy-mm-dd"
                                            />
                                        </div>
                                        
                                       
                                        <div className = "form-group">
                                            <label> Select Slot </label>
                                        <select className="form-control" 
                                        autoFocus={true}
                                        value={this.state.selectedSlot} onChange={this.changeSlotHandler}> 
                                            {this.props.location.params.props.slots.map(data=>(
                                                <option value={data.slot_id}>{data.start_time} to {data.end_time}</option>
                                            )

                                            ) 
                                            
                                            }
                                        </select>
                                        </div>
                                        <br/>
                                        <br/>
                                        <button className="btn btn-success" onClick={this.makeBooking}>Book</button>
                                        
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        )
    }
}
