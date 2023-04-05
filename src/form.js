import React, { useState } from "react";
import FormValidation from "./formValidation";

const Form = () => {

    const coursesByYear = {
        'freshman': [
            "Algorithms", 
            "Data Structures", 
            "Computer Science I", 
            "Computer Science I Lab",
            "Calculus I",
            "Statistics and Probability",
            "Introduction to Computer Networking"
        ],
        'sophomore': [
            "Introduction to Databases", 
            "Computer Science II",
            "Computer Science II Lab",
            "Calculus II",
            "Discrete Structures",
            "Object-Oriented Programming I with Java",
            "Object-Oriented Programming I with C++"
        ],
        'junior': [
            "Rich Internet Web Development", 
            "Back-end Web Development", 
            "Data Modeling",
            "Advanced Calculus",
            "Object-Oriented Programming II",
            "Database Systems Design I"
        ],
        'senior': [
            "Database Systems Design II",
            "Introduction to Cybersecurity",
            "Machine Learning I",
            "System Design and Architecture",
            "Practicum - Computer Science Internship",
            "Practicum - Supervised On-site Research"
        ]
    }


    const [ student, setStudent ] = useState({
        'first_name': '',
        'last_name': '',
        'student_id': 0
    })

    const [ year, setYear ] = useState('freshman')

    const [ courses, setCourses ] = useState([]);

    const handleChange = ({target}) => {
        const { name, value } = target;
        name === 'year' ? setYear(value) : setStudent((prev) => ({...prev, [name]: value}))
    }


    const handleToggle = ({target}) => {
        const { name, value } = target;
        setCourses(
            (prev) => {
                if (prev.includes(value)) {
                    return prev.filter(v => v !== value)
                } else {
                    return [value, ...prev]
                }
            }
        )
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Thanks for registering for your classes, ${student.first_name}!`);
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                <form onSubmit={handleSubmit}>
                    <label className="form-label">First Name</label><br />
                    <input className="form-control" name="first_name" type="text" onChange={handleChange} /><br /><br />  
                    
                    <label className="form-label">Last Name</label><br />
                    <input className="form-control" name="last_name" type="text" onChange={handleChange} /><br /> <br />
                    
                    <label className="form-label">Student ID</label><br />
                    <input className="form-control" name="student_id" type="number" onChange={handleChange} /><br /><br />

                    <label className="form-label">Choose Your Academic Year: </label><br />
                    <select className="form-select" name="year" onChange={handleChange}>
                        <option value="freshman">Freshman</option>
                        <option value="sophomore">Sophomore</option>
                        <option value="junior">Junior</option>
                        <option value="senior">Senior</option>
                    </select>
                    <br />< br />

                    <label>Select Your Courses: </label><br /><br />
                    {
                        coursesByYear[year].map((c,i) => {
                            return (
                                <span key={i}>
                                <input className="form-check-input" type="checkbox" value={c} name={c} onChange={handleToggle} /> {c} <br />
                                </span>
                            )
                        })
                    }
                    
                    <br /> <br />
                    <div className="text-center">
                        <input className="btn btn-primary" type="submit" />
                    </div>
                </form>
                </div>
                <div className="col bg-light ps-5 pt-5">
                    <FormValidation student={student} year={year} courses={courses} />
                </div>
            </div>
        </div>
    )

}

export default Form;