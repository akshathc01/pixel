# Pixel- Shopify Winter 2022 Backend Intern Challenge
This is my submission for Shopify's Winter 2022 Backend intern challenge. 
## Table of Contents

- [Table of Contents](#table-of-contents)
- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Setup](#setup)



## Overview
Pixel is an image repository built in response to Shopify's Winter 2022 Backend intern challenge. The challenge can be found [here](https://docs.google.com/document/d/1eg3sJTOwtyFhDopKedRD6142CFkDfWp1QvRKXNTPIOc/edit). It supports all CRUD operations, which are shown in detail below. It also supports user authentication and private images. 

## Features
- User can add any amount of public images that would be visible to the entire community. 
- User can add private images that would be visible only to the user. 
- User can delete any amount of private and public images that they uploaded. 
- User cannot delete any image that was not uploaded by them. 
- User can search for images using the search bar

## Tech Stack
I have used the following technologies and libraries:
- Node.js
- Express.js
- Mongodb
- Firebase
- React.js
- Bootstrap
- HTML
- CSS

## Setup
1. Clone the repository and download it locally. You can do this by clicking the "Download Zip" button at the top right, or by executing the following command in your terminal:
```bash
cd <directory> # replace <directory> with the directory you want Pixel to be stored in. 
git clone https://github.com/akshathc01/pixel.git
```
2. Install all dependencies. This can be done by executing the following commands:
```bash
cd ./pixel/
npm install
cd ./../pixel-server/
npm install
cd ./../
```
3. Connect the database. This can be done by executing the following commands:
```bash
cd ./pixel-server/
npm start
```
4. Start the app. This can be done by executing the following commands:
```bash
cd ./pixel/
npm start
```

## Adding Images
The addition of images is done using firebase. 















