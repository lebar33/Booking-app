// roomRoutes.js
const { Router } = require("express");
const { getRooms, createRoom, getRoom, updateRoom, deleteRoom } = require("../controllers/roomController");
const router = Router();

router.get("/", getRooms);

// Create room
router.post("/", createRoom);
// Get single room
router.get("/:id", getRoom);
//update room
router.put("/:id", updateRoom);
//delete room
router.delete("/:id", deleteRoom);

module.exports = router;
