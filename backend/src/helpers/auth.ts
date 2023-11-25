// Make some middleware here
// I.e.

//

/*

import jwt from "jsonwebtoken";
import { SESSION_SECRET } from "../utils/env";

 * Authentication function
 * This checks if the user is logged in

export const isLoggedIn = async (request: any, response: any, next: any) => {
    const authHeader = request.headers.authorization;
  
    const token = authHeader && authHeader.split(" ")[1];
  
    if (!token) {
      return response.status(401).send({ message: "Unauthorized" });
    }
  
    jwt.verify(token, SESSION_SECRET!, async (err: any, data: any) => {
      if (err) {
        return response.status(403).send({ message: "Forbidden" });
      }
  
      // Logic if account doesn't exist
  
      // Add user to request
      request.user = data.user;
  
      next();
    });
  
    // if (request.isAuthenticated()) {
    // return next();
    // }
  
    // return response.status(401).send({ message: "Unauthorized" });
  };
  
   * Authentication function
   * This checks if the user is logged in and an admin
  // export const isAdmin = async (request: any, response: any, next: any) => {
  //   if (request.user && request.user.userType) {
  //     return next();
  //   }
  
  //   return response.status(401).send({ message: "Unauthorized" });
  // };

  */

export default {};
