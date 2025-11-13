const teamService = require("../../services/home/teamService");

// ✅ CREATE TEAM MEMBER
const createTeamController = async (req, res) => {
  try {
    const file = req.file;
    const body = req.body;

    const result = await teamService.createTeamMember(body, file);

    return res.status(201).json({
      success: true,
      message: "Team member added successfully",
      data: result,
    });
  } catch (error) {
    console.error("❌ Error creating team member:", error);
    console.error("Error details:", JSON.stringify(error, null, 2));

    return res.status(500).json({
      success: false,
      message: "Failed to add team member",
      error: error.message || error.toString(),
    });
  }
};

// ✅ GET ALL TEAM MEMBERS
const getTeamMembersController = async (req, res) => {
  try {
    const result = await teamService.getAllTeamMembers();
    res.status(200).json({
      success: true,
      message: "Team members fetched successfully",
      data: result,
    });
  } catch (error) {
    console.error("Error fetching team members:", error);
    res.status(500).json({
      success: false,
      message: "Failed to fetch team members",
      error: error.message,
    });
  }
};

// ✅ GET SINGLE TEAM MEMBER BY ID
const getTeamMemberByIdController = async (req, res) => {
  try {
    const id = req.params.id;
    const result = await teamService.getTeamMemberById(id);

    res.status(200).json({
      success: true,
      message: "Team member fetched successfully",
      data: result,
    });
  } catch (error) {
    console.error("Error fetching team member:", error);
    res.status(500).json({
      success: false,
      message: "Failed to fetch team member",
      error: error.message,
    });
  }
};

// ✅ UPDATE TEAM MEMBER
const updateTeamController = async (req, res) => {
  try {
    const id = req.params.id;
    const file = req.file;
    const body = req.body;

    const result = await teamService.updateTeamMember(id, body, file);

    res.status(200).json({
      success: true,
      message: "Team member updated successfully",
      data: result,
    });
  } catch (error) {
    console.error("Error updating team member:", error);
    res.status(500).json({
      success: false,
      message: "Failed to update team member",
      error: error.message,
    });
  }
};

// ✅ DELETE TEAM MEMBER
const deleteTeamController = async (req, res) => {
  try {
    const id = req.params.id;
    const result = await teamService.deleteTeamMember(id);

    if (result) {
      res.status(200).json({ success: true, message: "Team member deleted successfully" });
    } else {
      res.status(404).json({ success: false, message: "Team member not found" });
    }
  } catch (error) {
    console.error("Error deleting team member:", error);
    res.status(500).json({
      success: false,
      message: "Failed to delete team member",
      error: error.message,
    });
  }
};

module.exports = {
  createTeamController,
  getTeamMembersController,
  getTeamMemberByIdController,
  updateTeamController,
  deleteTeamController,
};
