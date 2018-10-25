(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"cointainer-fluid\">\n    <app-nav></app-nav>    \n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Emertxe';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var angularfire2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angularfire2 */ "./node_modules/angularfire2/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _courses_courses_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./courses/courses.component */ "./src/app/courses/courses.component.ts");
/* harmony import */ var _student_student_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./student/student.component */ "./src/app/student/student.component.ts");
/* harmony import */ var _teacher_teacher_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./teacher/teacher.component */ "./src/app/teacher/teacher.component.ts");
/* harmony import */ var _nav_nav_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./nav/nav.component */ "./src/app/nav/nav.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _courses_courses_component__WEBPACK_IMPORTED_MODULE_7__["CoursesComponent"],
                _student_student_component__WEBPACK_IMPORTED_MODULE_8__["StudentComponent"],
                _teacher_teacher_component__WEBPACK_IMPORTED_MODULE_9__["TeacherComponent"],
                _nav_nav_component__WEBPACK_IMPORTED_MODULE_10__["NavComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                angularfire2__WEBPACK_IMPORTED_MODULE_1__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].firebase, 'angularfs'),
                angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestoreModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/courses/courses.component.css":
/*!***********************************************!*\
  !*** ./src/app/courses/courses.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/courses/courses.component.html":
/*!************************************************!*\
  !*** ./src/app/courses/courses.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"cointainer-fluid\">\n  <div class=\"p-3 bg-dark text-white\"><h4>Courses <button type=\"button\" class=\"btn btn-success btn-small float-right\"   (click)=\"ClearFields()\"  data-toggle=\"modal\"  data-target=\"#AddCourse\" >Add</button></h4></div>\n\n<table class=\"table table-darkbg\">\n  <thead>\n    <tr>\n      <th>Course Name</th>\n      <th>Duration</th>\n      <th>Edit</th> \n      <th>Delete</th>   \n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let course of courses | async\">\n      <td >{{course.Name}}</td>\n      <td >{{course.Duration}}</td>\n      <td><button type=\"button\" class=\"btn btn-dark btn-sm\" data-toggle=\"modal\"  data-target=\"#editCourse\"  (click)=\"PopulateModal(course)\">Edit</button></td>\n      <td><button type=\"button\" class=\"btn btn-dark btn-sm\" (click)=\"remove(course)\">Delete</button></td>\n    </tr>\n  </tbody>\n</table>\n</div>\n\n<!-- Modal Add Course -->\n<div class=\"modal fade\" id=\"AddCourse\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalCenterTitle\" aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\" id=\"exampleModalCenterTitle\">Add Course</h5>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <div class=\"form-group row\">\n            <label class=\"col-sm-2 col-form-label\">Name</label>\n            <div class=\"col-sm-10\">\n              <input [(ngModel)]=\"CourseName\"  type=\"text\" class=\"form-control\"  placeholder=\"Enter Course Name\">\n            </div>\n          </div>\n          <div class=\"form-group row\">\n            <label class=\"col-sm-2 col-form-label\">Duration</label>\n            <div class=\"col-sm-10\">\n              <input [(ngModel)]=\"CourseDuration\" type=\"text\" class=\"form-control\" placeholder=\"Enter Course Duration\">\n            </div>\n          </div>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n        <button type=\"button\" class=\"btn btn-primary\" (click) = \"createNewCourseRecord()\" data-dismiss=\"modal\" >Save</button>\n      </div>\n    </div>\n  </div>\n</div>\n\n\n<!-- Modal Edit Course -->\n<div class=\"modal fade\" id=\"editCourse\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalCenterTitle\" aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <h5 class=\"modal-title\" id=\"exampleModalCenterTitle\">Update Course</h5>\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n        </div>\n        <div class=\"modal-body\">\n          <div class=\"form-group row\">\n              <label class=\"col-sm-2 col-form-label\">Name</label>\n              <div class=\"col-sm-10\">\n                <input [(ngModel)]=\"CourseName\"  type=\"text\" class=\"form-control\"  placeholder=\"Enter Course Name\">\n              </div>\n            </div>\n            <div class=\"form-group row\">\n              <label class=\"col-sm-2 col-form-label\">Duration</label>\n              <div class=\"col-sm-10\">\n                <input [(ngModel)]=\"CourseDuration\" type=\"text\" class=\"form-control\" placeholder=\"Enter Course Duration\">\n              </div>\n            </div>\n        </div>\n        <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n          <button type=\"button\" class=\"btn btn-primary\" (click) = \"updateCourseRecord()\" data-dismiss=\"modal\" >Save</button>\n        </div>\n      </div>\n    </div>\n  </div>\n"

/***/ }),

