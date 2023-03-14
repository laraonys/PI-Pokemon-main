const { Router } = require('express')
const router = Router();
const { getType } = require('../controllers/type')

router.get('/', getType);

module.exports = router;
