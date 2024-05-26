(()=>{"use strict";let e=[];window.addEventListener("load",(()=>{if(null===localStorage.getItem("todoList"))console.log("no todolist available in local storage"),e=[];else{let t=localStorage.getItem("todoList");e=JSON.parse(t)}}));class t{constructor(e="no title",t="no description",o="no due date",n="no priority",r="no notes for now",a,i=!1,l=Math.floor(1e7*Math.random())){this.title=e,this.description=t,this.dueDate=o,this.priority=n,this.notes=r,this.project=["Default"].concat(a),this.completionStatus=i,this.id=l}}const o=e=>{localStorage.setItem("todoList",JSON.stringify(e)),r()};document.querySelector(".newTodoForm").addEventListener("submit",(t=>{t.preventDefault(),console.log(e);let r=n(t.target.newTodoTitle.value,t.target.newTodoDescription.value,t.target.newTodoDueDate.value,t.target.newTodoPriority.value,void 0,t.target.newTodoProject.value,!1);console.log(r),(t=>{e.push(t),o(e)})(r)}));const n=(e,o,n,r,a,i,l)=>new t(e,o,n,r,a,i,l),r=(document.querySelector(".todoListContainer"),()=>{document.querySelector(".todoListContainer").innerHTML="";let t=(()=>{let e=localStorage.getItem("todoList");return null===e?(console.log("no todolist available in local storage - retrievedTodoListFromLocalStorage()"),null):JSON.parse(e)})();const n=document.querySelector(".todoListContainer");if(null===t||t.length<=0){console.log("no todos in this list");const e=document.createElement("p");e.innerText="Congratulations, no toDos left!",e.classList.add("noTodosText"),n.append(e)}else t.forEach((t=>{n.append((t=>{const n=document.createElement("div");n.classList.add("todoItemCard"),n.append((e=>{const t=document.createElement("h1");return t.innerText=e,t.classList.add("todoTitle"),t})(t.title)),n.append((e=>{const t=document.createElement("p");return t.innerText=e,t.classList.add("todoDescription"),t})(t.description)),n.append((e=>{const t=document.createElement("p");return t.innerText=e,t.classList.add("todoDueDate"),t})(t.dueDate)),n.append((e=>{const t=document.createElement("p");return t.innerText=e,t.classList.add("todoPriority"),t})(t.priority)),n.append((e=>{const t=document.createElement("p");return t.innerText=e,t.classList.add("todoNotes"),t})(t.notes)),n.append((e=>{const t=document.createElement("p");return t.innerText=e,t.classList.add("todoProjects"),t})(t.project)),n.append((e=>{const t=document.createElement("p");return t.innerText=e,t.classList.add("todoCompletionStatus"),t.innerText=!0===e?"Completed":"Pending",t})(t.completionStatus)),n.append((()=>{const e=document.createElement("div");return e.classList.add("buttonsDiv"),e})());const r=n.querySelector(".buttonsDiv");return r.append((t=>{const n=document.createElement("button");return n.classList.add("toggleCompletionStatusButton"),!0===t.completionStatus?n.innerText="Mark as Pending":n.innerText="Mark as Completed",n.addEventListener("click",(()=>{console.log(t);const n=e.findIndex((e=>e.id===t.id)),r=!0!==t.completionStatus;e[n].completionStatus=r,o(e)})),n})(t)),r.append((t=>{const n=document.createElement("button");return n.classList.add("deleteTodoButton"),n.innerText="Delete Todo",n.addEventListener("click",(()=>{const n=e.findIndex((e=>e.id===t.id));e.splice(n,1),o(e)})),n})(t)),n})(t))}))});document.querySelector(".deleteAllTodosButton").addEventListener("click",(()=>{e=[],localStorage.removeItem("todoList"),r()})),document.querySelector(".createDummyDataButton").addEventListener("click",(()=>{a(e)}));const a=e=>{let t=prompt("how many dummy To-Dos would you like to create?");if(!0===isNaN(t))alert("Please enter a number.");else for(let o=0;o<t;o++){const t=i(),o=l(),r=s(),a=d(),p=c(),h=u(),g=m();let f=n(t,o,r,a,p,h,g);e.push(f)}o(e)},i=()=>{let e=["Organize","Exercise","Budgeting","Save","Mediate","Read","Connect","Learn","Declutter","Gratitude","Create","Rest","Plan","Reflect"];return e[Math.floor(Math.random()*e.length)]},l=()=>{const e=["A brief overview of the history of the internet and its impact on modern society.","An introduction to the principles of object-oriented programming and its applications.","A discussion on the importance of sustainable practices in modern agriculture.","An analysis of the role of artificial intelligence in healthcare and medicine.","A review of the latest trends in fashion and their influence on popular culture."];return e[Math.floor(Math.random()*e.length)]},s=()=>{let e=new Date;return e.setDate(e.getDate()+Math.floor(7*Math.random())),e.toISOString().split("T")[0]},d=()=>{let e=["low","medium","high"];return e[Math.floor(Math.random()*e.length)]},c=()=>{let e=["Check inventory","Follow up email","Submit proposal","Pay bills online","Finish report","Schedule meeting","Call client","Clean office space","Buy groceries","File tax return"];return e[Math.floor(Math.random()*e.length)]},u=()=>{},m=()=>{let e=[!0,!1];return e[Math.floor(Math.random()*e.length)]};r()})();