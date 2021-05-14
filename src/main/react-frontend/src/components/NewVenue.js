import React, { Component } from 'react'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";
import VenueService from "../services/VenueService"
import { Multiselect } from 'multiselect-react-dropdown';

export default class NewVenue extends Component {
     
    constructor(props){
        super(props)
        this.state={
            venueName:'',
            venueAddress:'',
            game:'',
            costPerHour:'',
            imageLink:'',
            slots:[]

        }

    }

    

    addVenue = (event) => {
        event.preventDefault();
        let venue = {slots:this.state.slots ,venueName:this.state.venueName , venueAddress:this.state.venueAddress ,costPerHour:this.state.costPerHour ,games:this.state.game ,img_link:this.state.imageLink}
        alert("new venue added");
        console.log(JSON.stringify(venue));
        VenueService.createVenue(venue).then(res => {
            this.props.history.push('/AdminDashboard');    
        });
    }

    cancel(){
        this.props.history.push('/AdminDashboard');
    }
    changeVenueNameHandler= (event) => {
        this.setState({venueName: event.target.value});
    }
    changeVenueAddressHandler= (event) => {
        this.setState({venueAddress: event.target.value});
    }
    changeGameHandler= (event) => {
        this.setState({game: event.target.value});
    }
    changeCostPerHourHandler= (event) => {
        this.setState({costPerHour: event.target.value});
    }
    changeImageLinkHandler= (event) => {
        this.setState({imageLink: event.target.value});
    }
    changeSlotHandlerAdd= (event) => {
        // this.setState({slots: event.target.value});
        let value
        event.map(data=>(
            // this.state.slots=[],
            // this.state.slots.push(data.value)
            this.setState({slots: [ ...this.state.slots,  {"slot_id":  parseInt(data.value)}  ]})
            ))
        console.log(this.state.slots)
    }
    changeSlotHandlerRemove= (event) => {
        // this.setState({slots: event.target.value});
        console.log(event);
    }

    slot_options = [
        { label: "04:00:00 To 06:00:00", value: "1" },
        { label: "02:00:00 To 04:00:00", value: "2" },
        { label: "06:00:00 To 08:00:00", value: "3" },
        
      ];

    
    

    
    
    render() {
        return (
            <div>
                
                 <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center"> Adding a new venue </h3>
                                <div className = "card-body">
                                    <form>
                                    <div className = "form-group">
                                            <label> Venue Name </label>
                                            <input placeholder="venue name" name="venueName"  className="form-control" 
                                                value={this.state.venueName} onChange={this.changeVenueNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Venue Address </label>
                                            <input placeholder="Venue Address" name="venueAddress"  className="form-control" 
                                                value={this.state.venueAddress} onChange={this.changeVenueAddressHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Game </label>
                                            <input placeholder="Game" name="game" type="email" className="form-control" 
                                                value={this.state.game} onChange={this.changeGameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Cost per hour</label>
                                            <input placeholder="Coat per hour" name="cost"  className="form-control" 
                                                value={this.state.costPerHour} onChange={this.changeCostPerHourHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Give the Link for the image if venue: </label>
                                            <input placeholder="Image link" name="imageLink" type="Link" className="form-control" 
                                                value={this.state.imageLink} onChange={this.changeImageLinkHandler}/>
                                        </div>
                                        
                                        <div className = "form-group">
                                            <label> Slots available</label>
                                        <Multiselect  className="form-control" 
                                        autoFocus={true}
                                        options = {this.slot_options}
                                        displayValue="label"
                                        value={this.state.isAdminFlag} 
                                        onSelect={this.changeSlotHandlerAdd}
                                        onRemove={this.changeSlotHandlerRemove}> 
                                            
                                                {/* <option value="1" >Not admin</option> 
                                                <option value="2"> Admin</option>
                                                <option value="3"> Admin</option>
                                                <option value="4"> Admin</option>
                                                <option value="5"> Admin</option>
                                                <option value="6"> Admin</option>
                                                <option value="7"> Admin</option>
                                                <option value="8"> Admin</option>
                                                <option value="9"> Admin</option>
                                                <option value="10"> Admin</option>
                                                <option value="11"> Admin</option>
                                                <option value="12"> Admin</option> */}
                    
                                                {/* <options value="1" >04:00:00 To 06:00:00</options> 
                                                <option value="2"> 02:00:00 To 04:00:00</option>
                                                <option value="3">06:00:00 To 08:00:00</option> */}
                                        </Multiselect>
                                        </div>
                                        
                                        <button className="btn btn-success" onClick={this.addVenue}>Add</button>
                                        
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
