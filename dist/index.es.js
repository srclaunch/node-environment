import{EnvironmentType as e}from"@srclaunch/types";const t={id:"dev",type:e.Development,public:!1,name:"Development",description:"Development environment"},o={id:"test",type:e.NonProduction,public:!1,name:"Test",description:"Test environment"},r={id:"prod",type:e.Production,public:!0,name:"Production",description:"Production environment"};function v(){const n=process.env.NODE_ENV;return n==="dev"||n==="development"?t:n==="prod"||n==="production"?r:o}export{v as getEnvironment};
//# sourceMappingURL=index.es.js.map
