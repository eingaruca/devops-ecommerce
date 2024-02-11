const db = require('./db');
const helper = require('../helper');
const config = require('../config');

async function getMultiple(page = 1){

  const offset = helper.getOffset(page, config.listPerPage);

  const rows = await db.query(
    `SELECT * 
    FROM Users LIMIT ${offset},${config.listPerPage}`
  );
  const data = helper.emptyOrRows(rows);
  const meta = {page};

  return {
    data,
    meta
  }
}

async function create(user){

  console.log("==> " + user)
  console.log("==> " + user.name)
  const result = await db.query(
    `INSERT INTO Users 
    (name, lastname, email, password) 
    VALUES 
    ('${user.name}', '${user.lastname}', '${user.email}', '${user.password}')`
  );

  let message = 'Error in creating user';

  if (result.affectedRows) {
    message = 'User created successfully';
  }

  return {message};
}

async function update(id, user){
  const result = await db.query(
    `UPDATE users 
    SET name="${user.name}", lastname=${user.lastname}, email=${user.email}, 
    password=${user.password} 
    WHERE id=${id}` 
  );

  let message = 'Error in updating user';

  if (result.affectedRows) {
    message = 'Users updated successfully';
  }

  return {message};
}

async function remove(id){
  const result = await db.query(
    `DELETE FROM users WHERE id=${id}`
  );

  let message = 'Error in deleting user';

  if (result.affectedRows) {
    message = 'Users deleted successfully';
  }

  return {message};
}


module.exports = {
  getMultiple, 
  create, 
  update,
  remove,
};
