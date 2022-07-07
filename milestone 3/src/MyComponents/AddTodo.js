import React, { useState } from 'react';

export const AddTodo = ({ addTodo }) => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");


    const submit = (e) => {
        e.preventDefault();
        if (!title || !desc) {
            alert("Title or Description cannot be blank");
        }
        else {
            addTodo(title, desc);
            setTitle("");
            setDesc("");
        }
    }
    return (
        <div className="container my-3">
            <h3>Contact Us
            </h3>
            <form onSubmit={submit}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Name</label>
                    {/* validation */}
                    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className="form-control" id="title" aria-describedby="emailHelp" required maxlength="25"/> 

                </div>
                 {/* validation */}
                <div className="mb-3">
                    <label htmlFor="desc" className="form-label">gmail</label>
                    <input type="gmail" value={desc} onChange={(e) => setDesc(e.target.value)} className="form-control" id="desc" required/>
                </div>
                <div className="mb-3">
                     {/* validation */}
                    <label htmlFor="desc" className="form-label">phone No</label>
                    <input type="number" className="form-control" required/>
                </div>
                <div className="mb-3">
                     {/* validation */}
                    <label htmlFor="desc" className="form-label">Adress</label>
                    <input type="gmail"  className="form-control" required />
                </div>
               
                <label for="cars">Type of Assistence  :  </label>
           <select name="cars" id="cars">
    <option value="Finance Careers">Finance Careers</option>
    <option value="Technology Careers">Technology Careers</option>
    <option value="Marketing Careers">Marketing Careers</option>
  
  </select>
  <br/> <br/>
                
                <button type="submit" className="btn btn-sm btn-success">Add Todo</button>
            </form>
        </div>
    )
}