/***/ "./src/app/courses/courses.component.ts":
/*!**********************************************!*\
  !*** ./src/app/courses/courses.component.ts ***!
  \**********************************************/
/*! exports provided: CoursesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoursesComponent", function() { return CoursesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CoursesComponent = /** @class */ (function () {
    function CoursesComponent(db) {
        var _this = this;
        this.db = db;
        this.CourseId = "";
        this.CourseName = "";
        this.CourseDuration = "";
        this.courses = this.db.collection('courses').valueChanges();
        this.courses.subscribe(function (courses) { console.log(_this.courses); });
        this.coursesCollection = this.db.collection('courses');
    }
    CoursesComponent.prototype.createNewCourseRecord = function () {
        var CourseId = this.db.createId();
        this.coursesCollection.doc(CourseId).set({ Name: this.CourseName, Duration: this.CourseDuration, Id: CourseId });
        this.ClearFields();
    };
    CoursesComponent.prototype.remove = function (Course) {
        this.coursesDocument = this.db.doc("courses/" + this.CourseId);
        this.coursesDocument.delete();
    };
    CoursesComponent.prototype.updateCourseRecord = function () {
        console.log(" - >" + this.CourseName);
        var UpdatedCourseData = { Name: this.CourseName, Duration: this.CourseDuration, Id: this.CourseId };
        this.coursesDocument = this.db.doc("courses/" + this.CourseId);
        this.coursesDocument.update(UpdatedCourseData);
    };
    CoursesComponent.prototype.PopulateModal = function (course) {
        console.log(" - >" + course.Name);
        this.CourseName = course.Name;
        this.CourseDuration = course.Duration;
        this.CourseId = course.Id;
    };
    CoursesComponent.prototype.ClearFields = function () {
        this.CourseName = "";
        this.CourseDuration = "";
        this.CourseId = "";
    };
    CoursesComponent.prototype.ngOnInit = function () {
    };
    CoursesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-courses',
            template: __webpack_require__(/*! ./courses.component.html */ "./src/app/courses/courses.component.html"),
            styles: [__webpack_require__(/*! ./courses.component.css */ "./src/app/courses/courses.component.css")]
        }),
        __metadata("design:paramtypes", [angularfire2_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"]])
    ], CoursesComponent);
    return CoursesComponent;
}());



/***/ }),

/***/ "./src/app/nav/nav.component.css":
/*!***************************************!*\
  !*** ./src/app/nav/nav.component.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/nav/nav.component.html":
/*!****************************************!*\
  !*** ./src/app/nav/nav.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarTogglerDemo03\" aria-controls=\"navbarTogglerDemo03\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <div class=\"navbar-brand\" ><h1><strong>Emertex</strong></h1 ></div>\n</nav>\n\n\n  <nav>\n  <div class=\"nav nav-pills p-3\" id=\"nav-tab\" role=\"tablist\">\n    <a class=\"nav-item nav-link active\" id=\"nav-courses-tab\" data-toggle=\"tab\" href=\"#nav-courses\" role=\"tab\" aria-controls=\"nav-courses\" aria-selected=\"true\">Courses</a>\n    <a class=\"nav-item nav-link\" id=\"nav-students-tab\" data-toggle=\"tab\" href=\"#nav-students\" role=\"tab\" aria-controls=\"nav-students\" aria-selected=\"false\">Students</a>\n    <a class=\"nav-item nav-link\" id=\"nav-teachers-tab\" data-toggle=\"tab\" href=\"#nav-teachers\" role=\"tab\" aria-controls=\"nav-teachers\" aria-selected=\"false\">Teachers</a>\n  </div>\n</nav>\n\n<div class=\"tab-content\" id=\"nav-tabContent\">\n  <div class=\"tab-pane fade show active\" id=\"nav-courses\" role=\"tabpanel\" aria-labelledby=\"nav-courses-tab\"><app-courses></app-courses></div>\n  <div class=\"tab-pane fade\" id=\"nav-students\" role=\"tabpanel\" aria-labelledby=\"nav-students-tab\"><app-student></app-student></div>\n  <div class=\"tab-pane fade\" id=\"nav-teachers\" role=\"tabpanel\" aria-labelledby=\"nav-teachers-tab\"><app-teacher></app-teacher></div>\n</div>"

/***/ }),

