import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy, VerifyCallback, Profile  } from 'passport-google-oauth20';

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy, "google"){
    constructor(){
        super({
            clientID: "275145548983-3nelvbcbp5s0e6gm4n1to66montd8meu.apps.googleusercontent.com",
            clientSecret: "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",
            callbackURL: "http://localhost:2053/google/callback",
            passReqToCallback: true,
            scope: ["email", "profile"],
        });
    }

    async validate(accessToken: string, refreshToken: string, profile: Profile, done: VerifyCallback ) {
        console.log(accessToken)
        const payload = {
            accessToken,
            user: {
                // email: profile.emails[0].value,
                firstName: profile.name.givenName,
                lastName: profile.name.familyName
            }
        }
        console.log(payload);
    }
}
