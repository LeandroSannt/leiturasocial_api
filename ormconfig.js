const ambiente = process.env.NODE_ENV

if(ambiente === 'development'){

  module.exports ={
  "type":"postgres",
  "url":process.env.DATABASE_URL,
  "entities":[
    "./src/entities/*.ts"
  ],
  "migrations":[
    "./src/database/migrations/*.ts"
  ],
  "cli": {
    "migrationsDir": "./src/database/migrations",
    "entitiesDir": "./src/entities"
  }
}

}else{
  module.exports ={
  "extra":{
    "ssl":"true"
  },
  "type":"postgres",
  "url":process.env.DATABASE_URL,
  "entities":[
    "dist/entities/*.js"
  ],
  "migrations":[
    "dist/database/migrations/*.js"
  ],
  "cli": {
    "migrationsDir": "./src/database/migrations",
    "entitiesDir": "./src/entities"
  }
}
}

