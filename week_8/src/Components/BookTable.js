import React from 'react';
import './Designs.css';

class BookTable extends React.Component {
        constructor(props) {
            super(props)

            this.state = {
                Restaurant: '',
                Menu: '',
                Cost: '',
                Address: '',
                Contact: '',
                arr: []
        }
    }
    handleChange = (e) => {
        // console.log(e.target.value)
        this.setState({
            [e.target.name]: e.target.value,
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const myValues = {
            Restaurant: this.state.Restaurant,
            Menu: this.state.Menu,
            Cost: this.state.Cost,
            Address: this.state.Address,
            Contact: this.state.Contact
        }
        // alert('Restaurant:' + this.state.Restaurant + '\n' +
        // 'Menu:' + this.state.Menu + '\n' +
        // 'Cost:' + this.state.Cost + '\n' +
        // 'Address:' + this.state.Address + '\n' +
        // 'Contact:' + this.state.Contact
        // );
        this.setState({
            arr: [...this.state.arr, myValues]
        }) 
    }
   
    render() {
        //console.log(this.state);  
       
    return ( 
    <div className = "wallpaper"> 
        
        <form onSubmit = {this.handleSubmit}>
    
    
        <table>
        <br></br>
        <br></br>
            <tr>
                <td><label className = "inputValue">Restaurant:</label></td>
                <td><input type = "text" className = "inputValue" name = "Restaurant" value = {this.state.Restaurant} onChange = {(e) => {this.handleChange(e)}} placeholder = "Restaurant Name"></input></td>
              </tr>
        <br></br>
        <br></br>
            <tr>
                <td><label className = "inputValue">Menu:</label></td>
                <td><input type = "text" className = "inputValue" name = "Menu" value = {this.state.Menu} onChange = {(e) => {this.handleChange(e)}} placeholder = "Enter Food Item"></input></td>
              </tr>
        <br></br>
        <br></br>
            <tr>
                <td><label className = "inputValue">Cost:</label></td>
                <td><input type = "text" className = "inputValue" name = "Cost" value = {this.state.Cost} onChange = {(e) => {this.handleChange(e)}} placeholder = "Enter Cost"></input></td>
              </tr>
        <br></br>
        <br></br>
            <tr>
                <td><label className = "inputValue">Address:</label></td>
                <td><input type = "text" className = "inputValue" name = "Address" value = {this.state.Address} onChange = {(e) => {this.handleChange(e)}} placeholder = "Enter Address"></input></td>
              </tr>
        <br></br>
        <br></br>
            <tr>
                <td><label className = "inputValue">Contact:</label></td>
                <td><input type = "text" className = "inputValue" name = "Contact" value = {this.state.Contact} onChange = {(e) => {this.handleChange(e)}} placeholder = "Enter Phone No"></input></td>
              </tr>
        <br></br>
        <br></br>
            
        </table>
            <button type = "submit" className = "Submit">Submit</button>
            <button type = "Display" className = "Submit">Display</button>
      </form>
      {/* {this.state.arr.filter((a,i,arr)=>i===arr.length-1).map((item, index) => { return <div key = {index}>{item.Restaurant} {item.Menu}</div>})} */}

      All items:
      <br />
      {this.state.arr.map((item, index) => { return <div key = {index}><p>{item.Restaurant}</p> <p>{item.Menu}</p> <p>{item.Cost}</p> <p>{item.Address}</p> <p>{item.Contact}</p></div>})}
    </div>
    );
    }
}


export default BookTable;