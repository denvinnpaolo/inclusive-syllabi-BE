const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const morgan = require('morgan');

module.exports = server => {
    server.use(express.json());
    server.use(helmet());
    server.use(cors());
    server.use(morgan(':method :url :status :res[content-length] - :response-time ms'))
}