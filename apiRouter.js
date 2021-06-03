// Imports
const express = require('express');
const usersCtrl = require('./routes/usersControllers');

//Router
exports.router = (() => {
    const apiRouter = express.Router();

    //Users routes
    apiRouter.route('/users/register/').post(usersCtrl.register);

    return apiRouter;
})();
