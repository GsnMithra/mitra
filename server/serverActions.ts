"use server"

const database = require ('../database/schema');
const bcrypt = require ('bcrypt');
const dotenv = require ('dotenv');
dotenv.config ();

export async function createUser (username: string, password: string) {
  console.log (username, password);
  try {
    let confirmation = {
      exist: false,
      success: false,
    }
    const user = database.findOne ({ username: username });
    if (user) {
      confirmation.exist = true;
      confirmation.success = false;
      return confirmation;
    }

    await bcrypt
      .hash (password, 10)
      .then (async (hash: string) => {
          const user = new database.User ({
            username,
            password: hash,
          });

          await user.save ();
        });

    confirmation.exist = false;
    confirmation.success = true;
    return confirmation;
  } catch (error) {
    console.error (error);
  }
}

export async function loginUser (username: string, password: string) {
  console.log (username, password);
  try {
    let validity = {
      exist: true,
      credentials: false
    }

    const user = database.findOne ({ username: username })
    if (user) {
      bcrypt.compare (password, user.password, (error: any, result: boolean) => {
        if (result) {
          validity.credentials = true;
        } else {
          validity.credentials = false;
        }
      });
    } else {
      validity.exist = false;
    }

    return validity;
  } catch (error) {
    console.error (error);
  }
}