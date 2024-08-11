import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

const AllMembers = () => {
    const [members, setMembers] = useState([]);

    //retriew staff memebers
    useEffect(() => {
        function getMembers() {
            axios.get(`http://localhost:1080/staff/all-members`).then((res) => {
                setMembers(res.data);
            }).catch((err) => {
                alert(err.message);
            });
        }
        getMembers();
    }, []);

    //delete staff member
    const onDelete = (id) => {
        axios.delete(`http://localhost:1080/staff/delete-member/${id}`).then((res) => {
            setMembers(members.filter(member => member._id !== id));

        }).catch((err) => {

        })
    }

    return (
        <>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Contact Number</th>
                        <th scope="col">Role</th>
                        <th scope="col">Availability</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {members.map((member, index) => (
                        <tr key={index}>
                            <th scope="row">{index + 1}</th>
                            <td>{member.name}</td>
                            <td>{member.email}</td>
                            <td>{member.contactNumber}</td>
                            <td>{member.role}</td>
                            <td>{member.availability}</td>       
                            <td>

                            {/* profile view button */}
                            <Link to={`/Adminprofile/student/${member._id}`} className="btn btn-outline-primary btn-sm m-1" role="button"><i className="bi bi-eye-fill"></i> view</Link>

                            {/* delete button */}
                            <Link to="#" className="btn btn-outline-danger btn-sm m-1" onClick={(e) => {
                                e.preventDefault();
                                Swal.fire({
                                title: 'Are you sure?',
                                text: 'You won\'t be able to revert this!',
                                icon: 'warning',
                                showCancelButton: true,
                                confirmButtonColor: '#dc3545',
                                cancelButtonColor: '#6c757d',
                                confirmButtonText: 'Yes, delete it!'
                                }).then((result) => {
                                if (result.isConfirmed) {
                                    onDelete(member._id);
                                    Swal.fire(
                                    'Deleted!',
                                    'Your file has been deleted.',
                                    'success'
                                    )
                                }
                                })
                            }}>
                                <i className="bi bi-trash3-fill"></i>  Delete
                            </Link>
                            </td>
   
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
};

export default AllMembers;
