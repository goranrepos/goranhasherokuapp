const express = require('express');
const router = express.Router();
const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const { check, validationResult } = require('express-validator');
const normalize = require('normalize-url');

//models
const User = require('../../models/User');

// @route    POST api/users
// @desc     Register user
// @access   Public
router.post(
  '/',
  [
    check('name', 'Name is required').not().isEmpty(),
    check('email', 'Please include a valid email').isEmail(),
    check(
      'password',
      'Please enter a password with 6 or more characters'
    ).isLength({ min: 6 }),
    check('pincode', 'Please provide valid pincode').equals('L0nd@n9Zz4f'),
    check('password2', "Passwords Don't Match")
      .exists()
      .custom((value, { req }) => value === req.body.password),
  ],
  //async because of await in front of the User.findone
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      //console.log('valid errors');
      return res.status(400).json({ errors: errors.array() });
    }
    //console.log('thanks111111');
    const { name, email, password } = req.body;

    try {
      //search if user exist in db using mongoose
      //this returns a promise, hence the usage of await, and async in the function
      //search by email
      let user = await User.findOne({ email });

      if (user) {
        return res
          .status(400)
          .json({ errors: [{ msg: 'User already exists' }] });
      }

      //if user doesn't exist

      //get user image avatar
      //options, 200 size, pg rating, mm default image
      const avatar = normalize(
        gravatar.url(email, {
          s: '200',
          r: 'pg',
          d: 'mm',
        }),
        { forceHttps: true }
      );

      //create new instance of user
      user = new User({
        name,
        email,
        avatar,
        password,
      });

      //encrypt password
      //create salt, returns promise
      const salt = await bcrypt.genSalt(10);

      //returns promise
      user.password = await bcrypt.hash(password, salt);

      //save user, returns promise, returns an id in the user object
      await user.save();

      //return jwt jsonwebtoken

      //create payload, that will be send back to identify user
      //mongoose can do abstraction and user.id instead of mongodb atlas _id
      const payload = {
        user: {
          id: user.id,
        },
      };

      //create token with expire date and send back the token
      //if unsuccessful
      jwt.sign(
        payload,
        config.get('jwtSecret'),
        { expiresIn: 360000 },
        (err, token) => {
          if (err) throw err;
          //res.json sends status 200, user id can be send as well instead
          res.json({ token });
        }
      );
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  }
);

module.exports = router;
