# Pixel- Shopify Winter 2022 Backend Intern Challenge
<p align="center"><img width="564" alt="Screen Shot 2021-09-17 at 3 10 56 AM" src="https://user-images.githubusercontent.com/59202054/133740125-e41e3ec6-12d4-4edb-9e05-f158a707aaa7.png"></p>
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
The addition of images and user authentication is done using firebase. Firebase generates a URL which is stored in a mongodb database for persistence. Once you're logged in, you can add any amount of images by clicking the upload button on the navigation bar:

<img width="728" alt="Screen Shot 2021-09-17 at 3 10 05 AM" src="https://user-images.githubusercontent.com/59202054/133740009-7f4949fa-e746-4027-b09d-2d16309cff70.png">

Once selected, you can add a title and choose to upload publicly or privately:

<img width="1440" alt="Screen Shot 2021-09-17 at 3 36 53 AM" src="https://user-images.githubusercontent.com/59202054/133743607-95549a6b-4481-4523-a163-1f2c0f066d8d.png">

The image uri is encrypted and stored in a mongodb database for maximum security of the images. 

## Removing Images
The deletion of images is authenticated using firebase. A user can only delete pictures that they uploaded. They do not have permission to delete any other image. To delete, go to "my images", and select the images you want to delete and click on delete:

<img width="928" alt="Screen Shot 2021-09-17 at 3 42 51 AM" src="https://user-images.githubusercontent.com/59202054/133745028-e3864dc1-91b8-4bd6-8f12-ed8e835364f1.png">

## Searching Images
You can search for images by typing keywords in the searchbar. 

Searching for Shopify:

<img width="670" alt="Screen Shot 2021-09-17 at 3 51 21 AM" src="https://user-images.githubusercontent.com/59202054/133745818-eb56d58d-fdf8-462d-b972-f014d70b512a.png">

Searching for River:

<img width="947" alt="Screen Shot 2021-09-17 at 3 48 57 AM" src="https://user-images.githubusercontent.com/59202054/133745797-15d56e41-7a91-49e4-87c3-21326fe7a091.png">















