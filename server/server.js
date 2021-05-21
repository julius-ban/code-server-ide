const { response } = require('express');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000;
const db = require('./config/db');
const cors = require('cors');

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use(bodyParser.json());

// 조회
app.get('/api/search', (req, res) => {
    // debugger;
    // const user_id = [req.body.inText];
    // db.query("SELECT * FROM USER_INFO UI LEFT JOIN CONTAINER_INFO CI ON UI.USER_CD = CI.USER_CD WHERE USER_ID = (?)" + [user_id]
    db.query("SELECT * FROM USER_INFO UI INNER JOIN CONTAINER_INFO CI ON UI.USER_ID = CI.USER_ID WHERE UI.USER_ID = \"covj12\"" 
      ,(err, data) => {
        if(!err) res.send({ container : data });
        else res.send(err);
    })
})

// 삭제
app.post('/api/delete', (req, res) => {
    const user_id = req.body.user_id;
    const container_id = req.body.container_id;

    db.query("DELETE FROM CONTAINER_INFO WHERE USER_ID = (?) AND CONTAINER_ID = (?)", [user_id, container_id]
       ,(err, data) => {
        if(!err) res.send({ products : data });
        else res.send(err);
    });
})

//FOR EXAMPLE
// connection.query('UPDATE users SET foo = ?, bar = ?, baz = ? WHERE id = ?', ['a', 'b', 'c', userId], function (error, results, fields) {
//  if (error) throw error;
//   // ...
//  });

// 삽입
app.get('/api/insert', (req, res) => {
    var CURRENT_TIMESTAMP = mysql.raw('CURRENT_TIMESTAMP()');

    db.query("INSERT INTO CONTAINER_INFO(	USER_ID,     CONTAINER_ID,    CONTAINER_NM,    NOTE_TXT,    REGION_CD,	TMLT_CD,	TMLT_DTL,    STACK_CD,    ADDPKG_CD_1,    ADDPKG_CD_2,    ADDPKG_CD_3,    UPDATE_DTS,    INSERT_DTS) " 
           + "VALUES (	USER_ID,     CONTAINER_ID,    CONTAINER_NM,    NOTE_TXT,    REGION_CD,	TMLT_CD,	TMLT_DTL,    STACK_CD,    ADDPKG_CD_1,    ADDPKG_CD_2,    ADDPKG_CD_3,    UPDATE_DTS,    INSERT_DTS)"
    ,(err, data) => {
        if(!err) res.send({ products : data });
        if(err) throw error;
        else res.send(err);
    })
})

app.listen(PORT, () => {
    console.log(`Server On : http://localhost:${PORT}/`);
})