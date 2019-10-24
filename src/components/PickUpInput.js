import React from 'react';

class PickUpInput extends React.Component{
    constructor(props){
        super(props);
            this.state = {
                wayBillNumber: "",
                pickUdDate: ""
            }
        }

        handlewayBillNumber = (event) => {
            this.setState({wayBillNumber: event.target.value});
           };
    
        handlepickUpTime = (event) => {
            this.setState({pickUdDate: event.target.value});
           };
        
        addPickUp = () => {
            console.log(this.state);
            fetch("http://localhost:8080/packages/" + this.state.wayBillNumber, {mode: 'cors' , 
            method: 'PUT',
            headers: new Headers({'Content-Type': 'application/json'}),
            body: JSON.stringify(this.state)
           },).then(res => res.json());


            fetch("http://localhost:8080/pickups", {mode: 'cors' , 
             method: 'POST',
             headers: new Headers({'Content-Type': 'application/json'}),
             body: JSON.stringify(this.state)
            },).then(res => res.json());
        }

    render(){
        return(
            <div>
                 <div>
                     <div>
            <span>Waybill Number:</span>
            <input type="text" value = {this.state.wayBillNumber} onChange={this.handlewayBillNumber}/>
            </div>
            <div>
            <span>Pick-Up Time:</span>
            <input type="text"  value = {this.state.pickUdDate} onChange={this.handlepickUpTime}/>
            </div>
           </div>
           <button onClick={this.addPickUp}>Confirm</button>
           <button onClick={this.addTask}>Cancel</button>
            </div>
        )
    }

}

export default PickUpInput