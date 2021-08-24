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
            if (title.toLowerCase().includes(backTech[i]) || jobCont.toLowerCase().includes(backTech[j]) || jobsNm.toLowerCase().includes(backTech[j])) {
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
            if (title.toLowerCase().includes(dataTech[i]) || jobCont.toLowerCase().includes(dataTech[k]) || jobsNm.toLowerCase().includes(dataTech[k])) {
                dataEx.push(dataTech[k]);
                dataStackFound = true;
            }
        }
        if (dataStackFound) {
            dataStack[detailArray[c].wantedDtl.wantedAuthNo] = dataEx.join(',');
        }
    }
    console.log("dataStack = " + JSON.stringify(dataStack));
}   // 기술 스택 코드 완료.
