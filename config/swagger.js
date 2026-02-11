const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const options = {
  definition: {
    openapi: '3.0.2',
    info: {
      title: 'Todo API Documentation',
      version: '1.0.0',
      description: 'Documentation interactive de mon API MERN Todo-List',
    },
    servers: [
      {
        url: process.env.NODE_ENV === 'production' 
             ? 'https://todo-as.onrender.com/v1/api' 
             : 'http://localhost:3000/v1/api',
        description: 'Serveur principal',
      },
    ],
      
    paths: {
        "/": {
            "get": {
                "summary": "Lister tous les todos",
                "operationId": "listTodos",
                "responses": {
                    "200": {
                        "description": "Un tableau JSON de todos",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "type": "array",
                                    "items": {
                                        "type": "object",
                                        "required": [
                                            "id",
                                            "title",
                                            "completed"
                                        ],
                                        "properties": {
                                            "id": {
                                                "type": "string",
                                                "example": "1"
                                            },
                                            "title": {
                                                "type": "string",
                                                "example": "Buy milk"
                                            },
                                            "priority": {
                                                "type": "string",
                                                "nullable": true,
                                                "example": "Remember to buy whole milk"
                                            },
                                            "completed": {
                                                "type": "boolean",
                                                "example": false
                                            },
                                            "createdAt": {
                                                "type": "string",
                                                "format": "date-time",
                                                "example": "2025-01-01T10:00:00Z"
                                            },
                                            "updatedAt": {
                                                "type": "string",
                                                "format": "date-time",
                                                "example": "2025-01-01T10:30:00Z"
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            },
            "post": {
                "summary": "Créer un nouveau todo",
                "operationId": "createTodo",
                "requestBody": {
                    "required": true,
                    "content": {
                        "application/json": {
                            "schema": {
                                "type": "object",
                                "required": [
                                    "title"
                                ],
                                "properties": {
                                    "title": {
                                        "type": "string",
                                        "example": "Buy milk"
                                    },
                                    "priority": {
                                        "type": "string",
                                        "nullable": true,
                                        "example": "Remember to buy whole milk"
                                    }
                                }
                            }
                        }
                    }
                },
                "responses": {
                    "201": {
                        "description": "Todo créé",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "type": "object",
                                    "required": [
                                        "id",
                                        "title",
                                        "completed"
                                    ],
                                    "properties": {
                                        "id": {
                                            "type": "string",
                                            "example": "1"
                                        },
                                        "title": {
                                            "type": "string",
                                            "example": "Buy milk"
                                        },
                                        "priority": {
                                            "type": "string",
                                            "nullable": true,
                                            "example": "Remember to buy whole milk"
                                        },
                                        "completed": {
                                            "type": "boolean",
                                            "example": false
                                        },
                                        "createdAt": {
                                            "type": "string",
                                            "format": "date-time",
                                            "example": "2025-01-01T10:00:00Z"
                                        },
                                        "updatedAt": {
                                            "type": "string",
                                            "format": "date-time",
                                            "example": "2025-01-01T10:30:00Z"
                                        }
                                    }
                                }
                            }
                        }
                    },
                    "200": {
                        "description": "Todo créé (fallback 200 non standard)",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "type": "object",
                                    "required": [
                                        "id",
                                        "title",
                                        "completed"
                                    ],
                                    "properties": {
                                        "id": {
                                            "type": "string",
                                            "example": "1"
                                        },
                                        "title": {
                                            "type": "string",
                                            "example": "Buy milk"
                                        },
                                        "priority": {
                                            "type": "string",
                                            "nullable": true,
                                            "example": "Remember to buy whole milk"
                                        },
                                        "completed": {
                                            "type": "boolean",
                                            "example": false
                                        },
                                        "createdAt": {
                                            "type": "string",
                                            "format": "date-time",
                                            "example": "2025-01-01T10:00:00Z"
                                        },
                                        "updatedAt": {
                                            "type": "string",
                                            "format": "date-time",
                                            "example": "2025-01-01T10:30:00Z"
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        },
        "/{id}": {
            "parameters": [
                {
                    "name": "id",
                    "in": "path",
                    "required": true,
                    "description": "ID du todo",
                    "schema": {
                        "type": "string"
                    }
                }
            ],
            "patch": {
                "summary": "Mettre à jour un todo existant",
                "operationId": "updateTodo",
                "requestBody": {
                    "required": true,
                    "content": {
                        "application/json": {
                            "schema": {
                                "type": "object",
                                "properties": {
                                    "title": {
                                        "type": "string",
                                        "example": "Buy oat milk"
                                    },
                                    "priority": {
                                        "type": "string",
                                        "nullable": true,
                                        "example": "Changed to oat milk"
                                    },
                                }
                            }
                        }
                    }
                },
                "responses": {
                    "200": {
                        "description": "Todo mis à jour",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "type": "object",
                                    "required": [
                                        "id",
                                        "title"
                                    ],
                                    "properties": {
                                        "id": {
                                            "type": "string",
                                            "example": "1"
                                        },
                                        "title": {
                                            "type": "string",
                                            "example": "Buy oat milk"
                                        },
                                        "priority": {
                                            "type": "string",
                                            "nullable": true,
                                            "example": "Changed to oat milk"
                                        },
                                        "completed": {
                                            "type": "boolean",
                                            "example": true
                                        },
                                        "createdAt": {
                                            "type": "string",
                                            "format": "date-time",
                                            "example": "2025-01-01T10:00:00Z"
                                        },
                                        "updatedAt": {
                                            "type": "string",
                                            "format": "date-time",
                                            "example": "2025-01-01T11:00:00Z"
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            },
            "delete": {
                "summary": "Supprimer un todo",
                "operationId": "deleteTodo",
                "responses": {
                    "200": {
                        "description": "Todo supprimé",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "type": "object",
                                    "properties": {
                                        "success": {
                                            "type": "boolean",
                                            "example": true
                                        }
                                    }
                                }
                            }
                        }
                    },
                    "204": {
                        "description": "Todo supprimé, pas de contenu"
                    }
                }
            }
        },
        "/{id}/complete": {
            "parameters": [
                {
                    "name": "id",
                    "in": "path",
                    "required": true,
                    "description": "ID du todo à compléter",
                    "schema": {
                        "type": "string"
                    }
                }
            ],
            "put": {
                "summary": "Marquer un todo comme complété",
                "operationId": "completeTodo",
                "responses": {
                    "200": {
                        "description": "Todo marqué comme complété",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "type": "object",
                                    "required": [
                                        "id",
                                        "title",
                                        "completed"
                                    ],
                                    "properties": {
                                        "id": {
                                            "type": "string",
                                            "example": "1"
                                        },
                                        "title": {
                                            "type": "string",
                                            "example": "Buy milk"
                                        },
                                        "priority": {
                                            "type": "string",
                                            "nullable": true,
                                            "example": "Remember to buy whole milk"
                                        },
                                        "completed": {
                                            "type": "boolean",
                                            "example": true
                                        },
                                        "createdAt": {
                                            "type": "string",
                                            "format": "date-time",
                                            "example": "2025-01-01T10:00:00Z"
                                        },
                                        "updatedAt": {
                                            "type": "string",
                                            "format": "date-time",
                                            "example": "2025-01-01T11:00:00Z"
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    
  },
  apis: ['./routes/*.js'], 
  
};

const specs = swaggerJsDoc(options);

module.exports = {
  swaggerUi,
  specs
};