import React from 'react';
import './Home.css';
import Book from '../../components/Book/book';
import axios from 'axios';
import { element } from 'prop-types';




class Home extends React.Component {
    state = {

    }
    handleInput = (e) => {
        e.preventDefault();
        console.log(e);
        
            this.setState({
                [e.target.name]: e.target.value
            })
     
        
    }
    handleKeyPress = (e) => {
        if(e.key == "Enter"){
            this.handleSearch();
        }
    }
    handleSearch = () => {
        console.log('search')
        console.log(this.state.search)
        axios.get(`https://www.googleapis.com/books/v1/volumes?q=${this.state.search}`)
            .then((result) => {
                console.log(result.data.items, "this is our result")
                this.setState({
                    results: result.data.items
                })
            })
    }
    selectBook = (book) => {
        const saveBook = {
            title: book.title,
            description: book.description,
            imageLinks: book.imageLinks
        }
        axios.post('/save', saveBook).then(res => {
            console.log(res);
        })

    }
    render() {
        return (

            <div className="container">
                <div className="row col-md-12">
                    <div className="row col-md-4">
                        <h2> Search book</h2>
                    </div>
                    <div class="input-group mb-3">
                        <input type="text" name="search" onKeyPress={this.handleKeyPress} onChange={this.handleInput} class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                        <div class="input-group-append">
                            <button type="submit" onClick={this.handleSearch}>Search</button>
                        </div>
                    </div>
                    <div>

                    </div>
                </div>
                <div  className="row col-md-12 bookContainer">
                    {
                        this.state.results ?
                            this.state.results.map(element => {
                                return (<Book delete={false} showSave={true} selectBook={this.selectBook} info={element.volumeInfo} />)
                            })
                            :
                            "Choose a book"
                    }

                </div>
            </div>
        )
    }
};

export default Home;







