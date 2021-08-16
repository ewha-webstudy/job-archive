const express = require('express');
const path = require('path');
const jobsCtrl = require('./jobs.ctrl');

const router = express.Router();

// API 정의서 (method 불확실)
router.get('/main', jobsCtrl.main)
router.get('/jobs/:id', jobsCtrl.detail)

// router.post('/category/:category', jobsCtrl.category)
// params: category
// body: sort 기준
router.post('/category/:category/search', jobsCtrl.search)
// params: category
// body: sortBy, tags, searchBar
// 추가해야할 body: limit, skip (pagination)
router.post('/like/:id', jobsCtrl.like)
router.post('/unlike/:id', jobsCtrl.unlike)

module.exports = router;

/**
 * @swagger
 * /api/main:
 *  get:
 *    tags:
 *    - Main page
 *    description: 최신 등록된 채용 공고 9개 조회 (루트 페이지)
 * 
 *    responses:
 *      200:
 *        description: 최신 등록 공고 조회 성공
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/jobCard'
 *
 * /api/job/{id}:
 *  get:
 *    tags:
 *    - Detail page
 *    description: 채용공고 상세 페이지 (Card component 클릭 시)
 *    parameters:
 *    - name: id
 *      in: path
 *      required: true
 *      schema:
 *        type: string
 *      examples:
 *        Sample:
 *          value: K120612108130052
 *          summary: 채용공고 sample id
 *      style: simple
 *    responses:
 *      200:
 *        description: 채용공고 상세정보 조회 성공
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/jobDetail'
 *      400:
 *        description: params 값이 없을 때
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/noParams'
 *      404:
 *        description: DB에서 필요한 값을 찾지 못할 때
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/wrongDBIndex'
 * 
 * /api/category/{category}/search:
 *  post:
 *    tags:
 *    - Category page
 *    description: 카테고리 페이지 (메인에서 카테고리 선택 시 / tag로 서치 시/ searchBar로 서치 시)
 *    parameters:
 *    - name: category
 *      in: path
 *      required: true
 *      schema:
 *        type: string
 *      examples:
 *        Sample:
 *          value: frontend
 *      style: simple
 *    requestBody:
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              sortBy:
 *                type: string
 *              tags:
 *                type: object
 *              searchBar:
 *                type: string
 *          example:
 *            {sortBy: "likeNo", tags: {}, searchBar: "네이버"}
 *    responses:
 *      200:
 *        description: 서치 결과 반영 & 카테고리별 채용공고 조회 성공
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/jobCard'
 */