/***/ "./src/app/nav/nav.component.ts":
/*!**************************************!*\
  !*** ./src/app/nav/nav.component.ts ***!
  \**************************************/
/*! exports provided: NavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return NavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavComponent = /** @class */ (function () {
    function NavComponent() {
    }
    NavComponent.prototype.ngOnInit = function () {
    };
    NavComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-nav',
            template: __webpack_require__(/*! ./nav.component.html */ "./src/app/nav/nav.component.html"),
            styles: [__webpack_require__(/*! ./nav.component.css */ "./src/app/nav/nav.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavComponent);
    return NavComponent;
}());



/***/ }),

/***/ "./src/app/student/student.component.css":
/*!***********************************************!*\
  !*** ./src/app/student/student.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/student/student.component.html":
/*!************************************************!*\
  !*** ./src/app/student/student.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"cointainer-fluid\">\n<div class=\"p-3 bg-dark text-white\"><h4>Students <button type=\"button\" class=\"btn btn-success btn-small float-right\"   (click)=\"ClearFields()\" data-toggle=\"modal\"  data-target=\"#AddStudent\">Add</button></h4></div>\n<table class=\"table table-darkbg\">\n    <thead>\n      <tr>\n        <th>Name</th>\n        <th>Mobile</th>\n        <th>Email</th>\n        <th>Course</th>\n        <th>Edit</th> \n        <th>Delete</th>   \n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let Student of Students | async\">\n        <td>{{Student.Name}}</td>\n        <td>{{Student.Mobile}}</td>\n        <td>{{Student.Email}}</td>\n        <td>{{Student.Course}}</td>\n        <td><button type=\"button\" class=\"btn btn-dark btn-sm\" data-toggle=\"modal\"  data-target=\"#editStudent\" (click)=\"PopulateModal(Student)\">Edit</button></td>\n        <td><button type=\"button\" class=\"btn btn-dark btn-sm\" (click)=\"remove(Student)\">Delete</button></td>\n      </tr>\n  </tbody>\n</table>\n</div>\n<!-- Modal Add Student -->\n<div class=\"modal fade\" id=\"AddStudent\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalCenterTitle\" aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\" id=\"exampleModalCenterTitle\">Add Student</h5>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n            <div class=\"form-group row\">\n              <label class=\"col-sm-2 col-form-label\">Name</label>\n              <div class=\"col-sm-10\">\n                <input [(ngModel)]=\"StudentName\"  type=\"text\" class=\"form-control\"  placeholder=\"Enter Name\">\n              </div>\n            </div>\n            <div class=\"form-group row\">\n              <label class=\"col-sm-2 col-form-label\">Mobile</label>\n              <div class=\"col-sm-10\">\n                <input [(ngModel)]=\"StudentMobile\" type=\"text\" class=\"form-control\" placeholder=\"Enter Mobile Number\">\n              </div>\n            </div>\n            <div class=\"form-group row\">\n              <label class=\"col-sm-2 col-form-label\">Email</label>\n              <div class=\"col-sm-10\">\n                <input  [(ngModel)]=\"StudentEmail\" type=\"email\" class=\"form-control\" placeholder=\"Enter Email Address\">\n              </div>\n            </div>\n            <div class=\"form-group row\">\n              <label class=\"col-sm-2 col-form-label\">Course</label>\n              <div class=\"col-sm-10\">\n                <input  [(ngModel)]=\"StudentCourse\" type=\"text\" class=\"form-control\" placeholder=\"Enter Course\">\n              </div>\n            </div>\n            <!-- \n            <div class=\"form-group row\">\n              <label for=\"inputEmail3\" class=\"col-sm-2 col-form-label\">Course</label>\n              <div class=\"col-sm-10\">\n                <select class=\"custom-select my-1 mr-sm-2\" (change)=\"[(ngModel)]=$event.target.value)\" id=\"inlineFormCustomSelectPref\">\n                  <option selected>Choose...</option>\n                  <option value=\"1\">One</option>\n                  <option value=\"2\">Two</option>\n                  <option value=\"3\">Three</option>\n                </select>\n              </div>\n            </div> -->  \n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n        <button type=\"button\" class=\"btn btn-primary\" (click) = \"createNewStudentRecord()\" data-dismiss=\"modal\" >Save</button>\n      </div>\n    </div>\n  </div>\n</div>\n\n\n<!-- Modal Edit Student -->\n<div class=\"modal fade\" id=\"editStudent\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalCenterTitle\" aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <h5 class=\"modal-title\" id=\"exampleModalCenterTitle\">Update Student</h5>\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n        </div>\n        <div class=\"modal-body\">\n          <div class=\"form-group row\">\n            <label class=\"col-sm-2 col-form-label\">Name</label>\n            <div class=\"col-sm-10\">\n              <input [(ngModel)]=\"StudentName\"  type=\"text\" class=\"form-control\"  placeholder=\"Enter Name\">\n            </div>\n          </div>\n          <div class=\"form-group row\">\n            <label class=\"col-sm-2 col-form-label\">Mobile</label>\n            <div class=\"col-sm-10\">\n              <input [(ngModel)]=\"StudentMobile\" type=\"text\" class=\"form-control\" placeholder=\"Enter Mobile Number\">\n            </div>\n          </div>\n          <div class=\"form-group row\">\n            <label class=\"col-sm-2 col-form-label\">Email</label>\n            <div class=\"col-sm-10\">\n              <input  [(ngModel)]=\"StudentEmail\" type=\"email\" class=\"form-control\" placeholder=\"Enter Email Address\">\n            </div>\n          </div>\n          <div class=\"form-group row\">\n            <label class=\"col-sm-2 col-form-label\">Course</label>\n            <div class=\"col-sm-10\">\n              <input  [(ngModel)]=\"StudentCourse\" type=\"text\" class=\"form-control\" placeholder=\"Enter Course\">\n            </div>\n          </div>\n        </div>\n        <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n          <button type=\"button\" class=\"btn btn-primary\" (click) = \"updateStudentRecord(Student)\" data-dismiss=\"modal\" >Save</button>\n        </div>\n      </div>\n    </div>\n  </div>\n\n"

/***/ }),

