"use server"

import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient ()
const bcrypt = require ('bcrypt')
const dotenv = require ('dotenv')
dotenv.config ()

export async function storeChatMessage (username: string, message: string) {}

export async function storeQueryAnswer (username: string, query: string) {
  let reply: any = undefined
  await fetch ('http://0.0.0.0:6969/llama', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify ({ question: query })
  }).then (res => {
    if (!res.ok) 
      throw new Error ('Error')
    return res.text ()
  }).then (data => {
    reply = data
  }).catch (err => {})
  
  const user = await prisma.user.findUnique ({
    where: {
      username: username
    }
  })

  if (user) {
    await prisma.chatInteraction.create ({
      data: {
        query: query,
        answer: reply,
        user: {
          connect: {
            id: user.id
          }
        }
      }
    })
  }

  return reply
}

export async function createUser (username: string, password: string) {
  try {
    let confirmation = {
      exist: false,
      success: false,
    }

    const user = await prisma.user.findUnique ({
      where: {
          username: username
      }
    })

    if (user) {
      confirmation.exist = true
      confirmation.success = false
      return confirmation
    }

    let saltRounds: number = 5
    if (process.env.SALT_ROUNDS)
      saltRounds = parseInt (process.env.SALT_ROUNDS)

    await bcrypt
      .hash (password, saltRounds)
      .then (async (hash: string) => {
        const user = await prisma.user.create ({
          data: {
            username: username,
            password: hash
          },
          include: {
            chatSessions: true
          }
        })
      })

    confirmation.exist = false
    confirmation.success = true
    return confirmation
  } catch (error) {
    console.error (error)
  } finally {
    await prisma.$disconnect ()
  }
}

export async function loginUser (username: string, password: string) {
  try {
    let validity = {
      exist: true,
      credentials: false
    }

    const user = await prisma.user.findUnique ({
      where: {
          username: username
      }
    })
  
    if (user) {
      const result = bcrypt.compare (password, user.password)
      if (result) {
        validity.exist = true
        validity.credentials = true
      }
    } else {
      validity.exist = false
      validity.credentials = false
    }
  
    return validity

  } catch (error) {
    console.error (error)
  }
}