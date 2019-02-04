import React from"react";
import axios from 'axios';
import Book from '../../components/Book/book';

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
    // handleDelete = (id) => {
    //     alert(id)
    //   axios.deleteBook(id).then(res=>this.componentDidMount())
    // };
    render(){
        return(
            <div>
               

                 {
                     this.state.books ?
                        this.state.books.map(e => {
                            return(<Book deleteBook={this.handleDelete}showSaved={false} info={e}/>)
                        }) 
                        :
                        ""
                 }
            </div>
            )
    }
   
   
};

export default Saved;