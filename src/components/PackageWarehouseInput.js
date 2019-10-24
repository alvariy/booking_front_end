import React from 'react';

class PackageWarehouseInput extends React.Component{
    constructor(props){
        super(props);
            this.state = {
                wayBillNumber: "",
                recipients: "",
                phone: "",
                weight: ""
            }
        }

        handlewayBillNumber = (event) => {
            this.setState({wayBillNumber: event.target.value});
            console.log(this.state.wayBillNumber);
           };
    
           handlereceipients = (event) => {
            this.setState({recipients: event.target.value});
            console.log(this.state.recipients);
           };

           handlePhone = (event) => {
            this.setState({phone: event.target.value});
            console.log(this.state.phone);
           };

           handleWeight = (event) => {
            this.setState({weight: event.target.value});
            console.log(this.state.weight);
           };

        
        addPackage = () => {
            console.log(this.state);
            fetch("http://localhost:8080/packages", {mode: 'cors' , 
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
            <span>Receipients :</span>
            <input type="text"  value = {this.state.recipients} onChange={this.handlereceipients}/>
            </div>
            <div>
            <span>Phone:</span>
            <input type="text"  value = {this.state.phone} onChange={this.handlePhone}/>
            </div>
            <div>
            <span>Weight:</span>
            <input type="text"  value = {this.state.weight} onChange={this.handleWeight}/>
            </div>
           </div>
           <button onClick={this.addPackage}>Confirm</button>
           <button onClick={this.addTask}>Cancel</button>
            </div>
        )
    }

}

export default PackageWarehouseInput