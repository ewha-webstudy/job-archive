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
var basicArray = new Array();
var basicAuth = new Array();
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
                   // console.log(`body data => ${result}`)
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
                        basicArray.push(jsonData.wantedRoot.wanted[i]); 
                        basicAuth.push(jsonData.wantedRoot.wanted[i].wantedAuthNo);
                    }
                    resolve(jsonData);
                    //console.log(basicArray)
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
            //console.log(basicArray[i])        
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
        //console.log(res)
        detailArray.push(res);
    }
    
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


async function categorize() {  
    var category = new Array();
    var frontArray = new Array();
    var backArray = new Array();
    var dataArray = new Array();
    const frontKeywords = ['프론트', '프론트엔드', 'front', '웹', 'frontend'];
    const backKeywords = ['백', '백엔드', '웹', 'web', 'backend', 'back', '서버', 'server'];
    const dataKeywords = ['빅데이터', '데이터', 'ai', '인공지능', '딥러닝', '머신러닝', 'ml', '데이터베이스', 'database', 'data engineering', '데이터 엔지니어링'];
    for (let j in detailArray) {
        //console.log(detailArray[j]);
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
            frontArray.push(detailArray[j]['wantedDtl']['wantedAuthNo']);
            //console.log(detailArray[j]['wantedDtl']['wantedInfo']['wantedTitle'])
        }
    }  // for (i)

    for (let j in detailArray) {
        //console.log(detailArray[j]);
        var title = detailArray[j]['wantedDtl']['wantedInfo']['wantedTitle'];
        var backFound = false;
        for (let k in backKeywords) {
            if (title.toLowerCase().includes(backKeywords[k])) {
                backFound = true;
                break;
            }
        } // for (j)
        if (backFound) {
            // console.log('front = ' + title);
            // console.log(wantedObject[i]['wantedAuthNo']);
            backArray.push(detailArray[j]['wantedDtl']['wantedAuthNo']);
            //console.log(detailArray[j]);
            //console.log(detailArray[j]['wantedDtl']['wantedInfo']['wantedTitle'])
        }
    }  // for (i)

    for (let j in detailArray) {
        //console.log(detailArray[j]);
        var title = detailArray[j]['wantedDtl']['wantedInfo']['wantedTitle'];
        var dataFound = false;
        for (let k in dataKeywords) {
            if (title.toLowerCase().includes(dataKeywords[k])) {
                dataFound = true;
                break;
            }
        } // for (j)
        if (dataFound) {
            // console.log('front = ' + title);
            // console.log(wantedObject[i]['wantedAuthNo']);
            dataArray.push(detailArray[j]['wantedDtl']['wantedAuthNo']);
            //console.log(detailArray[j]['wantedDtl']['wantedInfo']['wantedTitle'])
        }
    }  // for (i)
    category.push(frontArray);
    category.push(backArray);
    category.push(dataArray);

    for(let i in basicAuth) {
        var currAuth = basicAuth[i]
        //console.log(currAuth)
        if(!frontArray.includes(currAuth) && !backArray.includes(currAuth) && !dataArray.includes(currAuth)) {
            basicAuth.splice(basicAuth.indexOf(currAuth), 1)
            for(let j in basicArray) {
                if(basicArray[j].wantedAuthNo == currAuth) {
                    basicArray.splice(j, 1)
                }
            }
        }
    } 
    //console.log(category);
    //console.log(basicAuth);
    return basicArray;
}


