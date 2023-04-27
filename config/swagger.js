import swaggerJSDoc from "swagger-jsdoc"
const option={
    definition:{
        openapi:"3.0.3",
        info:{
            title:"skin care and makeup app",
            description:"an aplication for Ecommerce product skin care and makeup",
            version:"1.0.0"
        },     
    },
    servers:[{url:"http://localhost:5000"}],
    apis:["./routes/*.js"]
}
export const swaggerSpecs=swaggerJSDoc(option)