(()=>{"use strict";let e=[];window.addEventListener("load",(()=>{if(null===localStorage.getItem("todoList"))console.log("no todolist available in local storage"),e=[];else{let t=localStorage.getItem("todoList");e=JSON.parse(t)}}));class t{constructor(e="no title",t="no description",o="no due date",n="no priority",d="no notes for now",i,a=!1,r=crypto.randomUUID()){this.todoTitle=e,this.todoDescription=t,this.todoDueDate=o,this.todoPriority=n,this.todoNotes=d,this.todoProject=["Default"].concat(i),this.todoCompletionStatus=a,this.todoId=r}}const o=e=>{localStorage.setItem("todoList",JSON.stringify(e)),i()};document.querySelector(".newTodoForm").addEventListener("submit",(t=>{t.preventDefault(),console.log(e);let d=n(t.target.newTodoTitle.value,t.target.newTodoDescription.value,t.target.newTodoDueDate.value,t.target.newTodoPriority.value,void 0,t.target.newTodoProject.value,!1);console.log(d),(t=>{e.push(t),o(e)})(d)}));const n=(e,o,n,d,i,a,r)=>new t(e,o,n,d,i,a,r),d=t=>{const n=document.querySelector(".todoListContainer"),d=e.findIndex((e=>e.id===t.id));console.log(d);const i=document.createElement("form");i.classList.add("editTodoForm"),i.id="editTodoForm",n.prepend(i);const a=document.createElement("h1");a.innerText="Edit Todo",i.append(a);const r=document.createElement("label");r.classList.add("editTodoFormLabel"),r.innerText="Title",r.htmlFor="editTodoTitle",i.append(r);const l=document.createElement("input");l.classList.add("editTodoTitle"),l.value=t.title,l.id="editTodoTitle",l.name="editTodoTitle",i.append(l);const s=document.createElement("label");s.classList.add("editTodoFormLabel"),s.innerText="Description",s.htmlFor="editTodoDescription",i.append(s);const c=document.createElement("textarea");c.classList.add("editTodoDescription"),c.value=t.description,c.id="editTodoDescription",c.name="editTodoDescription",i.append(c);const u=document.createElement("label");u.classList.add("editTodoFormLabel"),u.innerText="Due Date",u.htmlFor="editTodoDueDate",i.append(u);const m=document.createElement("input");m.classList.add("editTodoDueDate"),m.type="date",m.value=t.dueDate,m.id="editTodoDueDate",m.name="editTodoDueDate",i.append(m);const p=document.createElement("p");p.innerText="Priority",p.classList.add("editTodoFormLabel"),i.append(p),["high","medium","low"].forEach((e=>{const o=document.createElement("div");o.classList.add("radioWrapper");const n=document.createElement("input");n.classList.add("editTodoPriority"),n.type="radio",n.value=e,n.id=`editTodoPriority-${e}`,n.name="editTodoPriority",n.checked=t.priority===e,o.append(n);const d=document.createElement("label");d.classList.add("editTodoFormLabel"),d.htmlFor=`editTodoPriority-${e}`,d.innerText=e,o.append(d),i.append(o)}));const T=document.createElement("button");T.classList.add("editTodoResetFormButton"),T.innerText="Reset",T.type="reset",i.append(T);const h=document.createElement("button");h.classList.add("todoEditSubmitButton"),h.type="submit",h.innerText="Submit",i.append(h),i.addEventListener("submit",(t=>{t.preventDefault(),e[d].title=t.target.editTodoTitle.value,e[d].description=t.target.editTodoDescription.value,e[d].dueDate=t.target.editTodoDueDate.value,e[d].priority=t.target.editTodoPriority.value,console.log(e),o(e)}))},i=(document.querySelector(".todoListContainer"),()=>{document.querySelector(".todoListContainer").innerHTML="";let t=(()=>{let e=localStorage.getItem("todoList");return null===e?(console.log("no todolist available in local storage - retrievedTodoListFromLocalStorage()"),null):JSON.parse(e)})();const n=document.querySelector(".todoListContainer");if(null===t||t.length<=0){console.log("no todos in this list");const e=document.createElement("p");e.innerText="Congratulations, no toDos left!",e.classList.add("noTodosText"),n.append(e)}else t.forEach((t=>{n.append((t=>{const n=document.createElement("div");n.classList.add("todoItemCard"),n.append((e=>{const t=document.createElement("h1");return t.innerText=e,t.classList.add("todoTitle"),t})(t.title)),n.append((e=>{const t=document.createElement("p");return t.innerText=e,t.classList.add("todoDescription"),t})(t.description)),n.append((e=>{const t=document.createElement("p");return e=(e=new Date(e)).toLocaleString("es-ES",{timeZone:"GMT",day:"2-digit",month:"2-digit",year:"numeric"}),t.innerText=e,t.classList.add("todoDueDate"),t})(t.dueDate)),n.append((e=>{const t=document.createElement("p");return t.innerText=e,t.classList.add("todoPriority"),t})(t.priority)),n.append((e=>{const t=document.createElement("p");return t.innerText=e,t.classList.add("todoNotes"),t})(t.notes)),n.append((e=>{const t=document.createElement("p");return t.innerText=e,t.classList.add("todoProjects"),t})(t.project)),n.append(((e,t)=>{const o=document.createElement("p");return o.innerText=e,o.classList.add("todoCompletionStatus"),!0===e?(o.innerText="Completed",t.classList.add("todoCompleted")):(o.innerText="Pending",t.classList.add("todoPending")),o})(t.completionStatus,n)),n.append((()=>{const e=document.createElement("div");return e.classList.add("buttonsDiv"),e})());const i=n.querySelector(".buttonsDiv");return i.append((t=>{const n=document.createElement("button");return n.classList.add("toggleCompletionStatusButton"),!0===t.completionStatus?n.innerText="Mark as Pending":n.innerText="Mark as Completed",n.addEventListener("click",(()=>{const n=e.findIndex((e=>e.id===t.id)),d=!0!==t.completionStatus;e[n].completionStatus=d,o(e)})),n})(t)),i.append((t=>{const n=document.createElement("button");return n.classList.add("deleteTodoButton"),n.innerText="Delete Todo",n.addEventListener("click",(()=>{const n=e.findIndex((e=>e.id===t.id));e.splice(n,1),o(e)})),n})(t)),i.append((e=>{const t=document.createElement("button");return t.classList.add("editTodoButton"),t.innerText="Edit",t.addEventListener("click",(()=>{console.log(e),d(e)})),t})(t)),n})(t))}))});document.querySelector(".deleteAllTodosButton").addEventListener("click",(()=>{e=[],localStorage.removeItem("todoList"),i()})),document.querySelector(".createDummyDataButton").addEventListener("click",(()=>{a(e)}));const a=e=>{let t=prompt("how many dummy To-Dos would you like to create?");if(!0===isNaN(t))alert("Please enter a number.");else for(let o=0;o<t;o++){const t=r(),o=l(),d=s(),i=c(),a=u(),T=m(),h=p();let g=n(t,o,d,i,a,T,h);e.push(g)}o(e)},r=()=>{let e=["Organize","Exercise","Budgeting","Save","Mediate","Read","Connect","Learn","Declutter","Gratitude","Create","Rest","Plan","Reflect"];return e[Math.floor(Math.random()*e.length)]},l=()=>{const e=["A brief overview of the history of the internet and its impact on modern society.","An introduction to the principles of object-oriented programming and its applications.","A discussion on the importance of sustainable practices in modern agriculture.","An analysis of the role of artificial intelligence in healthcare and medicine.","A review of the latest trends in fashion and their influence on popular culture."];return e[Math.floor(Math.random()*e.length)]},s=()=>{let e=new Date;return e.setDate(e.getDate()+Math.floor(7*Math.random())),e.toISOString().split("T")[0]},c=()=>{let e=["low","medium","high"];return e[Math.floor(Math.random()*e.length)]},u=()=>{let e=["Check inventory","Follow up email","Submit proposal","Pay bills online","Finish report","Schedule meeting","Call client","Clean office space","Buy groceries","File tax return"];return e[Math.floor(Math.random()*e.length)]},m=()=>{},p=()=>{let e=[!0,!1];return e[Math.floor(Math.random()*e.length)]};i()})();