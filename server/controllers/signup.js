/* eslint-disable linebreak-style */
/* eslint-disable object-curly-newline */
/* eslint-disable camelcase */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/no-unresolved */
/* eslint-disable eol-last */
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import bcrypt from 'bcrypt';
import validateSignup from '../helpers/signup';
import users from '../models/users';

dotenv.config();

const signup = (req, res) => {
  const { error } = validateSignup.validation(req.body);
  if (error) {
    res.status(400).json({
      status: 400,
      error: error.details[0].message,
    });
    return;
  }

  const id = parseInt(users.length + 1, 10);
  const findUser = users.find(u => u.email === req.body.email);
  if (findUser) {
    res.status(403).json({
      status: 403,
      error: 'Sorry, email has been taken try another one',
    });
    return;
  }

  const password = bcrypt.hashSync(req.body.password, 10);
  const { email, first_name, last_name, phone_number, address, is_admin } = req.body;

  users.push({
    id, email, first_name, last_name, password, phone_number, address, is_admin,
  });

  const payload = {
    id,
    email,
    first_name,
    last_name,
    phone_number,
    address,
    is_admin,
  };

  const token = jwt.sign(payload, process.env.TOKEN, { expiresIn: '24hrs' });

  res.status(201).json({
    status: 'success',
    data: {
      token,
      id,
      first_name,
      last_name,
      email,
    },
  });
};

export default signup;