/***/ "./src/app/student/student.component.ts":
/*!**********************************************!*\
  !*** ./src/app/student/student.component.ts ***!
  \**********************************************/
/*! exports provided: StudentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentComponent", function() { return StudentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var StudentComponent = /** @class */ (function () {
    function StudentComponent(db) {
        var _this = this;
        this.db = db;
        this.StudentId = "";
        this.StudentName = "";
        this.StudentMobile = "";
        this.StudentEmail = "";
        this.StudentCourse = "";
        this.Students = this.db.collection('students').valueChanges();
        this.Students.subscribe(function (students) { console.log(_this.Students); });
        this.StudentsCollection = this.db.collection('students');
    }
    ;
    StudentComponent.prototype.createNewStudentRecord = function () {
        var StudentId = this.db.createId();
        this.StudentsCollection.doc(StudentId).set({ Name: this.StudentName, Mobile: this.StudentMobile, Email: this.StudentEmail, Course: this.StudentCourse, Id: StudentId });
        this.ClearFields();
    };
    StudentComponent.prototype.remove = function (student) {
        this.StudentsDocument = this.db.doc("students/" + student.Id);
        this.StudentsDocument.delete();
    };
    StudentComponent.prototype.updateStudentRecord = function (student) {
        var UpdatedStudentData = { Name: this.StudentName, Mobile: this.StudentMobile, Email: this.StudentEmail, Course: this.StudentCourse, Id: this.StudentId };
        this.StudentsDocument = this.db.doc("students/" + this.StudentId);
        this.StudentsDocument.update(UpdatedStudentData);
    };
    StudentComponent.prototype.PopulateModal = function (student) {
        this.StudentName = student.Name;
        this.StudentMobile = student.Mobile;
        this.StudentEmail = student.Email;
        this.StudentCourse = student.Course;
        this.StudentId = student.Id;
    };
    StudentComponent.prototype.ClearFields = function () {
        this.StudentName = "";
        this.StudentMobile = "";
        this.StudentEmail = "";
        this.StudentCourse = "";
        this.StudentId = "";
    };
    StudentComponent.prototype.ngOnInit = function () {
    };
    StudentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-student',
            template: __webpack_require__(/*! ./student.component.html */ "./src/app/student/student.component.html"),
            styles: [__webpack_require__(/*! ./student.component.css */ "./src/app/student/student.component.css")]
        }),
        __metadata("design:paramtypes", [angularfire2_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"]])
    ], StudentComponent);
    return StudentComponent;
}());



