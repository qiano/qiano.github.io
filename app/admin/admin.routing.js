"use strict";
var router_1 = require('@angular/router');
var admin_component_1 = require("./admin.component");
var query_component_1 = require("./pages/query.component");
var qrcode_component_1 = require("./pages/qrcode.component");
var auth_service_1 = require('../services/auth.service');
exports.routes = [
    {
        path: 'admin', component: admin_component_1.AdminComponent,
        canActivateChild: [auth_service_1.AuthService],
        children: [
            { path: "", component: query_component_1.QueryComponent },
            { path: "query", component: query_component_1.QueryComponent },
            { path: "qrcode", component: qrcode_component_1.QrcodeComponent }
        ]
    }
];
exports.routing = router_1.RouterModule.forChild(exports.routes);
//# sourceMappingURL=admin.routing.js.map