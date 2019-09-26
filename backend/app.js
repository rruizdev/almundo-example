const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

const indexRouter = require('./routes/index');
const hotelsRouter = require('./routes/hotels');

const app = express();

const expressSwagger = require('express-swagger-generator')(app);

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

const router = express.Router();
router.use('/api-docs', swaggerUi.serve);
router.get('/api-docs', swaggerUi.setup(swaggerDocument));

app.use('/', indexRouter);
app.use('/hotels', hotelsRouter);

expressSwagger({
    swaggerDefinition: {
        info: {
            description: 'Backend for demo purposes',
            title: 'almundo.backend',
            version: '1.0.0',
        },
        host: 'localhost:3000',
        basePath: '/v1',
        produces: [
            "application/json",
            "application/xml"
        ],
        schemes: ['http', 'https']
    },
    basedir: __dirname,
    files: ['./routes/**/*.js']
});

module.exports = app;