/***/ }),

/***/ "./src/app/teacher/teacher.component.css":
/*!***********************************************!*\
  !*** ./src/app/teacher/teacher.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/teacher/teacher.component.html":
/*!************************************************!*\
  !*** ./src/app/teacher/teacher.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"cointainer-fluid\">\n  <div class=\"p-3 bg-dark text-white\"><h4>Teachers <button type=\"button\" class=\"btn btn-success btn-small float-right\"  (click)=\"ClearFields()\" data-toggle=\"modal\"  data-target=\"#AddTeacher\" >Add</button></h4></div>\n\n<table class=\"table table-darkbg\">\n  <thead>\n    <tr>\n      <th>Name</th>\n      <th>Mobile</th>\n      <th>Email</th>\n      <th>Designation</th>\n      <th>Edit</th> \n      <th>Delete</th>      \n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let teacher of teachers | async\">\n      <td >{{teacher.Name}}</td>\n      <td >{{teacher.Mobile}}</td>\n      <td >{{teacher.Email}}</td>\n      <td >{{teacher.Designation}}</td>\n      <td><button type=\"button\" class=\"btn btn-dark btn-sm\" data-toggle=\"modal\"  data-target=\"#editTeacher\"  (click)=\"PopulateModal(teacher)\">Edit</button></td>\n      <td><button type=\"button\" class=\"btn btn-dark btn-sm\" (click)=\"remove(teacher)\">Delete</button></td>\n    </tr>\n  </tbody>\n</table>\n</div>\n\n\n<!-- Modal Add Teacher -->\n<div class=\"modal fade\" id=\"AddTeacher\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalCenterTitle\" aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\" id=\"exampleModalCenterTitle\">Add Teacher</h5>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <div class=\"form-group row\">\n          <label class=\"col-sm-2 col-form-label\">Name</label>\n          <div class=\"col-sm-10\">\n            <input [(ngModel)]=\"teacherName\"  type=\"text\" class=\"form-control\"  placeholder=\"Enter Name\">\n          </div>\n        </div>\n        <div class=\"form-group row\">\n          <label class=\"col-sm-2 col-form-label\">Mobile</label>\n          <div class=\"col-sm-10\">\n            <input [(ngModel)]=\"teacherMobile\" type=\"text\" class=\"form-control\" placeholder=\"Enter Mobile Number\">\n          </div>\n        </div>\n        <div class=\"form-group row\">\n          <label class=\"col-sm-2 col-form-label\">Email</label>\n          <div class=\"col-sm-10\">\n            <input  [(ngModel)]=\"teacherEmail\" type=\"email\" class=\"form-control\" placeholder=\"Enter Email Address\">\n          </div>\n        </div>\n        <div class=\"form-group row\">\n          <label class=\"col-sm-2 col-form-label\">Course</label>\n          <div class=\"col-sm-10\">\n            <input  [(ngModel)]=\"teacherDesignation\" type=\"text\" class=\"form-control\" placeholder=\"Enter Designation\">\n          </div>\n        </div>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n        <button type=\"button\" class=\"btn btn-primary\" (click) = \"createNewTeacherRecord()\" data-dismiss=\"modal\" >Save</button>\n      </div>\n    </div>\n  </div>\n</div>\n\n\n<!-- Modal Edit Teacher -->\n<div class=\"modal fade\" id=\"editTeacher\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalCenterTitle\" aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <h5 class=\"modal-title\" id=\"exampleModalCenterTitle\">Update Teacher</h5>\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n        </div>\n        <div class=\"modal-body\">\n          <div class=\"form-group row\">\n            <label class=\"col-sm-2 col-form-label\">Name</label>\n            <div class=\"col-sm-10\">\n              <input [(ngModel)]=\"teacherName\"  type=\"text\" class=\"form-control\"  placeholder=\"Enter Name\">\n            </div>\n          </div>\n          <div class=\"form-group row\">\n            <label class=\"col-sm-2 col-form-label\">Mobile</label>\n            <div class=\"col-sm-10\">\n              <input [(ngModel)]=\"teacherMobile\" type=\"text\" class=\"form-control\" placeholder=\"Enter Mobile Number\">\n            </div>\n          </div>\n          <div class=\"form-group row\">\n            <label class=\"col-sm-2 col-form-label\">Email</label>\n            <div class=\"col-sm-10\">\n              <input  [(ngModel)]=\"teacherEmail\" type=\"email\" class=\"form-control\" placeholder=\"Enter Email Address\">\n            </div>\n          </div>\n          <div class=\"form-group row\">\n            <label class=\"col-sm-2 col-form-label\">Course</label>\n            <div class=\"col-sm-10\">\n              <input  [(ngModel)]=\"teacherDesignation\" type=\"text\" class=\"form-control\" placeholder=\"Enter Designation\">\n            </div>\n          </div>\n        </div>\n        <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n          <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\" (click) = \"updateTeacherRecord(teacher)\">Save</button>\n        </div>\n      </div>\n    </div>\n  </div>\n"

/***/ }),

