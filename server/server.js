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

// 컨테이너 조회
app.post('/api/search', (req, res) => {
    const user_id = req.body.userId.userId;
    db.query("SELECT * FROM USER_INFO UI INNER JOIN CONTAINER_INFO CI ON UI.USER_ID = CI.USER_ID WHERE UI.USER_ID = (?)", [user_id] 
      ,(err, data) => {
        if(!err) res.send({ container : data });
        else res.send(err);
    })
})

// 컨테이너 삭제
app.post('/api/delete', (req, res) => {
    const user_id = req.body.user_id;
    const container_id = req.body.container_id;
    db.query("DELETE FROM CONTAINER_INFO WHERE USER_ID = (?) AND CONTAINER_ID = (?)", [user_id, container_id]
       ,(err, data) => {
        if(!err) res.send({ container : data });
        else res.send(err);
    });
})

// 컨테이너 생성
app.post('/api/insert', (req, res) => {
    const user_id = req.body.user_id;
    const container_id = req.body.container_id;
    const container_nm = req.body.container_nm;
    const note_txt = req.body.note_txt;
    const region_cd = req.body.region_cd;
    const tmpl_cd = req.body.tmpl_cd;
    const tmpl_dtl = req.body.tmpl_dtl;
    const stack_cd = req.body.stack_cd;
    const ADDPKG_CD_1 = req.body.pkg_1;
    const ADDPKG_CD_2 = req.body.pkg_2;
    const ADDPKG_CD_3 = req.body.pkg_3;

    db.query("INSERT INTO CONTAINER_INFO(	USER_ID,     CONTAINER_ID,    CONTAINER_NM,    NOTE_TXT,    REGION_CD,	TMLT_CD,	TMLT_DTL,    STACK_CD,    ADDPKG_CD_1,    ADDPKG_CD_2,    ADDPKG_CD_3,    UPDATE_DTS,    INSERT_DTS) " 
           + "VALUES (	(?),     (?),    (?),    (?),    (?),	(?),     (?),    (?),    (?),    (?),    (?),    NOW(),    NOW())"
           , [user_id, container_id, container_nm, note_txt, region_cd, tmpl_cd, tmpl_dtl, stack_cd, ADDPKG_CD_1, ADDPKG_CD_2, ADDPKG_CD_3]
    ,(err, data) => {
        if(!err) res.send({ container : data });
        else res.send(err);
    })
})

app.listen(PORT, () => {
    console.log(`Server On : http://localhost:${PORT}/`);
})