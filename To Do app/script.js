const inputBox = document.getElementById("input-box")
const listContainer= document.getElementById("list-container");
const Btn = document.querySelector("button");


Btn.addEventListener('click',addTask);      // this is used to add click event on button 


function addTask(){ 
    if(inputBox.value === ''){
        alert("Add something in the text box!");

    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);  // it means that we are adding our new element using appendchild
        let span = document.createElement("span");
        span.innerHTML = "\u00D7";     //this is a cross sign which will be shown next to each
        li.appendChild(span)
}
        inputBox.value = "";
        saveData()

}

    listContainer.addEventListener("click", function(e){
        if(e.target.tagName === "LI"){
            e.target.classList.toggle('checked');
            saveData()
        }
        else if(e.target.tagName ==="SPAN"){
            e.target.parentElement.remove();   //it removes the parent of clicked element i.e., <li> from its parent i
            saveData()
        }
    },false);

    function saveData(){
        localStorage.setItem('data', listContainer.innerHTML);          /*it use for we are reloading 
                                                                       the date and after reloading we can see data as it is */
    }

    function showtask(){
        listContainer.innerHTML=localStorage.getItem('data');
    }
    showtask();