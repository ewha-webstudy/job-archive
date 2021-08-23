async function categorize() {
    // var category = new Array();
    var frontArray = {};
    var backArray = {};
    var dataArray = {};
    const frontKeywords = ['프론트', '프론트엔드', 'front', '웹', 'web', 'frontend', 'ui', 'ux'];
    const backKeywords = ['백', '백엔드', '웹', 'web', 'backend', 'back', '서버', 'server'];
    const dataKeywords = ['빅데이터', '데이터', 'ai', '인공지능', '딥러닝', '머신러닝', 'ml', '데이터베이스', 'database', 'data engineering', '데이터 엔지니어링'];
    for (let a in detailArray) {
        var title = detailArray[a]['wantedDtl']['wantedInfo']['wantedTitle'];
        var jobCont = detailArray[a]['wantedDtl']['wantedInfo']['jobCont'];
        var frontFound = false;
        // frontKeyword
        for (let i in frontKeywords) {
            if (title.toLowerCase().includes(frontKeywords[i]) || jobCont.toLowerCase().includes(frontKeywords[i])) {
                frontFound = true;
                break;
            }
        } // for (j)
        if (frontFound) {
            frontArray[detailArray[a].wantedDtl.wantedAuthNo] = 'frontend';
        }
    }  // for (a)

    for (let b in detailArray) {
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
            backArray[detailArray[b].wantedDtl.wantedAuthNo] = 'backend';
        }
    }  // for (b)

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
            dataArray[detailArray[c].wantedDtl.wantedAuthNo] = 'data'
        }
    }  // for (c)
    console.log(frontArray);
    console.log(backArray);
    console.log(dataArray);
}
