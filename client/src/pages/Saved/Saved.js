import React from"react";
import axios from 'axios';
import Book from '../../components/Book/book';
import Delete from '../../components/button/delbutton'
class Saved extends React.Component{
    state = {}
    componentDidMount = () => {
        axios.get('/saved').then(res => {
            console.log(res, "saved books")
            this.setState({
                books: res.data
            })
        })
    }
     handleDelete = (obj) => {
        console.log(obj._id, "this is id being sent")
       axios.post('/delete', {id : obj._id})
       .then(res=> {window.location.reload()})
     };
    render(){
        return(
            <div className="bookContainer">
               

                 {
                     this.state.books ?
                        this.state.books.map(e => {
                            return(<Book delete={true} deleteBook={this.handleDelete}showSaved={false} info={e}/>)
                        }) 
                        :
                        ""
                 }

            </div>
            )
    }
   
   
};

export default Saved;