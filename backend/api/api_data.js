const convert = require('xml-js'); //module 설치
const requestBasic = require('request-promise-native'); //module 설치
const requestDetail = require('request-promise-native');
const fs = require('fs');
const { type } = require('os');
const { resolve } = require('path');
const { job } = require("../models");

const HOST = 'http://openapi.work.go.kr/opi/opi/opia/wantedApi.do'
const SERVICE_KEY = 'WNKREKMMVKGZ30G24C2D82VR1HJ'
const occu = '133301|133200|133100|133101|133300'

var arr = [];
var basicArray = new Array();
var basicAuth = new Array();
var detailArray = new Array();
var detail
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

                    
                    fs.appendFile(`./jobdetail.json`, xmlToJson, function(err){
                        if(err) throw err;
                    });  
                    
                    
                    resolve(jsonData);
                    //return jsonData;
                    //details.push(jsonData);
                    //console.log(JSON.stringify(details, null, 4));
                    //console.log("\n\n\n\n")
                    //detailjson = JSON.stringify(details, null, 4);
                    
                  
                    
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
    //console.log(detailArray)
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
    for (let a in detailArray) {
        //console.log(detailArray[j]);
        var title = detailArray[a]['wantedDtl']['wantedInfo']['wantedTitle'];
        var jobCont = detailArray[a]['wantedDtl']['wantedInfo']['jobCont'];
        var frontFound = false;
        for (let i in frontKeywords) {
            if (title.toLowerCase().includes(frontKeywords[i]) || jobCont.toLowerCase().includes(frontKeywords[i])) {
                frontFound = true;
                break;
            }
        } // for (j)
        if (frontFound) {
            // console.log('front = ' + title);
            // console.log(wantedObject[i]['wantedAuthNo']);
            frontArray.push(detailArray[a]['wantedDtl']['wantedAuthNo']);
            //console.log(detailArray[j]['wantedDtl']['wantedInfo']['wantedTitle'])
        }
    }  // for (i)

    for (let b in detailArray) {
        //console.log(detailArray[j]);
        var title = detailArray[b]['wantedDtl']['wantedInfo']['wantedTitle'];
        var jobCont = detailArray[b]['wantedDtl']['wantedInfo']['jobCont'];        
        var backFound = false;
        for (let j in backKeywords) {
            if (title.toLowerCase().includes(backKeywords[j]) || jobCont.toLowerCase().includes(backKeywords[j])) {
                backFound = true;
                break;
            }
        } // for (j)
        if (backFound) {
            // console.log('front = ' + title);
            // console.log(wantedObject[i]['wantedAuthNo']);
            backArray.push(detailArray[b]['wantedDtl']['wantedAuthNo']);
            //console.log(detailArray[j]);
            //console.log(detailArray[j]['wantedDtl']['wantedInfo']['wantedTitle'])
        }
    }  // for (i)

    for (let c in detailArray) {
        //console.log(detailArray[j]);
        var title = detailArray[c]['wantedDtl']['wantedInfo']['wantedTitle'];
        var jobCont = detailArray[c]['wantedDtl']['wantedInfo']['jobCont'];
        var dataFound = false;
        for (let k in dataKeywords) {
            if (title.toLowerCase().includes(dataKeywords[k]) || jobCont.toLowerCase().includes(dataKeywords[k])) {
                dataFound = true;
                break;
            }
        } // for (k)
        if (dataFound) {
            // console.log('front = ' + title);
            // console.log(wantedObject[i]['wantedAuthNo']);
            dataArray.push(detailArray[c]['wantedDtl']['wantedAuthNo']);
            //console.log(detailArray[j]['wantedDtl']['wantedInfo']['wantedTitle'])
        }
    }  // for (i)
    category.push(frontArray);
    category.push(backArray);
    category.push(dataArray);

    var basicAuthTempArray = new Array();
    var basicArrayTempArray = new Array();
    var detailArrayTempArray = new Array();
    for(var i in basicAuth) {
        var currAuth = basicAuth[i]
        //console.log(i)
        if(frontArray.includes(currAuth) || backArray.includes(currAuth) || dataArray.includes(currAuth)) {
            basicAuthTempArray.push(basicAuth[i]);
             for(var j in basicArray) {
                if(basicArray[j].wantedAuthNo == currAuth) {
                    basicArrayTempArray.push(basicArray[j])
                }
            }
        }
    } 

    basicAuth = basicAuthTempArray;
    basicArray = basicArrayTempArray;
    //console.log(basicAuth);
    //console.log(basicArray);
  
    for(let i in detailArray) {
        var currAuth = detailArray[i]['wantedDtl']['wantedAuthNo'];
        //console.log(currAuth)
        if(frontArray.includes(currAuth) || backArray.includes(currAuth) || dataArray.includes(currAuth)) {
            detailArrayTempArray.push(detailArray[i]);
        }
    } 
    
    detailArray = detailArrayTempArray;
    //console.log(frontArray)
    //console.log(backArray)
    //console.log(dataArray)
    //console.log(category);
    //console.log(basicAuth);
    //console.log(detailArray);
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
                var region = "경기";
                detailArray[j].wantedDtl.wantedInfo.regionCd = region;
                console.log(detailArray[j].wantedDtl.wantedInfo.regionCd)  
            }     
            else if(24 <= zip && zip <= 26)  {
                var region = "강원";
                detailArray[j].wantedDtl.wantedInfo.regionCd = region;
                console.log(detailArray[j].wantedDtl.wantedInfo.regionCd) 
            }     
            else if(27 <= zip && zip <= 29)  {
                var region = "충북";
                detailArray[j].wantedDtl.wantedInfo.regionCd = region;
                console.log(detailArray[j].wantedDtl.wantedInfo.regionCd)  
            }     
            else if(31 <= zip && zip <= 33)  {
                var region = "충남";
                detailArray[j].wantedDtl.wantedInfo.regionCd = region;
                console.log(detailArray[j].wantedDtl.wantedInfo.regionCd)  
            }     
            else if(54 <= zip && zip <= 56)  {
                var region = "전북";
                detailArray[j].wantedDtl.wantedInfo.regionCd = region;
                console.log(detailArray[j].wantedDtl.wantedInfo.regionCd)  
            }     
            else if(57 <= zip && zip <= 60)  {
                var region = "전남";
                detailArray[j].wantedDtl.wantedInfo.regionCd = region;
                console.log(detailArray[j].wantedDtl.wantedInfo.regionCd)  
            }     
            else if(36 <= zip && zip <= 40)  {
                var region = "경북";
                detailArray[j].wantedDtl.wantedInfo.regionCd = region;
                console.log(detailArray[j].wantedDtl.wantedInfo.regionCd)  
            }     
            else if(50 <= zip && zip <= 53)  {
                var region = "경남";
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
        
    for(var i in detailArray) {
        //console.log(detailArray[i]);
    }
    return detailArray;
} 


