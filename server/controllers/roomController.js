const Room = require("../models/roomModel");

// roomController.js
const getRooms = async (req, res, next) => {
    try {
        const rooms = await Room.find();
        if (!rooms) {
            res.status(400);
            throw new Error("rooms not found!");
        }
        return res.status(200).json(rooms);
    } catch (error) {
        next(error);
    }
};

//get single room
const getRoom = async (req, res, next) => {
    try {
        const room = await Room.findById(req.params.id);
        if (!room) {
            res.status(400);
            throw new Error("Room not found!");
        }
        return res.status(200).json(room);
    } catch (error) {
        next(error);
    }
}
// create room
const createRoom = async (req, res, next) => {
    try {
        //todo validate data from user with join
        const room = await Room.create(req.body);

        if (!room) {
            res.status(400);
            throw new Error("ther was a problem creating");
        }
        return res.status(201).json(room);
    } catch (error) {
        next(error);
    }
};

// update rooms
const updateRoom = async (req, res, next) => {
    try {
        const updatedRoom = await Room.findByIdAndUpdate(req.params.id, {
            $set: req.body
        },
            { new: true }
        )
        if (!updatedRoom) {
            res.status(400);
            throw new Error("Cannot update room");

        }
        return res.status(200).json(updatedRoom);
    } catch (error) {
        next(error);
    }
}
const deleteRoom = async (req, res) => {
    const room = await Room.findByIdAndDelete(req.params.id);
    if (!room) {
        res.status(400);
        throw new Error("Room not deleted!");
    }
    return res.status(200).json({ id: req.params.id })
}

module.exports = {
    getRooms,
    createRoom,
    getRoom,
    updateRoom,
    deleteRoom
};
