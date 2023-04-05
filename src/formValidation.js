import React from "react";

const FormValidation = (props) => {

    return ( 
        <div>
            <p className="lead">
                First Name: {props.student.first_name} < br />
                Last Name: {props.student.last_name} <br />
                ID Number: {props.student.student_id} <br /><br />
                Your classification is listed as {props.year}.
            </p>

            {props.courses.length > 0 ? (
            <div>
                <p className="lead">You are registering for the following courses:</p>
                <ul className="lead">
                    { props.courses.map((c,i) => {
                        return (<li key={i}>{c}</li>)
                    })}
                </ul>
            </div>) : <p className="lead">You have not registered for any courses at this time.</p>}



        
        </div>
    )
}

export default FormValidation;