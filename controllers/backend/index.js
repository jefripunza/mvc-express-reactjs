const path = require("path");
const fs = require("fs");

const { json, errorJson } = require('../../utils/response');
const { config } = require("../../config");

exports.request = async (req, res) => {
    const request = req.params.request;
    return json(res, {
        request,
    });
}

exports.request_mode = async (req, res) => {
    const {
        request,
        mode,
    } = req.params;
    return json(res, {
        request,
        mode,
    });
}