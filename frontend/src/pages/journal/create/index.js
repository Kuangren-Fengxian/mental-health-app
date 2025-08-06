import React from 'react'

const index = () => {

    const handleSubmit =()=>{
        console.log("Form submitted");
    }

  return (
    <div>
        <h1>Create New Entry</h1>
        <form>
            <div>
                <label style={{marginRight:"10px"}}>Title</label>
                <input placeholder='Enter your title'/>
            </div>
            <div style={{marginTop: "10px", display:"flex"}}>
                <label style={{marginRight:"10px"}}>Content</label>
                <textarea placeholder='Write your entry here...'></textarea>
            </div>
            <div style={{marginTop: "10px", display:"flex", width:"100%"}}>
                <button>Submit</button>
            </div>
        </form>
    </div>
  )
}

export default index
