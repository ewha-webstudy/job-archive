async function tagSalary() {
    var salTpCd = {};
    var minSal = {};
    var maxSal = {};
    var avgSal = {};

    for (let i in basicArray) {
        var v_salTpCd = detailArray[i].wantedDtl.wantedInfo.salTpCd;

        var temp_minSal = basicArray[i].minSal;
        var temp_maxSal = basicArray[i].maxSal;
        var v_minSal = parseInt(temp_minSal);
        var v_maxSal = parseInt(temp_maxSal);
        // console.log(v_minSal);

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
            if (v_maxSal == 0) {
                v_maxSal = v_minSal;
            }
            avgSal[detailArray[i].wantedDtl.wantedAuthNo] = 12 * (v_minSal + v_maxSal) / 2;
        }
        // 연봉
        else {
            salTpCd[detailArray[i].wantedDtl.wantedAuthNo] = v_salTpCd;
            minSal[detailArray[i].wantedDtl.wantedAuthNo] = v_minSal;
            maxSal[detailArray[i].wantedDtl.wantedAuthNo] = v_maxSal;
            if (v_maxSal == 0) {
                v_maxSal = v_minSal;
            }
            avgSal[detailArray[i].wantedDtl.wantedAuthNo] = (v_minSal + v_maxSal) / 2;
        }
        try {
            storeAvgSal(avgSal[detailArray[i].wantedDtl.wantedAuthNo], detailArray[i].wantedDtl.wantedAuthNo);
        } catch (error) {
            console.error("key not found: " + detailArray[i].wantedDtl.wantedAuthNo);
        }
    }
    // console.log(salTpCd);
    // console.log(avgSal);

}
