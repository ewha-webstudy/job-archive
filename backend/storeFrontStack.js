function storeFrontStack(frontStack) {
    console.log("storeFrontStack() called...");
    // 참조  url: https://defineall.tistory.com/709?category=852367
    // 참조 url: https://poiemaweb.com/nodejs-mysql
    const mysql = require('mysql');
    const connection = mysql.createConnection({
        host: 'localhost',
        port: 3306,
        user: 'heewon',
        password: '12345*',
        database: 'JOBARCHIVE'
    });

    connection.connect();

    // TODO: INSERT 문으로 대체
    connection.query('SELECT * FROM JOBARCHIVE.job;', (error, rows, fields) => {
        if (error) throw error;
        console.log('Job: ', rows);
    });

    connection.end();

}
