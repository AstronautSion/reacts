import React, { Component } from 'react';
import ContactInfo from './ContactInfo';


class Contact extends Component{

    constructor(props){
        super(props);
        this.state = {
            keyword : '',
            contactData : [
                {name : 'b', phone : '010-5555-5555'},
                {name : 'c', phone : '010-2222-1235'},
                {name : 'd', phone : '010-0137-5543'},
                {name : 'a', phone : '010-6795-5850'},
                {name : 'e', phone : '010-9894-2237'}
            ]
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e){
        this.setState({
            keyword: e.target.value
        })
    }

    render(){
        const mapToComponents = (data) =>{
            data.sort();
            data = data.filter( (contact) => {
                return contact.name.toLowerCase()
                    .indexOf(this.state.keyword.toLowerCase()) > -1;
            });
            return data.map(( contact, i ) => {
                return (<ContactInfo contact={contact} key={i} />);
            });
        };

        return(
            <div>
                <h1>Contacts</h1>
                <input 
                    name="keyword" 
                    placeholder="Search" 
                    value = {this.state.keyword}
                    onChange={this.handleChange}
                />

                <div>{mapToComponents(this.state.contactData)}</div>
            </div>
        );
    }
}
export default Contact;