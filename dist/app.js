"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const http_status_1 = __importDefault(require("http-status"));
const globalExceptionHandler_1 = __importDefault(require("./app/middlewares/globalExceptionHandler"));
const routes_1 = __importDefault(require("./app/routes"));
const config_1 = __importDefault(require("./config"));
const app = (0, express_1.default)();
app.use(express_1.default.urlencoded({ extended: true }));
app.use(express_1.default.json());
app.use((0, cookie_parser_1.default)());
app.post('/api/v1/payments', (0, cors_1.default)(), (req, res) => {
    var _a;
    const status = (_a = req === null || req === void 0 ? void 0 : req.query) === null || _a === void 0 ? void 0 : _a.status;
    if (status === 'success') {
        res.redirect(`${config_1.default.frontendUrl}/payments?status=success`);
    }
    // else if(status === 'error') {
    //   res.redirect(`${config.frontendUrl}/payments?status=error}`);
    // }
    else if (status === 'warning') {
        res.redirect(`${config_1.default.frontendUrl}/payments?status=warning`);
    }
    else {
        res.redirect(`${config_1.default.frontendUrl}/payments?status=error`);
    }
});
app.use((0, cors_1.default)({
    origin: (origin, callback) => {
        if (!origin || config_1.default.cors.includes(origin)) {
            callback(null, true);
        }
        else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    credentials: true
}));
//allow all origins
// app.use(cors({
//   origin: true,
//   credentials: true
// }));
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());
// app.use(cookieParser());
app.use('/api/v1', routes_1.default);
app.get('/', (req, res) => {
    res.send("Server running successfully");
});
app.use(globalExceptionHandler_1.default);
app.use((req, res, next) => {
    res.status(http_status_1.default.NOT_FOUND).json({
        success: false,
        message: 'API not found',
        errorMessages: [
            {
                path: '',
                message: 'API not found'
            }
        ]
    });
});
exports.default = app;
