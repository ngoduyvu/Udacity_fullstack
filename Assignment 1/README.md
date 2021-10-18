# Udacity-Image-Processing-API
This is the first assignment for Udacity Full Stack JavaScript Nano Degree. This assignment require an Image Processing API which resizes and saves the images to the server

## What I learnt
- Review JavaScript
- NodeJS and Node Package Manager (NPM)
- Use TypeScript to develop application
- Unit testing and test-driven development (TDD) using Jasmine
- Working with Express and using the File System Module

## Check the Assignment
To run check Assignment, we can run Eslint to check syntax. We run Prettier to check style and run Jasmine to run test senarios.
## 1. Run Lint
```
npm run lint
```
## 2. Run Prettier
```
npm run prettier
```

## 3. Run Test
```
npm run test
```

## How to build and start the server

1. Homepage endpoint
http://localhost:4000

2. Resize endpoint
Build the API with npm run build and then execute it with npm run start. Go to http://localhost:4000/ and then create your query `?fileName=<name_of_image>&height=<desired_height>&width=<desired_width>`
For example: http://localhost:4000/convert?image=fjord&width=250&height=250

![alt text](https://github.com/ngoduyvu/Udacity_fullstack/tree/main/Assignment%201/image/resize_400_500.png)