async function tagEdu() {
    for(var j in detailArray) {
        var edu;
        var edu = parseInt(detailArray[j]['wantedDtl']['wantedInfo']['minEdubgIcd']);
        //console.log(edu)
        
        if(edu == 0) {
            edu = "학력무관";
            detailArray[j].wantedDtl.wantedInfo.minEdubgIcd = edu;
            console.log(detailArray[j].wantedDtl.wantedInfo.minEdubgIcd)                 
        }
        else if(edu == 1)  {
            edu = "초졸이하";
            detailArray[j].wantedDtl.wantedInfo.minEdubgIcd = edu;
            console.log(detailArray[j].wantedDtl.wantedInfo.minEdubgIcd)
        } 
        else if(edu == 2)  {
            edu = "중졸";
            detailArray[j].wantedDtl.wantedInfo.minEdubgIcd = edu;
            console.log(detailArray[j].wantedDtl.wantedInfo.minEdubgIcd)   
        }     
        else if(edu == 3)  {
            edu = "고졸";
            detailArray[j].wantedDtl.wantedInfo.minEdubgIcd = edu;
            console.log(detailArray[j].wantedDtl.wantedInfo.minEdubgIcd)   
        }     
        else if(edu == 4)  {
            edu = "대졸(2~3년)";
            detailArray[j].wantedDtl.wantedInfo.minEdubgIcd = edu;
            console.log(detailArray[j].wantedDtl.wantedInfo.minEdubgIcd)   
        }     
        else if(edu == 5)  {
            edu = "대졸(4년)";
            detailArray[j].wantedDtl.wantedInfo.minEdubgIcd = edu;
            console.log(detailArray[j].wantedDtl.wantedInfo.minEdubgIcd)   
        }     
        else if(edu == 6)  {
            edu = "석사";
            detailArray[j].wantedDtl.wantedInfo.minEdubgIcd = edu;
            console.log(detailArray[j].wantedDtl.wantedInfo.minEdubgIcd)   
        }     
        else if(edu == 7)  {
            edu = "박사";
            detailArray[j].wantedDtl.wantedInfo.minEdubgIcd = edu;
            console.log(detailArray[j].wantedDtl.wantedInfo.minEdubgIcd)   
        }     
    
    }  
    return detailArray;
}

