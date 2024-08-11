const staffMember = require(`../models/staffModel`);

//add staff member
const addStaffMember = async(req, res, next) => {
    const {
        name,
        email,
        contactNumber,
        address,
        gender,
        role,
        availability        
    } = req.body;

    try {

        // Check if the email already exists
        const existingMember = await staffMember.findOne({ email });

        if (existingMember) {
            return res.status(400).json({ message: "Email already exists" });
        }

        const newMemberData = new staffMember ({
            name,
            email,
            contactNumber,
            address,
            gender,
            role,
            availability 
        });

        const newStaffMember = await newMemberData.save();
        res.status(201).json(newStaffMember);

    }catch(error) {
        res.status(400).json({message: error.message});
    }

}

//update staff member
const updateStaffMember = async (req, res, next) => {
    let memberId = req.params.id;

    const {
        name,
        email,
        contactNumber,
        address,
        gender,
        role,
        availability 
    } = req.body;

    const updatedMemberData = {
        name,
        email,
        contactNumber,
        address,
        gender,
        role,
        availability 
    };

    try {
        const updatedStaffMember = await staffMember.findByIdAndUpdate(memberId, updatedMemberData, {new: true});
        res.status(200).send({ status: "Member Updated Successfully", updatedStaffMember});

    } catch (error) {
        res.status(400).send({ status : "Error with updating data", error: err.message});

    }

}

//delete staff member
const deleteStaffMember = async (req, res, next) => {
    let memberId = req.params.id;

    try {
        await staffMember.findByIdAndDelete(memberId);
        res.status(200).send({ status: "Member Removed"});

    } catch(error) {
        res.status(500).send({ status: "Error with deleting member", error: err.message })
    }
    
}

//view staff member
const viewStaffMember = async(req, res, next) => {
    const memberId = req.params.id;

    try {
        const member = await staffMember.findById(memberId);
        res.status(200).send({status: "Member fetched", member});

        if (!member) {
            return res.status(400).json({message: 'Member not found'})
        }

    }catch(error) {
        return res.status(500).json({message: error.message});

    }

}

//view all staff members
const allStaffMembers = async (req, res, next) => {
    try {
        const members = await staffMember.find();
        res.status(200).send(members);

    } catch(error) {
        res.status(500).send({ status: "Error with fetching members", error: err.message });

    }
}

module.exports = {
    addStaffMember,
    updateStaffMember,
    deleteStaffMember,
    viewStaffMember,
    allStaffMembers
}