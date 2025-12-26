import * as service from "../../services/home/ServiceOfferingsServices.js";

// GET all
export const getServiceOfferingsController = async (req, res) => {
  try {
    const offerings = await service.getServiceOfferings();
    res.status(200).json({
      success: true,
      message: "Service offerings fetched successfully",
      data: offerings
    });
  } catch (error) {
    console.error("Error fetching service offerings:", error);
    res.status(500).json({ message: "Failed to fetch service offerings" });
  }
};

// POST
export const createServiceOfferingController = async (req, res) => {
  try {
    const newOffering = await service.createServiceOffering(req.body, req.file);
    res.status(201).json(newOffering);
  } catch (error) {
    console.error("Error creating service offering:", error);
    res.status(500).json({ message: "Failed to create service offering" });
  }
};

// PUT
export const updateServiceOfferingController = async (req, res) => {
  try {
    const updatedOffering = await service.updateServiceOffering(req.params.id, req.body, req.file);
    if (!updatedOffering) {
      return res.status(404).json({ message: "Service offering not found" });
    }
    res.json(updatedOffering);
  } catch (error) {
    console.error("Error updating service offering:", error);
    res.status(500).json({ message: "Failed to update service offering" });
  }
};

// DELETE
export const deleteServiceOfferingController = async (req, res) => {
  try {
    const deleted = await service.deleteServiceOffering(req.params.id);
    if (!deleted) {
      return res.status(404).json({ message: "Service offering not found" });
    }
    res.json({ message: "Service offering deleted successfully" });
  } catch (error) {
    console.error("Error deleting service offering:", error);
    res.status(500).json({ message: "Failed to delete service offering" });
  }
};
