import React, { useState, useEffect } from 'react';
import {isAuthenticated} from "../utils/auth";

const GradesForm = (props) => {
    const userData = isAuthenticated();
    const user_id = userData.id;
    const initialFieldValues = {
        fullName: '',
        mobile: '',
        email: `${user_id}`,
        address: ''
    }

    var [values, setValues] = useState(initialFieldValues)


    useEffect(() => {
        if (props.currentId == '')
            setValues({ ...initialFieldValues })
        else
            setValues({
                ...props.contactObjects[props.currentId]
            })
    }, [props.currentId, props.contactObjects])

    const handleInputChange = e => {
        var { name, value } = e.target;
        setValues({
            ...values,
            [name]: value
        })
    }

    const handleFormSubmit = e => {
        e.preventDefault()
        props.addOrEdit(values);
    }
    
    return (
        
        <form autoComplete="off" onSubmit={handleFormSubmit}>
            <div className="form-group input-group">
                <div className="input-group-prepend">
                    <div className="input-group-text">
                        <i className="fas fa-book"></i>
                    </div>
                </div>
                <input className="form-control" name="fullName" placeholder="Subject Name"
                    value={values.fullName}
                    required
                    onChange={handleInputChange}
                />
            </div>
            <div className="form-row">
                <div className="form-group input-group col-md-6">
                    <div className="input-group-prepend">
                        <div className="input-group-text">
                            <i className="fas fa-list-ol"></i>
                        </div>
                    </div>

                    <input className="form-control" name="mobile" placeholder="Marks"
                        value={values.mobile}
                        required
                        onChange={handleInputChange}
                    />
                </div>
                <div className="form-group input-group col-md-6">
                    {/* <div className="input-group-prepend">
                        <div className="input-group-text">
                            <i className="fas fa-envelope"></i>
                        </div>
                    </div> */}
                    <input className="form-control" name="email" placeholder="Email" type="hidden"
                        value={values.email}
                       // onChange={handleInputChange}
                    />
                </div>
            </div>
            {/* <div className="form-group">
            
               <input className="form-control" name="address" placeholder="Address"
                    value={values.address}
                    onChange={handleInputChange}
                />
            </div> */}
            <div className="form-group">
                <input type="submit" value={props.currentId == "" ? "Save" : "Update"} className="btn btn-primary btn-block" />
            </div>
        </form>
    );
}

export default GradesForm;