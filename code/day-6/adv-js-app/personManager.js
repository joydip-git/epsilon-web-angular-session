var personModule = require("./person");

function createPerson(name, id, salary) {
    var personRef = new personModule.personFn(name, id, salary);
    return personRef;
}

module.exports = {
    createFn: createPerson
}