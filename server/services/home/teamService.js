const { Team } = require("../../models/home");

// ✅ CREATE TEAM MEMBER
async function createTeamMember(body, file) {
  let img_url = null;

  if (file) {
    img_url = file.path; // Cloudinary upload URL
  }

  const data = {
    img: img_url,
    name: body.name,
    role: body.role,
  };

  const teamMember = new Team(data);
  const savedTeamMember = await teamMember.save();
  return savedTeamMember;
}

// ✅ GET ALL TEAM MEMBERS
async function getAllTeamMembers() {
  const members = await Team.find({}).sort({ createdAt: -1 });
  return members;
}

// ✅ GET SINGLE TEAM MEMBER BY ID
async function getTeamMemberById(id) {
  const member = await Team.findById(id);
  if (!member) throw new Error("Team member not found");
  return member;
}

// ✅ UPDATE TEAM MEMBER
async function updateTeamMember(id, body, file) {
  const member = await Team.findById(id);
  if (!member) throw new Error("Team member not found");

  if (file) {
    member.img = file.path;
  }

  member.name = body.name ?? member.name;
  member.role = body.role ?? member.role;

  const updatedMember = await member.save();
  return updatedMember;
}

// ✅ DELETE TEAM MEMBER
async function deleteTeamMember(id) {
  const deletedMember = await Team.findByIdAndDelete(id);
  if (!deletedMember) throw new Error("Team member not found");
  return deletedMember;
}

module.exports = {
  createTeamMember,
  getAllTeamMembers,
  getTeamMemberById,
  updateTeamMember,
  deleteTeamMember,
};
