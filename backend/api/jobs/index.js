const express = require('express');
const path = require('path');
const jobsCtrl = require('./jobs.ctrl');

const router = express.Router();

router.get('/main', jobsCtrl.main)
router.get('/jobs/:id', jobsCtrl.detail)

router.post('/category/:category', jobsCtrl.search)
router.post('/likeIncrease', jobsCtrl.likeIncrease)
router.post('/likeDecrease', jobsCtrl.likeDecrease)

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
 * /api/category/{category}:
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
 *              tags:
 *                type: object
 *              searchBar:
 *                type: string
 *          example:
 *            {
 *              tags: {
 *                techStack: [],
 *                enterTp: [],
 *                salary: [],
 *                region: [],
 *                edubgIcd: []
 *              }, 
 *              searchBar: "네이버"
 *            }
 *    responses:
 *      200:
 *        description: 서치 결과 반영 & 카테고리별 채용공고 조회 성공
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/jobCard'
 * 
 * /api/likecrease:
 *  post:
 *    tags:
 *    - Like Increase
 *    description: 해당 채용공고의 좋아요 수 증가 (사용자가 채용공고의 좋아요를 누를 때)
 *    requestBody:
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              id:
 *                type: string
 *          example:
 *            {
 *              "id": "K120612108130052"
 *            }
 *    responses:
 *      200:
 *        description: 해당 채용공고의 좋아요 수 증가 성공
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                message:
 *                  type: string
 *                likeNo:
 *                  type: integer
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
 * /api/likeDecrease:
 *  post:
 *    tags:
 *    - Like Increase
 *    description: 해당 채용공고의 좋아요 수 감소 (사용자가 채용공고의 좋아요를 누를 때)
 *    requestBody:
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              id:
 *                type: string
 *          example:
 *            {
 *              "id": "K120612108130052"
 *            }
 *    responses:
 *      200:
 *        description: 해당 채용공고의 좋아요 수 감소 성공
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                message:
 *                  type: string
 *                likeNo:
 *                  type: integer
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
 */