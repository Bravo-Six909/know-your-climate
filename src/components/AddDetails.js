import React from 'react';
import AddCSS from "./AddDetails.module.css"


let location = ""; 
let country = ""; 

const AddDetails = () => {

    
    const locChange = (e) =>{
        location = e.target.value;
        console.log(e);
        console.log(location);
    }

    const countChange = (e) =>{
        console.log(e);
        country = e.target.value;
        console.log(country);
    }

    const submitting = () => {
        console.log(country,location);
    }

    return (
        <>
            <h1 className={AddCSS.detailheading} >Add Details</h1>
            <form className={AddCSS.form}>
                <div className={AddCSS.inputs}>
                    <input onChange={locChange} className={AddCSS.input} type="text" placeholder="Enter Your Location" />
                    <input onChange={countChange} className={AddCSS.input} type="text" placeholder="Enter Your Country" />
                </div>

                <button onSubmit={submitting} className={AddCSS.button}>Submit</button>
                {console.log(location,country)}
            </form>
        </>
    )
}

export default AddDetails;
export { location, country };
