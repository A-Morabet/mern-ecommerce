<a name="readme-top"></a>
# MERN Stack | ECommerce Website

</br>
<div align="center">
<img src="https://github.com/A-Morabet/mern-ecommerce/blob/main/screenshot.png" width="600"/>
</div>
</br>

## Summary

This is a full-featured e-commerce website built with the MERN Stack (MongoDB, Express.js, React, Node.js) and React-Redux for efficient state management. It offers a secure and user-friendly shopping experience, featuring:

* Secure Authentication: Login and registration using JWTs, with Bcrypt.js encryption for password security.
* State Management with React-Redux: Organized state handling for a seamless user experience.
* Error Handling: Centralized middleware-based error handling for robust functionality.
* Shopping Cart & Checkout: Users can add products to their cart, proceed to checkout, place orders, and complete payments.
* Order Tracking: Users can monitor the status of their orders via their profile page.
* Admin Dashboard: Administrators can add, edit, and remove products, manage all site orders, and handle user accounts.
* Clear UI: Designed for easy navigation and a clean product display. Styled with Bootstrap.

# Instructions

* Make sure to set up the environment variables in root and frontend folder using the provided example.env and example2.env files, explanations can be found inside them.
* After setting up the variables, use "npm run data:import" to seed the newly-created MongoDB (command is run from the root folder).
* Once done run command "npm run dev" which runs both server and client and it should work.
* Command List: 
    "start": "node backend/server.js",
    "server": "nodemon backend/server.js",
    "client": "npm start --prefix frontend",
    "dev": "concurrently \"npm run server\" \"npm run client\" ",
    "data:import": "node backend/seeder.js",
    "data:destroy": "node backend/seeder.js -d",
    "build": "npm install && npm install --prefix frontend && npm run build --prefix frontend"

## Contact

Amine Morabet - hey@aminemorabet.com

<<<<<<< HEAD
Project Link: [https://greenasaur.onrender.com/]
=======
Project Link: [https://greenasaur.onrender.com/](https://greenasaur.onrender.com/)
>>>>>>> 8d6c75b4c5e212ac26b40aa90b895b1ca2fee05d
