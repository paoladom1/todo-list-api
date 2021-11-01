import Activity from '../models/Activity';

export const getAllActivities = async (req, res) => {
  try {
    const activities = await Activity.find({}, {}, { sort: '-createdAt' });
    res.json({
      status: 'success',
      data: activities,
      message: 'Activity fetched successfully',
    });
  } catch (error) {
    console.error(error);
    res.json({
      status: 'error',
      data: null,
      message: error,
    });
  }
};

export const createActivity = (req, res) => {
  try {
    const activity = new Activity({ text: req.body.text });
    activity.save();
    res.json({
      status: 'success',
      data: activity,
      message: 'Activity created successfully',
    });
  } catch (error) {
    console.error(error);
    res.json({
      status: 'error',
      data: null,
      message: error,
    });
  }
};

export const deleteActivity = async (req, res) => {
  try {
    const deleted = await Activity.findByIdAndRemove(req.params.id);
    res.json({
      status: 'success',
      data: deleted,
      message: 'Activity deleted successfully',
    });
  } catch (error) {
    console.error(error);
    res.json({
      status: 'error',
      data: null,
      message: error,
    });
  }
};
