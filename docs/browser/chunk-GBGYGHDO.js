import{a as O,b as S,c as v,e as T,f as W,g as D,h as R}from"./chunk-I5QRB5NG.js";import{$ as f,A as r,B as g,E as h,J as d,N as p,Q as n,R as i,U as c,V as P,W as a,X as m,Z as _,_ as y,aa as C,ka as k,ma as w,sa as x,ua as b,wa as M}from"./chunk-H7GECWOW.js";function I(s,o){if(s&1&&(n(0,"option"),a(1),i()),s&2){let e=o.$implicit;r(),m(e)}}function N(s,o){if(s&1&&(n(0,"tr")(1,"td"),a(2),i(),n(3,"td"),a(4),i(),n(5,"td"),a(6),i(),n(7,"td"),a(8),i()()),s&2){let e=o.$implicit,t=P();r(2),m(e.name),r(2),m(t.getWorkoutTypes(e.workouts)),r(2),m(e.workouts.length),r(2),m(t.getTotalMinutes(e.workouts))}}var E=class s{constructor(o,e){this.route=o;this.router=e}userName="";workoutType="";workoutMinutes=null;userData=[{id:1,name:"John Doe",workouts:[{type:"Running",minutes:30},{type:"Cycling",minutes:45}]},{id:2,name:"Jane Smith",workouts:[{type:"Swimming",minutes:60},{type:"Running",minutes:20}]},{id:3,name:"Mike Johnson",workouts:[{type:"Yoga",minutes:50},{type:"Cycling",minutes:40}]},{id:4,name:"Harry Potter",workouts:[{type:"Swimming",minutes:45},{type:"Yoga",minutes:25}]},{id:5,name:"Hermione Granger",workouts:[{type:"Cycling",minutes:20},{type:"Running",minutes:40},{type:"yoga",minutes:32}]},{id:6,name:"Ron Weasley",workouts:[{type:"Running",minutes:40},{type:"Cycling",minutes:30}]},{id:7,name:"Tony Stark",workouts:[{type:"Swimming",minutes:40},{type:"Yoga",minutes:30}]},{id:8,name:"Steve Rogers",workouts:[{type:"Running",minutes:40},{type:"Cycling",minutes:60}]},{id:9,name:"Natasha Romanoff",workouts:[{type:"Swimming",minutes:25},{type:"Yoga",minutes:30}]},{id:10,name:"Bruce Banner",workouts:[{type:"Yoga",minutes:10},{type:"Swimming",minutes:24}]},{id:11,name:"Thor Odinson",workouts:[{type:"Running",minutes:16},{type:"Cycling",minutes:12},{type:"Yoga",minutes:32}]},{id:12,name:"Monica Geller",workouts:[{type:"Swimming",minutes:14},{type:"Yoga",minutes:90}]},{id:13,name:"Chandler Bing",workouts:[{type:"Running",minutes:50},{type:"Cycling",minutes:10},{type:"Yoga",minutes:20}]},{id:14,name:"Rachel Green",workouts:[{type:"Swimming",minutes:20},{type:"Yoga",minutes:60}]},{id:15,name:"Joey Tribbiani",workouts:[{type:"Running",minutes:180},{type:"Cycling",minutes:120}]},{id:16,name:"Phoebe Buffay",workouts:[{type:"Swimming",minutes:90},{type:"Yoga",minutes:150}]},{id:17,name:"Loki Laufeyson",workouts:[{type:"Running",minutes:160},{type:"Cycling",minutes:110}]},{id:18,name:"Dr. Strange",workouts:[{type:"Yoga",minutes:200},{type:"Swimming",minutes:180}]},{id:19,name:"Wanda Maximoff",workouts:[{type:"Running",minutes:15},{type:"Cycling",minutes:20},{type:"yoga",minutes:45}]},{id:20,name:"Vision",workouts:[{type:"Yoga",minutes:220},{type:"Swimming",minutes:140}]}];storedData;searchQuery="";selectedWorkoutType="";availableWorkoutTypes=["Running","Cycling","Swimming","Yoga"];currentPage=1;itemsPerPage=5;ngOnInit(){try{this.storedData=JSON.parse(localStorage.getItem("workouts")||"[]"),this.userData=Array.isArray(this.storedData)?this.storedData:[]}catch{console.error("Invalid data in localStorage"),this.userData=[]}}getTotalPages(){return Math.ceil(this.filteredUsers().length/this.itemsPerPage)}nextPage(){this.currentPage<this.getTotalPages()&&this.currentPage++}previousPage(){this.currentPage>1&&this.currentPage--}getPagedData(){let o=(this.currentPage-1)*this.itemsPerPage,e=o+this.itemsPerPage;return this.filteredUsers().slice(o,e)}getTotalMinutes(o){return o.reduce((e,t)=>e+t.minutes,0)}getWorkoutTypes(o){return o.map(e=>e.type).join(", ")}filteredUsers(){return this.userData.filter(o=>{let e=o.name.toLowerCase().includes(this.searchQuery.toLowerCase()),t=this.selectedWorkoutType===""||o.workouts.some(l=>l.type===this.selectedWorkoutType);return e&&t})}goToAnalysis(){this.router.navigate(["/analysis"])}static \u0275fac=function(e){return new(e||s)(g(x),g(b))};static \u0275cmp=h({type:s,selectors:[["app-display-workout"]],decls:30,vars:8,consts:[[1,"filter-container"],["type","text","placeholder","Search by name",3,"ngModelChange","ngModel"],[3,"ngModelChange","ngModel"],["value",""],[4,"ngFor","ngForOf"],[1,"pagination"],[3,"click","disabled"],[1,"analysis-button-container"],[3,"click"]],template:function(e,t){e&1&&(n(0,"div",0)(1,"input",1),C("ngModelChange",function(u){return f(t.searchQuery,u)||(t.searchQuery=u),u}),i(),n(2,"select",2),C("ngModelChange",function(u){return f(t.selectedWorkoutType,u)||(t.selectedWorkoutType=u),u}),n(3,"option",3),a(4,"All"),i(),d(5,I,2,1,"option",4),i()(),n(6,"table")(7,"thead")(8,"tr")(9,"th"),a(10,"Name"),i(),n(11,"th"),a(12,"Workouts"),i(),n(13,"th"),a(14,"Number of Workouts"),i(),n(15,"th"),a(16,"Total Workout Minutes"),i()()(),n(17,"tbody"),d(18,N,9,4,"tr",4),i()(),n(19,"div",5)(20,"button",6),c("click",function(){return t.previousPage()}),a(21,"Previous"),i(),n(22,"span"),a(23),i(),n(24,"button",6),c("click",function(){return t.nextPage()}),a(25,"Next"),i()(),n(26,"div")(27,"div",7)(28,"button",8),c("click",function(){return t.goToAnalysis()}),a(29,"Analysis"),i()()()),e&2&&(r(),y("ngModel",t.searchQuery),r(),y("ngModel",t.selectedWorkoutType),r(3),p("ngForOf",t.availableWorkoutTypes),r(13),p("ngForOf",t.getPagedData()),r(2),p("disabled",t.currentPage===1),r(3),_("Page ",t.currentPage," of ",t.getTotalPages(),""),r(),p("disabled",t.currentPage===t.getTotalPages()))},dependencies:[M,w,k,R,W,D,O,T,S,v],styles:[".workout-table[_ngcontent-%COMP%]{margin:20px;font-family:Arial,sans-serif}table[_ngcontent-%COMP%]{width:100%;margin:0 auto;border-collapse:collapse;max-width:90%}th[_ngcontent-%COMP%], td[_ngcontent-%COMP%]{padding:12px;text-align:left;border:1px solid #ddd}thead[_ngcontent-%COMP%]{background-color:#f2f2f2}h2[_ngcontent-%COMP%]{text-align:center;margin-bottom:20px}.filter-container[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;gap:10px;margin:20px 5%;flex-wrap:wrap}input[type=text][_ngcontent-%COMP%], select[_ngcontent-%COMP%]{padding:10px;border:1px solid #ccc;border-radius:4px;width:100%;max-width:300px;transition:border-color .3s ease,box-shadow .3s ease}input[type=text][_ngcontent-%COMP%]:focus, select[_ngcontent-%COMP%]:focus{outline:none;border-color:#007bff;box-shadow:0 0 5px #007bff80}.pagination[_ngcontent-%COMP%]{display:flex;justify-content:center;flex-wrap:wrap;margin-top:20px;gap:5px}.pagination[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{padding:10px;margin:0 5px;cursor:pointer}.pagination[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:disabled{cursor:not-allowed;opacity:.5}@media (max-width: 768px){.filter-container[_ngcontent-%COMP%]{flex-direction:column;align-items:flex-start}table[_ngcontent-%COMP%]{width:100%;margin:0 auto}th[_ngcontent-%COMP%], td[_ngcontent-%COMP%]{padding:10px}.pagination[_ngcontent-%COMP%]{flex-direction:row}}@media (max-width: 480px){th[_ngcontent-%COMP%], td[_ngcontent-%COMP%]{padding:8px}.filter-container[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%], .filter-container[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]{font-size:14px}.pagination[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{padding:8px;font-size:14px}}.analysis-button-container[_ngcontent-%COMP%]{display:flex;justify-content:flex-end;margin:20px 40px}.analysis-button-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{background-color:#007bff;color:#fff;padding:10px 20px;font-size:16px;border:none;border-radius:4px;cursor:pointer;transition:background-color .3s ease,transform .2s}.analysis-button-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{background-color:#0056b3;transform:scale(1.05)}.analysis-button-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:active{transform:scale(1)}@media (max-width: 768px){.analysis-button-container[_ngcontent-%COMP%]{justify-content:center}.analysis-button-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:100%;max-width:200px}}"]})};export{E as DisplayWorkoutComponent};
