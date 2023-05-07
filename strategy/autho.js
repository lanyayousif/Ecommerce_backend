import passport from "passport";
import { Strategy as localStrategy } from "passport-local";
import users from "../models/UserModel.js";
import { ExtractJwt, Strategy as JWTStrategy } from "passport-jwt";
import dotenv from "dotenv";

dotenv.config();//boi accessi file .env bin

passport.use(
  "signup",
  new localStrategy( //object ik la localstorage aka drwst akain
    {
      usernameField: "email",
      passwordField: "password",
      passReqToCallback: true,
    },
    async (req, email, password, done) => {//email u password haman nawi model akaia
      try {
        const user = await users.create({
          email,
          password,
          username: req.body.username,
        });
      return done(null, user);
      } catch (error) {
        done(error);
      }
    }
  )
);

passport.use(
  "login",
  new localStrategy(
    {
      usernameField: "email",
      passwordField: "password",
    },
    async (email, password, done) => {
      try {
        const user = await users.findOne({ email });

        if (!user)
          return done(null, false, { message: "invaildent credentials" });//false mabasti awaia user buni haia yan na
        const validate = await user.isValiddPassword(password);
        if (!validate)
          return done(null, false, { message: "invaildent credentials" });

        return done(null, user, "login successfull");
      } catch (error) {}
    }
  )
);
// am strategy boverifiy token akaman bakar ahenin
passport.use(
  new JWTStrategy(
    {
      secretOrKey: process.env.TOP_SECRET,
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    },
    async (token, done) => {
      try {
        return done(null, token.user);
      } catch (error) {
        return done(error);
      }
    }
  )
);
