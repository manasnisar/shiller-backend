const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

const AdminSchema = mongoose.Schema(
    {
        allowUploads: {
            type: Boolean,
            default: true,
        },
        allowLeaderBoard: {
            type: Boolean,
            default: true,
        },
    }
);

// add plugin that converts mongoose to json
AdminSchema.plugin(toJSON);
AdminSchema.plugin(paginate);


const Admin = mongoose.model('Admin', AdminSchema);

module.exports = Admin;
