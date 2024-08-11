import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './StaffDashboard.css'; // Assuming you have a CSS file for custom styles

import AddMember from '../../components/staffManagement/AddMember';
import AllMembers from '../../components/AllMembers';

const StaffDashboard = () => {
    const [activeTab, setActiveTab] = useState('home');

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    return (
        <div className="container-fluid">
            <div className="row mt-4">
                <div className="col-2">
                    <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                        <a className={`nav-link ${activeTab === 'home' ? 'active' : ''}`} onClick={() => handleTabClick('home')} id="v-pills-home-tab" data-toggle="pill" href="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="true">Home</a>
                        <a className={`nav-link ${activeTab === 'add-member' ? 'active' : ''}`} onClick={() => handleTabClick('add-member')} id="v-pills-add-member-tab" data-toggle="pill" href="#add-member" role="tab" aria-controls="v-pills-add-member" aria-selected="false">Add Member</a>
                        <a className={`nav-link ${activeTab === 'members-list' ? 'active' : ''}`} onClick={() => handleTabClick('members-list')} href="#members-list">Members List</a>
                        <a className={`nav-link ${activeTab === 'add-course' ? 'active' : ''}`} onClick={() => handleTabClick('add-course')} href="#add-course">Add Courses</a>
                        <a className={`nav-link ${activeTab === 'courseList' ? 'active' : ''}`} onClick={() => handleTabClick('courseList')} href="#course-list">Course List</a>
                        <a className={`nav-link ${activeTab === 'settings' ? 'active' : ''}`} onClick={() => handleTabClick('settings')} id="v-pills-settings-tab" data-toggle="pill" href="#v-pills-settings" role="tab" aria-controls="v-pills-settings" aria-selected="false">Settings</a>
                    </div>
                </div>
                <div className="col-10">
                    <div className="tab-content" id="v-pills-tabContent">
                        <div className={`tab-pane fade ${activeTab === 'home' ? 'show active' : ''}`} id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
                            <h2>Home</h2>
                            <p>Welcome to the Staff Dashboard!</p>
                        </div>
                        <div className={`tab-pane fade ${activeTab === 'add-member' ? 'show active' : ''}`} id="v-pills-add-member" role="tabpanel" aria-labelledby="v-pills-add-member-tab">
                            <AddMember/>
                        </div>
                        <div className={`tab-pane fade ${activeTab === 'members-list' ? 'show active' : ''}`} id="v-pills-members-list" role="tabpanel" aria-labelledby="v-pills-members-list-tab">
                            <AllMembers/>
                        </div>
                        <div className={`tab-pane fade ${activeTab === 'add-course' ? 'show active' : ''}`} id="v-pills-add-course" role="tabpanel" aria-labelledby="v-pills-add-course-tab">
                            <h2>Add Courses</h2>
                            <p>Add new courses here.</p>
                        </div>
                        <div className={`tab-pane fade ${activeTab === 'courseList' ? 'show active' : ''}`} id="v-pills-course-list" role="tabpanel" aria-labelledby="v-pills-course-list-tab">
                            <h2>Course List</h2>
                            <p>View your course list here.</p>
                        </div>
                        <div className={`tab-pane fade ${activeTab === 'settings' ? 'show active' : ''}`} id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab">
                            <h2>Settings</h2>
                            <p>Manage your settings here.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default StaffDashboard;
