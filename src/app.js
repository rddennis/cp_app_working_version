import React, { useState } from "react";
import FormPage from "./formPage";

const App = () =>{
    return (
        <div className="app">
            <h1 className="text-center border-bottom bg-success-subtle shadow-lg pt-2 pb-2">Student Registration Application</h1>
            <br />
            <br />
            <FormPage />
        </div>
    )
}

export default App