async function tagCareer() {
    for(var j in detailArray) {
        var career;
        var career = detailArray[j]['wantedDtl']['wantedInfo']['enterTpCd'];
        console.log(career)
        
        if(career == "N") {
            career = "신입";
            detailArray[j].wantedDtl.wantedInfo.enterTpCd = career;
            console.log(detailArray[j].wantedDtl.wantedInfo.enterTpCd)                 
        }
        else if(career == "E")  {
            career = "경력";
            detailArray[j].wantedDtl.wantedInfo.enterTpCd = career;
            console.log(detailArray[j].wantedDtl.wantedInfo.enterTpCd) 
       } 
        else if(career == "Z")  {
            career = "관계없음";
            detailArray[j].wantedDtl.wantedInfo.enterTpCd = career;
            console.log(detailArray[j].wantedDtl.wantedInfo.enterTpCd)  
        }     
    
    }  

    for(var i in detailArray)
        //console.log(detailArray[i])
    return detailArray;
}

async function tagSal() {
    var salTpCd = {};
    var minSal = {};
    var maxSal = {};
    var avgSal = {};
    for (let i in basicArray) {
        var v_salTpCd = detailArray[i].wantedDtl.wantedInfo.salTpCd;
        var temp_minSal = JSON.stringify(basicArray[i].minSal);
        var v_minSal = JSON.parse(temp_minSal.replace(/\:\"(\d+)\"([,\}])/g, '\:$1$2'));
        var temp_maxSal = JSON.stringify(basicArray[i].maxSal);
        var v_maxSal = JSON.parse(temp_maxSal.replace(/\:\"(\d+)\"([,\}])/g, '\:$1$2'));
        // var v_maxSal = basicArray[i].maxSal;
        // 시급
        if (v_salTpCd == 'H') {
            salTpCd[detailArray[i].wantedDtl.wantedAuthNo] = v_salTpCd;
            minSal[detailArray[i].wantedDtl.wantedAuthNo] = v_minSal;
            maxSal[detailArray[i].wantedDtl.wantedAuthNo] = v_maxSal;
        }
        // 일급
        else if (v_salTpCd == 'D') {
            salTpCd[detailArray[i].wantedDtl.wantedAuthNo] = v_salTpCd;
            minSal[detailArray[i].wantedDtl.wantedAuthNo] = v_minSal;
            maxSal[detailArray[i].wantedDtl.wantedAuthNo] = v_maxSal;
        }
        // 월급
        else if (v_salTpCd == 'M') {
            salTpCd[detailArray[i].wantedDtl.wantedAuthNo] = v_salTpCd;
            minSal[detailArray[i].wantedDtl.wantedAuthNo] = v_minSal;
            maxSal[detailArray[i].wantedDtl.wantedAuthNo] = v_maxSal;
            avgSal[detailArray[i].wantedDtl.wantedAuthNo] = 12 * (v_minSal + v_maxSal) / 2;
        }
        // 연봉
        else {
            salTpCd[detailArray[i].wantedDtl.wantedAuthNo] = v_salTpCd;
            minSal[detailArray[i].wantedDtl.wantedAuthNo] = v_minSal;
            maxSal[detailArray[i].wantedDtl.wantedAuthNo] = v_maxSal;
            avgSal[detailArray[i].wantedDtl.wantedAuthNo] = (v_minSal + v_maxSal) / 2;
        }
    }
    console.log(salTpCd);
    console.log(avgSal);   
}

async function tagTechStack() {
    const frontTech = ["html", "css", "js", "javascript"];
    const backTech = ["ruby", "python", "php", "java", "scala", "node.js", "rest api"];
    const dataTech = ["python", "c++", "sql", "tensorflow", "opengl", "opencv"];
    // {"wantedAuthNo" : "포함된 스택 배열"} 형식을 위한 딕셔너리 생성
    var frontStack = {};
    var backStack = {};
    var dataStack = {};

    // 프론트 기술 스택
    for (let a in detailArray) {
        var frontEx = new Array();
        var title = detailArray[a]['wantedDtl']['wantedInfo']['wantedTitle'];
        var jobCont = detailArray[a]['wantedDtl']['wantedInfo']['jobCont'];
        var jobsNm = detailArray[a]['wantedDtl']['wantedInfo']['jobsNm'];
        var frontStackFound = false;
        for (let i in frontTech) {
            if (title.toLowerCase().includes(frontTech[i]) || jobCont.toLowerCase().includes(frontTech[i]) || jobsNm.toLowerCase().includes(frontTech[i])) {
                frontEx.push(frontTech[i]);
                frontStackFound = true;
            }
        }
        if (frontStackFound) {
            frontStack[detailArray[a].wantedDtl.wantedAuthNo] = frontEx.join(',');
        }
    }
    console.log("frontStack = " + JSON.stringify(frontStack));

    // frontStack db 저장
    // storeFrontStack(frontStack);

    // 백 기술 스택
    for (let b in detailArray) {
        var backEx = new Array();
        var title = detailArray[b]['wantedDtl']['wantedInfo']['wantedTitle'];
        var jobCont = detailArray[b]['wantedDtl']['wantedInfo']['jobCont'];
        var jobsNm = detailArray[b]['wantedDtl']['wantedInfo']['jobsNm'];
        var backStackFound = false;
        for (let j in backTech) {
            if (title.toLowerCase().includes(backTech[j]) || jobCont.toLowerCase().includes(backTech[j]) || jobsNm.toLowerCase().includes(backTech[j])) {
                backEx.push(backTech[j]);
                backStackFound = true;
            }
        }
        if (backStackFound) {
            backStack[detailArray[b].wantedDtl.wantedAuthNo] = backEx.join(',');
        }
    }
    console.log("backStack = " + JSON.stringify(backStack));

    // 인공지능 기술 스택
    for (let c in detailArray) {
        var dataEx = new Array();
        var title = detailArray[c]['wantedDtl']['wantedInfo']['wantedTitle'];
        var jobCont = detailArray[c]['wantedDtl']['wantedInfo']['jobCont'];
        var jobsNm = detailArray[c]['wantedDtl']['wantedInfo']['jobsNm'];
        var dataStackFound = false;
        for (let k in dataTech) {
            if (title.toLowerCase().includes(dataTech[k]) || jobCont.toLowerCase().includes(dataTech[k]) || jobsNm.toLowerCase().includes(dataTech[k])) {
                dataEx.push(dataTech[k]);
                dataStackFound = true;
            }
        }
        if (dataStackFound) {
            dataStack[detailArray[c].wantedDtl.wantedAuthNo] = dataEx.join(',');
        }
    }
    console.log("dataStack = " + JSON.stringify(dataStack));
}

function to_date1(date_str) {
    var yyyyMMdd = String(date_str);
    var sYear = yyyyMMdd.substring(0,4);
    var sMonth = yyyyMMdd.substring(5,7);
    var sDate = yyyyMMdd.substring(8,10);

    //alert("sYear :"+sYear +"   sMonth :"+sMonth + "   sDate :"+sDate);
    return new Date(Number(sYear), Number(sMonth)-1, Number(sDate));
}

function to_date2(date_str) {
    var yyyyMMdd = String(date_str);
    var sYear = yyyyMMdd.substring(0,4);
    var sMonth = yyyyMMdd.substring(4,6);
    var sDate = yyyyMMdd.substring(6,8);

    return new Date(Number(sYear), Number(sMonth)-1, Number(sDate));
}

function modifyReceiptCloseDt(receiptCloseDt) {
    if(receiptCloseDt.includes("채용")) {
        receiptCloseDt = new Date("9999-01-01");
    }
    else {
        receiptCloseDt = to_date2(receiptCloseDt);
    }

    return receiptCloseDt;
}

function acceptNull(value) {
    if(value.toString() == "[object Object]") {
        value = null;
    }
    else {
        value = value.toString();
    }
    return value;
}

async function checkDuplicate(authNo) {
    await job.findOne({ where: { wantedAuthNo: authNo }})
    .then(
    );
}

async function putInDB() {
    for(var i in detailArray) {
        for(var j in basicArray) {
            if(detailArray[i]['wantedDtl']['wantedAuthNo'] == basicArray[j].wantedAuthNo) {
                var regDtStr = "20" + basicArray[j].regDt;
                var regDtDate = to_date1(regDtStr);
                if(await job.findOne({ where: { wantedAuthNo: detailArray[i]['wantedDtl']['wantedAuthNo'] }}) != null) {
                    break;
                }    
                
                //console.log(regDtDate)
                //console.log(detailArray[i].wantedDtl.wantedInfo.minEdubgIcd)
                //console.log(modifyPfCond(detailArray[i].wantedDtl.wantedInfo.pfCond))
                await job.create({ 
                    wantedAuthNo: detailArray[i]['wantedDtl']['wantedAuthNo'], 
                    regDt: regDtDate,
                    company: basicArray[j].company,
                    sal: basicArray[j].sal,
                    minSal: parseInt(basicArray[j].minSal),
                    maxSal: parseInt(basicArray[j].maxSal),
                    avgSal: null,
                    region: detailArray[i].wantedDtl.wantedInfo.regionCd,
                    wantedInfoUrl: basicArray[j].wantedInfoUrl,
                    wantedTitle: detailArray[i].wantedDtl.wantedInfo.wantedTitle,
                    salTpCd: detailArray[i].wantedDtl.wantedInfo.salTpCd,
                    jobCont: detailArray[i].wantedDtl.wantedInfo.jobCont,
                    category: "random",
                    techStack: "dummy",
                    enterTpCd: detailArray[i].wantedDtl.wantedInfo.enterTpCd,
                    minEdubglcd: detailArray[i].wantedDtl.wantedInfo.minEdubgIcd,
                    pfCond: acceptNull(detailArray[i].wantedDtl.wantedInfo.pfCond),
                    empTpNm: detailArray[i].wantedDtl.wantedInfo.empTpNm,
                    workdayWorkhrCont: detailArray[i].wantedDtl.wantedInfo.workdayWorkhrCont,
                    receiptCloseDt: modifyReceiptCloseDt(detailArray[i].wantedDtl.wantedInfo.receiptCloseDt),
                    logo: null,
                    likeNo: 0,
                    view: 0,
                    indTpCdNm: detailArray[i].wantedDtl.corpInfo.indTpCdNm,
                    reperNm: detailArray[i].wantedDtl.corpInfo.reperNm,
                    corpAddr: detailArray[i].wantedDtl.corpInfo.corpAddr,
                    homePg: acceptNull(detailArray[i].wantedDtl.corpInfo.homePg)
                }).then((result) => {
                   console.log("저장 성공: ", result);
                }).catch((err) => {
                   console.log("저장 Error: ", err);
                }); 
            }             
        }        
    }
}

// async function test() {
//     await job.create({ wantedAuthNo: "test", regDt: "2021-08-28", company: "test", sal: "100만원", minSal:100, region:"서울", wantedInfoUrl: "test", wantedTitle: "test", salTpCd:"Y", jobCont:"test", category: "data", techStack: "test", enterTpCd:"N",  minEdubglcd: "00", empTpNm: "test", workdayWorkhrCont: "tset", receiptCloseDt: "9999-01-01", likeNo:0 });
// }

// test()

getBasic()
    .then(addUrlToArr,
        function(err) {
            console.log(err)
        }
    ).then(getDetailIter)
    .then(categorize)
    .then(tagRegion)
    .then(tagEdu)
    .then(tagCareer)
    .then(tagSal)
    .then(tagTechStack)
    .then(putInDB)
