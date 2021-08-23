async function tagSalary() {
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
            avgSal[detailArray[i].wantedDtl.wantedAuthNo] = 12 * (v_minSal + v_maxSal) / 2;
        }
    }
    console.log(salTpCd);
    console.log(avgSal);
}
