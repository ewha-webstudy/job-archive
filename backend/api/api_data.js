const convert = require('xml-js'); //module 설치
const requestBasic = require('request-promise-native'); //module 설치
const requestDetail = require('request-promise-native');
const fs = require('fs');
const { type } = require('os');
const { resolve } = require('path');


const HOST = 'http://openapi.work.go.kr/opi/opi/opia/wantedApi.do'
const SERVICE_KEY = 'WNKREKMMVKGZ30G24C2D82VR1HJ'
const occu = '133301|133200|133100|133101|133300'

var arr = [];
var detailArray = new Array();
var len;
var requestUrl = `${HOST}?authKey=${SERVICE_KEY}&callTp=L&returnType=XML&startPage=1&display=10&occupation=${occu}`

const fd = fs.openSync('jobdetail.json', 'a+');

let detailjson = fs.readFileSync(fd, "utf-8");
let details = new Array();
//details.push(JSON.parse(detailjson));


function getBasic() {
    return new Promise(function(resolve, reject) {
        requestBasic.get(requestUrl, (err,res,body) => {
            if(err){
                console.log(`err => ${err}`)
                return reject(error);
            }
            else {
                if(res.statusCode == 200){
                    var result = body
                    console.log(`body data => ${result}`)
                    var xmlToJson = convert.xml2json(result, {textFn:RemoveJsonTextAttribute, compact: true, spaces: 4});
                    const jsonData = JSON.parse(xmlToJson);
                    len = jsonData.wantedRoot.wanted.length;
                    function RemoveJsonTextAttribute(value,parentElement){
                        try{
                        var keyNo = Object.keys(parentElement._parent).length;
                        var keyName = Object.keys(parentElement._parent)[keyNo-1];
                        parentElement._parent[keyName] = value;
                        }
                        catch(e){}
                    }
                    
                    fs.writeFile('./jobbasic.json', xmlToJson, function(err){
                        if(err) throw err;
                    });            
                    
                    for(var i = 0; i < len; i++) {
                        arr[i] =  `${HOST}?authKey=${SERVICE_KEY}&callTp=D&returnType=XML&wantedAuthNo=${jsonData.wantedRoot.wanted[i].wantedAuthNo}&infoSvc=VALIDATION`
        
                    }
                    resolve(jsonData);
                    //console.log(len)
                    //console.log(`xml to json => ${xmlToJson}`)                              
                }
            }
        })
    })
}

function addUrlToArr(jsonData) {
    return new Promise( function(resolve) {
        for(var i = 0; i < len; i++) {
            arr[i] =  `${HOST}?authKey=${SERVICE_KEY}&callTp=D&returnType=XML&wantedAuthNo=${jsonData.wantedRoot.wanted[i].wantedAuthNo}&infoSvc=VALIDATION`
            console.log(arr[i])                  
        }
        return resolve(arr)
    });    
} 


function getDetail(url) {    
    return new Promise( function(resolve, reject) {
        requestDetail.get(url, (err,res,body) => {
            if(err){
                console.log(`err => ${err}`)
                return reject(err);
            }
            else {
                if(res.statusCode == 200) {
                    var result = body                    
                   // console.log(`body data => ${result}`)
                    var xmlToJson = convert.xml2json(result, {textFn:RemoveJsonTextAttribute, compact: true, spaces: 4});
                    const jsonData = JSON.parse(xmlToJson);
                    function RemoveJsonTextAttribute(value,parentElement){
                        try{
                        var keyNo = Object.keys(parentElement._parent).length;
                        var keyName = Object.keys(parentElement._parent)[keyNo-1];
                        parentElement._parent[keyName] = value;
                        }
                        catch(e){}
                    }
                    
                    resolve(jsonData);
                    //return jsonData;
                    //details.push(jsonData);
                    //console.log(JSON.stringify(details, null, 4));
                    //console.log("\n\n\n\n")
                    //detailjson = JSON.stringify(details, null, 4);
                    
                    /*
                    fs.appendFile(`./jobdetail.json`, detailjson, function(err){
                        if(err) throw err;
                    });  */
                    
                    //console.log(`xml to json => ${xmlToJson}`)    
                }
            }
        })
    })
}

async function getDetailIter(arr) {
    for (var i in arr) {
        const res = await getDetail(arr[i])
        detailArray.push(res);
    }
    //console.log()
    return detailArray;
}

/*
function getDetailIter(arr) {
    return arr.reduce( (prevProm, nextUrl) => {
        return prevProm.then(() => {
            getDetail(nextUrl)
        })        
    }, Promise.resolve())
}
*/


async function categorize(detailArray) {  
    var wantedAuthArray = new Array();
    const frontKeywords = ['프론트', '프론트엔드', 'front', '웹', 'frontend'];
    const backKeywords = ['백', '백엔드', '웹', 'web', 'backend', 'back', '서버', 'server'];
    const dataKeywords = ['빅데이터', '데이터', 'ai', '인공지능', '딥러닝', '머신러닝', 'ml', '데이터베이스', 'database', 'data engineering', '데이터 엔지니어링'];
    for (let j in detailArray) {
        //console.log(detailArray[j]['wantedDtl']['wantedInfo']['wantedTitle']);
        var title = detailArray[j]['wantedDtl']['wantedInfo']['wantedTitle'];
        var frontFound = false;
        for (let k in frontKeywords) {
            if (title.toLowerCase().includes(frontKeywords[k])) {
                frontFound = true;
                break;
            }
        } // for (j)
        if (frontFound) {
            // console.log('front = ' + title);
            // console.log(wantedObject[i]['wantedAuthNo']);
            wantedAuthArray.push(detailArray[j]['wantedDtl']['wantedAuthNo']);
            console.log(detailArray[j]['wantedDtl']['wantedInfo']['wantedTitle'])
        }
    }  // for (i)
    console.log(wantedAuthArray);    
    return detailArray;
}


getBasic()
    .then(addUrlToArr,
        function(err) {
            console.log(err)
        }
    ).then(getDetailIter)
    .then(categorize)


