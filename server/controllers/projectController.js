const asyncHandler = require('express-async-handler');
const Project = require('../models/projectModel');

const getProjects = asyncHandler(async (req, res) => {
    const projects = await Project.find();
    res.status(200).json(projects);
})

const postProject = asyncHandler(async (req, res) => {
    if(!req.body || !req.body.title) {
        res.status(400);
        throw new Error('Please input a project');
    }

    const project = await Project.create({ admin: req.admin.id, title: req.body.title, fileurl: req.body.fileurl, description: req.body.description });
    res.status(200).json(project);
})

const Admin = require('../models/adminModel');

const updateProject = asyncHandler(async (req, res) => {
    const project = await Project.findById(req.params.id);

    if(!project) {
        res.status(400);
        throw Error('Project not found');
    }

    const updatedProject = await Project.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(updatedProject);
})

const deleteProject = asyncHandler(async (req, res) => {
    const project = await Project.findById(req.params.id);

    if(!project){
        res.status(400);
        throw new Error('No project found');
    }

    await Project.findByIdAndDelete(req.params.id);

    res.status(200).json({ id: req.params.id });
})

module.exports = { getProjects, postProject, updateProject, deleteProject };