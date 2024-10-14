
const swaggerDocument = {
  openapi: "3.0.0",
  info: {
    title: "Player API",
    version: "1.0.0",
    description: "API for managing players and favorite players."
  },
  servers: [
    {
      url: "http://localhost:3000/api"
    }
  ],
  paths: {
    "/getAll": {
      get: {
        summary: "Get all players",
        parameters: [
          {
            name: "nextPage",
            in: "query",
            required: false,
            schema: {
              type: "string"
            }
          },
          {
            name: "search",
            in: "query",
            required: false,
            schema: {
              type: "string"
            }
          }
        ],
        responses: {
          "200": {
            description: "A list of players",
            content: {
              "application/json": {
                schema: {
                  type: "array",
                  items: {
                    type: "object",
                    properties: {
                      id: {
                        type: "integer"
                      },
                      name: {
                        type: "string"
                      }
                    }
                  }
                }
              }
            }
          },
          "500": {
            description: "Internal server error"
          }
        }
      }
    },
    "/getAllFav": {
      get: {
        summary: "Get all favorite players",
        responses: {
          "200": {
            description: "A list of favorite players",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    data: {
                      type: "array",
                      items: {
                        type: "object",
                        properties: {
                          player_id: {
                            type: "integer"
                          },
                          name: {
                            type: "string"
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          "500": {
            description: "Internal server error"
          }
        }
      }
    },
    "/addFavPLayer": {
      post: {
        summary: "Add a favorite player",
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  id: {
                    type: "integer"
                  },
                  name: {
                    type: "string"
                  }
                },
                required: ["id", "name"]
              }
            }
          },
          responses: {
            "201": {
              description: "Favorite player added successfully",
              content: {
                "application/json": {
                  schema: {
                    type: "object",
                    properties: {
                      message: {
                        type: "string"
                      }
                    }
                  }
                }
              }
            },
            "500": {
              description: "Internal server error"
            }
          }
        }
      }
    },
    "/removeFavPLayer": {
      delete: {
        summary: "Remove a favorite player",
        parameters: [
          {
            name: "id",
            in: "query",
            required: true,
            schema: {
              type: "integer"
            }
          }
        ],
        responses: {
          "204": {
            description: "Favorite player removed successfully"
          },
          "500": {
            description: "Internal server error"
          }
        }
      }
    }
  }
};



export default swaggerDocument;
