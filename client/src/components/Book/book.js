import React from "react";

import './book.css';
function Book(props) {
  return (

    <div className="Books">
      <div className="card" >
        <div className="imgWrapper">
           <img src={props.info.imageLinks.thumbnail} className="image" />
        </div>
        <div className="card-body">
          <h5 className="cardtitle"> Title: {props.info.title}</h5>
          <p className="card-text">   {props.info.description}    </p>

          <div className="column">
          {props.delete ? 
          <button type="button" onClick={() => props.deleteBook(props.info)} class="btn btn-secondary" data-toggle="tooltip" data-placement="right" title="Tooltip on right">
          Delete
</button>
: 
<button type="button" onClick={() => props.selectBook(props.info)} class="btn btn-secondary" data-toggle="tooltip" data-placement="right" title="Tooltip on right">
                Saved
</button>
          }
              
            </div>
{/* 
            {props.showSave ?
             <div className="column">
              <button type="button" onClick={() => props.selectBook(props.info)} class="btn btn-secondary" data-toggle="tooltip" data-placement="right" title="Tooltip on right">
                Saved
</button>
            </div>
            :
            <div className="column">
              <button type="button" onClick={() => props.deleteBook(props.info._id)} class="btn btn-secondary" data-toggle="tooltip" data-placement="right" title="Tooltip on right">
                delete
</button>
            </div>
          } */}
        </div>
      </div>
    </div>

  )
};
export default Book;





