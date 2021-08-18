const convert = require('xml-js');
const request = require('request');
const fs = require('fs');
const { type } = require('os');


const HOST = 'http://openapi.work.go.kr/opi/opi/opia/wantedApi.do'
const SERVICE_KEY = 'WNKREKMMVKGZ30G24C2D82VR1HJ'
const OCCU = '133301|133200|133100|133101|133300'
const AUTHNO = 'KF10952108130008'

var requestUrl = `${HOST}?authKey=${SERVICE_KEY}&callTp=L&returnType=XML&startPage=1&display=100&occupation=${OCCU}`
var d_requestUrl = `${HOST}?authKey=${SERVICE_KEY}&callTp=D&returnType=XML&wantedAuthNo=${AUTHNO}&infoSvc=VALIDATION`

request.get(requestUrl, (err,res,body) =>{
    if(err){
        console.log(`err => ${err}`)
    }
    else {
        if(res.statusCode == 200){
            var result = body
            // console.log(`body data => ${result}`)
            var xmlToJson = convert.xml2json(result, {textFn:RemoveJsonTextAttribute, compact: true, spaces: 4});
            function RemoveJsonTextAttribute(value,parentElement){
                try{
                    var keyNo = Object.keys(parentElement._parent).length;
                    var keyName = Object.keys(parentElement._parent)[keyNo-1];
                    parentElement._parent[keyName] = value;
                }
                catch(e){}
            }
            fs.writeFile('./xmlToJson.json', xmlToJson, function(err){
                if(err) throw err;
            });
            
            // console.log(`xml to json => ${xmlToJson}`)
            // console.log('type = ' + typeof(JSON.parse(xmlToJson)));
            var jsonObject = JSON.parse(xmlToJson);

            let wantedObject = jsonObject["wantedRoot"]["wanted"];
            var wantedAuthArray = new Array();
            const frontKeywords = ['프론트', '프론트엔드', 'front', '웹', 'frontend'];
            const backKeywords = ['백', '백엔드', '웹', 'web', 'backend', 'back', '서버', 'server'];
            const dataKeywords = ['빅데이터', '데이터', 'ai', '인공지능', '딥러닝', '머신러닝', 'ml', '데이터베이스', 'database', 'data engineering', '데이터 엔지니어링'];
            for (let i in wantedObject) {
                console.log(wantedObject[i]['title']);
                var title = wantedObject[i]['title'];
                var frontFound = false;
                for (let j in frontKeywords) {
                    if (title.toLowerCase().includes(frontKeywords[j])) {
                        frontFound = true;
                        break;
                    }
                } // for (j)
                if (frontFound) {
                    // console.log('front = ' + title);
                    // console.log(wantedObject[i]['wantedAuthNo']);
                    wantedAuthArray.push(wantedObject[i]['wantedAuthNo']);
                }
            }  // for (i)
            console.log(wantedAuthArray);
        } 

    }
})
