// roomRoutes.js
const { Router } = require("express");
const { auth } = require("../middleware/authMiddleware");
const { getRooms, createRoom, getRoom, updateRoom, deleteRoom } = require("../controllers/roomController");
const router = Router();

router.get("/", getRooms);
// Create room
router.post("/", auth, createRoom);
// Get single room
router.get("/:id", getRoom);
//update room
router.put("/:id", auth, updateRoom);
//delete room
router.delete("/:id", auth, deleteRoom);

module.exports = router;
