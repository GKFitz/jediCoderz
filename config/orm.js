/** FOR DOGS TABLE  */

// Import MySQL connection.
const connection = require('./connection.js');

const printQuestionMarks = (num) => {
  const arr = [];

  for (let i = 0; i < num; i++) {
    arr.push('?');
  }

  return arr.toString();
};

const objToSql = (ob) => {
  const arr = [];

  for (const key in ob) {
    let value = ob[key];
    if (Object.hasOwnProperty.call(ob, key)) {
      if (typeof value === 'string' && value.indexOf(' ') >= 0) {
        value = `'${value}'`;
      }
      // e.g. {name: 'Lana Del Grey'} => ["name='Lana Del Grey'"]
      // e.g. {client_dog: true} => ["petId=true"]
      arr.push(`${key}=${value}`);
    }
  }
  return arr.toString();
};

// Object for all our SQL statement functions.
const orm = {
  all(dogs, cb) {
    const queryString = `SELECT * FROM ${dogs};`;
    connection.query(queryString, (err, result) => {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  create(dogs, cols, vals, cb) {
    let queryString = `INSERT INTO ${dogs}`;

    queryString += ' (';
    queryString += cols.toString();
    queryString += ') ';
    queryString += 'VALUES (';
    queryString += printQuestionMarks(vals.length);
    queryString += ') ';

    console.log(queryString);

    connection.query(queryString, vals, (err, result) => {
      if (err) {
        throw err;
      }

      cb(result);
    });
  },
  // An example of objColVals would be {client_dog, petId}
  update(dogs, objColVals, condition, cb) {
    let queryString = `UPDATE ${dogs}`;

    queryString += ' SET ';
    queryString += objToSql(objColVals);
    queryString += ' WHERE ';
    queryString += condition;

    console.log(queryString);
    connection.query(queryString, (err, result) => {
      if (err) {
        throw err;
      }

      cb(result);
    });
  },
  delete(dogs, condition, cb) {
    let queryString = `DELETE FROM ${dogs}`;
    // DELETE FROM DOGS WHERE id = req.params.id
    queryString += ' WHERE ';
    queryString += condition;

    console.log(queryString);
    connection.query(queryString, (err, result) => {
      if (err) {
        throw err;
      }

      cb(result);
    });
  }
};

// Export the orm object for the model (dog.js).
module.exports = orm;
