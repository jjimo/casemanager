import React, { useState } from 'react';
import awsLogo from '../img/aws-logo.svg';
import $ from 'jquery';


const Aside = () => {

    // To toggle the Add Case Form
    const toggleForm = () =>{
        $('#add-case-form').toggle("fast");
    }

    // State to save the form data
    const [ccase, updateCase] = useState({
        caseID: "",
        lastOutbound: "",
        description: ""
    });

    const updateState = e => {
        updateCase({
            ...ccase,
            [e.target.name] : e.target.value
        });
    }

    // Error state
    const [error, updateError] = useState(false);

    // Desctructuring of ccase
    const { caseID, lastOutbound, description } = ccase;


    // OnSubmit form
    const submitCase = e => {
        e.preventDefault();

        // To validate
        if(caseID.trim() === "" || caseID.trim().length != 10 || caseID.trim() === NaN || lastOutbound.trim() === "" || description === ""){
            updateError(true);
            return;
        }

        // Remove error message (if any)
        updateError(false);
    }
    

    return ( 
        <aside className="col-2">

            <img src={awsLogo} alt="AWS Logo" className="site-logo" />
            <h1><span>Case</span>Manager</h1>

            <button className="btn btn-primary" id="btn-add-case" onClick={toggleForm}>Add Case</button>

            <form 
                className="add-case-form" 
                id="add-case-form"
                onSubmit={submitCase}
            >

                {error ? <p className="alert alert-danger error-alert">Please don't leave empty fields and make sure that your case ID is correct.</p> : null}

                <div>
                    <label htmlFor="caseID">Case ID</label>
                    <input
                        type="text"
                        name="caseID"
                        id="caseID"
                        placeholder="Case ID"
                        onChange={updateState}
                        value={caseID}
                    />
                </div>
                <div>
                    <label htmlFor="last-outbound">Last Outbound Date</label>
                    <input
                        type="date"
                        name="lastOutbound"
                        id="last_outbound"
                        placeholder="Case ID"
                        onChange={updateState}
                        value={lastOutbound}
                    />
                </div> 
                <div>
                    <label htmlFor="description">Description</label>
                    <textarea
                        name="description"
                        id="description"
                        onChange={updateState}
                        value={description}
                    ></textarea>
                </div>

                <button 
                    type="submit" 
                    className="btn btn-warning"
                >Add</button>
            </form>

        </aside>
    );
}
 
export default Aside; 