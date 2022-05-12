const local = require('./localStrategy');
const { User,Pro } = require('../models');

module.exports = (passport) => {
  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser((id, done) => {
    User.find({
      where: { id },
      include: [{
        model: User,
        attributes: ['email', 'nick'],
        as: 'Followers',
      }, {
        model: User,
        attributes: ['email', 'nick'],
        as: 'Followings',
      }, /*{
        model: Pro,
        attributes: ['pnick', 'pnum'],
      }*/],
    })
      .then(user => done(null, user))
      .catch(err => done(err));
  });

  local(passport);
};
