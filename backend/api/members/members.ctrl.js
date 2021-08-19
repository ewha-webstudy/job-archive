"use strict";
const Member = require("../../models/membership");
const { Membership } = require('../../models');
const Login = require("./login");
const Signup = require("./signup");

const show = {
    home: (req, res) => {
        res.render("home/index");
    },    
    login: (req, res) =>{
        res.render("home/login");
    },
    signup: (req, res) =>{
        res.render("home/signup");
    }
}

const process ={
    login: async (req, res) => {
        const login = new Login(req.body);
        const response = await login.login();
        return res.json(response);
    },
    signup: async (req, res) => {
        const signup = new Signup(req.body);
        const response = await signup.signup();
        return res.json(response);
    }
};

module.exports = {
    show,
    process
};