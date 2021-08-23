const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');
const options = { 
  swaggerDefinition: { 
    openapi: "3.0.0",
    info: { 
<<<<<<< HEAD
      title: 'Dev Jobs', 
      version: '1.0.0', 
      description: 'Dev Jobs API with express', 
=======
      title: 'Members', 
      version: '1.0.0', 
      description: 'Members API with express', 
>>>>>>> backend/userapi
    }, 
    host: 'localhost:3001',
    basePath: '/' 
  },
  apis: ['./api/*.js', './api/jobs/*.js', './api/members/*.js', './swagger/*'] 
};

const specs = swaggerJsdoc(options);
module.exports = { 
  swaggerUi, specs 
};