async function tagRegion(basicArray) {
    var region;

    for(var i in basicArray) {
        var currAuth = basicArray[i].wantedAuthNo;
        var zip = parseInt(basicArray[i].zipCd.substring(0, 2));
        var found = false;
        var index;
        //console.log(zip)
        for(var j in detailArray) {            
            if(currAuth == detailArray[j]['wantedDtl']['wantedAuthNo']) {
                found = true;
                index = j;
                break;
            }            
        }  
        if(found) {
            if(1 <= zip && zip <= 9) {
                region = "서울";
                detailArray[j].wantedDtl.wantedInfo.regionCd = region;
                console.log(detailArray[j].wantedDtl.wantedInfo.regionCd)                 
            }
            else if(46 <= zip && zip <= 49)  {
                region = "부산";
                detailArray[j].wantedDtl.wantedInfo.regionCd = region;
                console.log(detailArray[j].wantedDtl.wantedInfo.regionCd)   
            } 
            else if(41 <= zip && zip <= 43)  {
                region = "대구";
                detailArray[j].wantedDtl.wantedInfo.regionCd = region;
                console.log(detailArray[j].wantedDtl.wantedInfo.regionCd)  
            }     
            else if(21 <= zip && zip <= 23)  {
                var region = "인천";
                detailArray[j].wantedDtl.wantedInfo.regionCd = region;
                console.log(detailArray[j].wantedDtl.wantedInfo.regionCd)                  
            }     
            else if(61 <= zip && zip <= 62)  {
                var region = "광주";
                detailArray[j].wantedDtl.wantedInfo.regionCd = region;
                console.log(detailArray[j].wantedDtl.wantedInfo.regionCd) 
            }     
            else if(34 <= zip && zip <= 35)  {
                var region = "대전";
                detailArray[j].wantedDtl.wantedInfo.regionCd = region;
                console.log(detailArray[j].wantedDtl.wantedInfo.regionCd)  
            }     
            else if(44 <= zip && zip <= 45)  {
                var region = "울산";
                detailArray[j].wantedDtl.wantedInfo.regionCd = region;
                console.log(detailArray[j].wantedDtl.wantedInfo.regionCd) 
            }     
            else if(zip == 30)  {
                var region = "세종";
                detailArray[j].wantedDtl.wantedInfo.regionCd = region;
                console.log(detailArray[j].wantedDtl.wantedInfo.regionCd)  
            }     
            else if(10 <= zip && zip <= 20)  {
                var region = "경기도";
                detailArray[j].wantedDtl.wantedInfo.regionCd = region;
                console.log(detailArray[j].wantedDtl.wantedInfo.regionCd)  
            }     
            else if(24 <= zip && zip <= 26)  {
                var region = "강원도";
                detailArray[j].wantedDtl.wantedInfo.regionCd = region;
                console.log(detailArray[j].wantedDtl.wantedInfo.regionCd) 
            }     
            else if(27 <= zip && zip <= 29)  {
                var region = "충청북도";
                detailArray[j].wantedDtl.wantedInfo.regionCd = region;
                console.log(detailArray[j].wantedDtl.wantedInfo.regionCd)  
            }     
            else if(31 <= zip && zip <= 33)  {
                var region = "충청남도";
                detailArray[j].wantedDtl.wantedInfo.regionCd = region;
                console.log(detailArray[j].wantedDtl.wantedInfo.regionCd)  
            }     
            else if(54 <= zip && zip <= 56)  {
                var region = "전라북도";
                detailArray[j].wantedDtl.wantedInfo.regionCd = region;
                console.log(detailArray[j].wantedDtl.wantedInfo.regionCd)  
            }     
            else if(57 <= zip && zip <= 60)  {
                var region = "전라남도";
                detailArray[j].wantedDtl.wantedInfo.regionCd = region;
                console.log(detailArray[j].wantedDtl.wantedInfo.regionCd)  
            }     
            else if(36 <= zip && zip <= 40)  {
                var region = "경상북도";
                detailArray[j].wantedDtl.wantedInfo.regionCd = region;
                console.log(detailArray[j].wantedDtl.wantedInfo.regionCd)  
            }     
            else if(50 <= zip && zip <= 53)  {
                var region = "경상남도";
                detailArray[j].wantedDtl.wantedInfo.regionCd = region;
                console.log(detailArray[j].wantedDtl.wantedInfo.regionCd)   
            }     
            else if(zip == 63)  {
                var region = "제주";
                detailArray[j].wantedDtl.wantedInfo.regionCd = region;
                console.log(detailArray[j].wantedDtl.wantedInfo.regionCd)  
            }
        }    
        
    }  
    return detailArray;
} 

async function tagEdu() {
    
}

  
getBasic()
    .then(addUrlToArr,
        function(err) {
            console.log(err)
        }
    ).then(getDetailIter)
    .then(categorize)
    .then(tagRegion)
