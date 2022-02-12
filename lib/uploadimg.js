const fetch = require('node-fetch')
const fs = require('fs')
const FormData = require('form-data')
 
 
    const uploadimg = async (image) => new Promise(async (resolve, reject) => {
    try {
    var form = new FormData()
    form.append('image', image)
     
    const response = await fetch('https://api.imgbb.com/1/upload?expiration=3600&key=9160c6f659aba43c808df28f130d67cc&name=megah-chan', {
        method: 'POST',
        body: form
    })
    if (!response.ok) reject(`Imagem não encontrada!`);
    const result = await response.json()
    const rr = result
    console.log(rr.data.image)
    return resolve(rr)
  } catch (e) {
  console.log(e)
  }
  })
exports.uploadimg = uploadimg