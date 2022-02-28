import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy, Profile } from "passport-facebook";

@Injectable()
export class FacebookStrategy extends PassportStrategy(Strategy, "facebook"){
    constructor(){
        super({
            clientID: "928603124490318",
            clientSecret: "695824b2d18d49040db5c890ccdc284c",
            callbackURL: "http://localhost:2053/facebook/callback",
            profileFields: ["emails", "name"],
        });
    }

    async validate(accessToken: string, refreshToken: string, profile: Profile, done: (err: any, user: any, info?: any) => void) {
        const payload = {
            accessToken,
            user: {
                email: profile.emails,
                firstName: profile.name.givenName,
                lastName: profile.name.familyName
            }
        }
        console.log(payload);
    }
}
