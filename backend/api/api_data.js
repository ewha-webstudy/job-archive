const convert = require('xml-js'); //module 설치
const request = require('request'); //module 설치
const fs = require('fs')


const HOST = 'http://openapi.work.go.kr/opi/opi/opia/wantedApi.do'
const SERVICE_KEY = 'WNKREKMMVKGZ30G24C2D82VR1HJ'

var requestUrl = `${HOST}?authKey=${SERVICE_KEY}&callTp=L&returnType=XML&startPage=1&display=10
`

request.get(requestUrl, (err,res,body) =>{
    if(err){
        console.log(`err => ${err}`)
    }
    else {
        if(res.statusCode == 200){
            var result = body
            console.log(`body data => ${result}`)
            var xmlToJson = convert.xml2json(result, {compact: true, spaces: 4});
            fs.writeFile('./xmlToJson.json', xmlToJson, function(err){
                if(err) throw err;
            });
            console.log(`xml to json => ${xmlToJson}`)

        }

    }
})