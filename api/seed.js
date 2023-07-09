const neo4j = require("neo4j-driver");
const { faker } = require("@faker-js/faker");

const driver = neo4j.driver(
    process.env.NEO4J_URI || "bolt://0.0.0.0:7687",
    neo4j.auth.basic(process.env.NEO4J_USER, process.env.NEO4J_PASSWORD)
);

const session = driver.session();