/**
* AUTO GENERATED SCRAPE FILE
* Request by: 6289673462138@s.whatsapp.net
* Folder: capcut
*/

module.exports = {
  data: `const axios = require('axios')

async function bicCapcut(url) {
  try {
    const api = 'https://3bic.com/api/download'

    const payload = {
      url
    }

    const res = await axios.post(api, payload, {
      headers: {
        accept: 'application/json, text/plain, */*',
        'content-type': 'application/json',
        origin: 'https://3bic.com',
        referer: 'https://3bic.com/id',
        'user-agent': 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/142.0.0.0 Mobile Safari/537.36',
        'accept-language': 'id-ID,id;q=0.9,en-US;q=0.8,en;q=0.7'
      }
    })

    return {
      code: 200,
      timestamp: Date.now(),
      data: res.data
    }

  } catch (e) {
    return {
      code: 500,
      timestamp: Date.now(),
      message: e.message
    }
  }
}

;(async () => {
  return await bicCapcut('https://www.capcut.com/tv2/ZSywwHg8x/')
})()`
}
