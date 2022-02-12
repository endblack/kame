const fs = require('fs-extra')
const crypto = require('crypto')

const inte = JSON.parse(fs.readFileSync('./banco/rpg/inte.json'))

const getUser = (sender) => {
            let position = false
            Object.keys(inte).forEach((i) => {
                if (inte[i].user === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return inte[position].user
            }
        }

const getAge = (sender) => {
            let position = false
            Object.keys(inte).forEach((i) => {
                if (inte[i].user === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return inte[position].idade
            }
        }
        
  const getSeri = (sender) => {
            let position = false
            Object.keys(inte).forEach((i) => {
                if (inte[i].user === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return inte[position].id
            }
        }
        
const getNome = (sender) => {
            let position = false
            Object.keys(inte).forEach((i) => {
                if (inte[i].user === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return inte[position].nome
            }
        }
        
const getRegisterNo = (sender) => {
            let position = false
            Object.keys(inte).forEach((i) => {
                if (inte[i].user === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return inte[position].id
            }
        }
        
const getRegisteredRandomId = () => {
            return inte[Math.floor(Math.random() * inte.length)].id
        }

const addRegisteredUser = (userid, sender, age, time, serials) => {
            const obj = { id: userid, name: sender, age: age, time: time, serial: serials }
            inte.push(obj)
            fs.writeFileSync('./database/bot/registered.json', JSON.stringify(inte))
        }

const createSerial = (size) => {
            return crypto.randomBytes(size).toString('hex').slice(0, size)
        }

const checkRegisteredUser = (sender) => {
            let status = false
            Object.keys(inte).forEach((i) => {
                if (inte[i].user === sender) {
                    status = true
                }
            })
            return status
        }

module.exports = {
	getUser,
	getAge,
	getSeri,
	getNome,
	getRegisterNo,
	getRegisteredRandomId,
	addRegisteredUser,
	createSerial,
	checkRegisteredUser,
}