import React, { useState } from "react";
import axios from "axios";
import swal from "sweetalert2";

const AddMember = () => {

    const [name, setname] = useState("");
    const [email, setemail] = useState("");
    const [contactNumber, setcontactNumber] = useState("");
    const [address, setaddress] = useState("");
    const [gender, setgender] = useState("");
    const [role, setrole] = useState("");
    const [availability, setavailability] = useState("");

    function sendData(e) {
        e.preventDefault();

        const newMember = {
            name,
            email,
            contactNumber,
            address,
            gender,
            role,
            availability
        }

        axios.post(`http://localhost:1080/staff/add-member`, newMember).then(() => {
            swal.fire({
                icon: 'success',
                title: 'Member added successfully',
                showConfirmButton: true
              })
        }).catch((err) => {
            swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
              });
        })
    }

    return (
        <form onSubmit={sendData}>

            <div className="row mb-4">
                <div className="col-md-6">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" className="form-control" id="name" placeholder="Name" onChange={(e) => setname(e.target.value)} required />
                </div>
                <div className="col-md-6">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" className="form-control" id="email" placeholder="Email" onChange={(e) => setemail(e.target.value)} required />
                </div>
            </div>

            <div className="row mb-4">
                <div className="col-md-6">
                    <label htmlFor="contactNumber" className="form-label">Contact Number</label>
                    <input type="text" className="form-control" id="contactNumber" placeholder="Contact Number" onChange={(e) => setcontactNumber(e.target.value)} required />
                </div>
                <div className="col-md-6">
                    <label htmlFor="address" className="form-label">Address</label>
                    <input type="text" className="form-control" id="address" placeholder="1234 Main St" onChange={(e) => setaddress(e.target.value)} required />
                </div>
            </div>

            <fieldset className="form-group mb-4">
                <div className="row">
                    <legend className="col-form-label col-sm-2 pt-0">Gender</legend>
                    <div className="col-sm-10">
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="gender" id="maleGender" value="Male" onChange={(e) => setgender(e.target.value)} checked={gender === "Male"} />
                            <label className="form-check-label" htmlFor="maleGender">
                                Male
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="gender" id="femaleGender" value="Female" onChange={(e) => setgender(e.target.value)} checked={gender === "Female"} />
                            <label className="form-check-label" htmlFor="femaleGender">
                                Female
                            </label>
                        </div>
                    </div>
                </div>
            </fieldset>

            <div className="row mb-4">
                <label className="form-label col-sm-2" htmlFor="role">Role</label>
                <div className="col-md-3">
                    <select className="form-select" id="role" value={role} onChange={(e) => setrole(e.target.value)} required>
                        <option value="">Choose...</option>
                        <option value="Instructor">Instructor</option>
                        <option value="Manager">Manager</option>
                        <option value="Assistant">Assistant</option>
                    </select>
                </div>
            </div>

            <div className="row mb-4">
                <label className="form-label col-sm-2" htmlFor="availability">Availability</label>
                <div className="col-md-3">
                    <select className="form-select" id="availability" value={availability} onChange={(e) => setavailability(e.target.value)} required>
                        <option value="">Choose...</option>
                        <option value="Full-time">Full-time</option>
                        <option value="Part-time">Part-time</option>
                        <option value="Weekends">Weekends</option>
                    </select>
                </div>
            </div>

            <button type="submit" className="btn btn-primary">Add Member</button>
        </form>
    )
}

export default AddMember;
