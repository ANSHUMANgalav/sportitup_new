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
        { label: "00:00:00 To 01:00:00", value: "1" },
        { label: "01:00:00 To 02:00:00", value: "2" },
        { label: "02:00:00 To 03:00:00", value: "3" },
        { label: "03:00:00 To 04:00:00", value: "4" },
        { label: "04:00:00 To 05:00:00", value: "5" },
        { label: "05:00:00 To 06:00:00", value: "6" },
        { label: "06:00:00 To 07:00:00", value: "7" },
        { label: "07:00:00 To 08:00:00", value: "8" },
        { label: "08:00:00 To 09:00:00", value: "9" },
        { label: "09:00:00 To 10:00:00", value: "10" },
        { label: "10:00:00 To 11:00:00", value: "11" },
        { label: "11:00:00 To 12:00:00", value: "12" },
        { label: "12:00:00 To 13:00:00", value: "13" },
        { label: "13:00:00 To 14:00:00", value: "14" },
        { label: "14:00:00 To 15:00:00", value: "15" },
        { label: "15:00:00 To 16:00:00", value: "16" },
        { label: "16:00:00 To 17:00:00", value: "17" },
        { label: "17:00:00 To 18:00:00", value: "18" },
        { label: "18:00:00 To 19:00:00", value: "19" },
        { label: "19:00:00 To 20:00:00", value: "20" },
        { label: "20:00:00 To 21:00:00", value: "21" },
        { label: "21:00:00 To 22:00:00", value: "22" },
        { label: "22:00:00 To 23:00:00", value: "23" },
        { label: "23:00:00 To 24:00:00", value: "24" },
        
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