/***/ "./src/app/teacher/teacher.component.ts":
/*!**********************************************!*\
  !*** ./src/app/teacher/teacher.component.ts ***!
  \**********************************************/
/*! exports provided: TeacherComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeacherComponent", function() { return TeacherComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TeacherComponent = /** @class */ (function () {
    function TeacherComponent(db) {
        var _this = this;
        this.db = db;
        this.teacherId = "";
        this.teacherName = "";
        this.teacherMobile = "";
        this.teacherEmail = "";
        this.teacherDesignation = "";
        this.teachers = this.db.collection('teachers').valueChanges();
        this.teachers.subscribe(function (teachers) { console.log(_this.teachers); });
        this.teachersCollection = this.db.collection('teachers');
    }
    ;
    TeacherComponent.prototype.createNewTeacherRecord = function () {
        var teacherId = this.db.createId();
        this.teachersCollection.doc(teacherId).set({ Name: this.teacherName, Mobile: this.teacherMobile, Email: this.teacherEmail, Designation: this.teacherDesignation, Id: teacherId });
        this.ClearFields();
    };
    TeacherComponent.prototype.remove = function (teacher) {
        this.teacherDocument = this.db.doc("teachers/" + teacher.Id);
        this.teacherDocument.delete();
    };
    TeacherComponent.prototype.updateTeacherRecord = function (teacher) {
        var UpdatedTeacherData = { Name: this.teacherName, Mobile: this.teacherMobile, Email: this.teacherEmail, Designation: this.teacherDesignation, Id: this.teacherId };
        this.teacherDocument = this.db.doc("teachers/" + this.teacherId);
        this.teacherDocument.update(UpdatedTeacherData);
    };
    TeacherComponent.prototype.PopulateModal = function (teacher) {
        this.teacherName = teacher.Name;
        this.teacherMobile = teacher.Mobile;
        this.teacherEmail = teacher.Email;
        this.teacherDesignation = teacher.Designation;
        this.teacherId = teacher.Id;
    };
    TeacherComponent.prototype.ClearFields = function () {
        this.teacherName = "";
        this.teacherMobile = "";
        this.teacherEmail = "";
        this.teacherDesignation = "";
        this.teacherId = "";
    };
    TeacherComponent.prototype.ngOnInit = function () {
    };
    TeacherComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-teacher',
            template: __webpack_require__(/*! ./teacher.component.html */ "./src/app/teacher/teacher.component.html"),
            styles: [__webpack_require__(/*! ./teacher.component.css */ "./src/app/teacher/teacher.component.css")]
        }),
        __metadata("design:paramtypes", [angularfire2_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"]])
    ], TeacherComponent);
    return TeacherComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    firebase: {
        apiKey: "AIzaSyDDnSV3jzNqVSLiKuvqylNd84EnS9AeeX0",
        authDomain: "emertex-employee.firebaseapp.com",
        databaseURL: "https://emertex-employee.firebaseio.com",
        projectId: "emertex-employee",
        storageBucket: "emertex-employee.appspot.com",
        messagingSenderId: "392218843186"
    }
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Volumes/PROJECTS/ANGULAR/Courses/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map