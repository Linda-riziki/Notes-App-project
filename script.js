const notesContainer = document.querySelector(".notescontainer");
const createBtn = document.querySelector(".btn");

/* understand this */

    function showNotes(){
        const savedNotes = localStorage.getItem("notes"); // retrieve notes from local storage
        notesContainer.innerHTML = savedNotes || ""; // Set notes or default to empty

        // Reapply contenteditable attribute to all notes
        const notes = notesContainer.querySelectorAll(".input-box");
        notes.forEach((note) => {
        note.setAttribute("contenteditable", "true"); // make each notes editable
        });
    }
    
    //function to update localStorage with current notes
    function updateStorage(){
        localStorage.setItem("notes", notesContainer.innerHTML); // store notes in localstorage
    }

    // Call showNotes on page load to restore notes
    showNotes();

    createBtn.addEventListener("click", ()=>{
        let inputBox = document.createElement("p");
        inputBox.className = "input-box";
        inputBox.setAttribute("contenteditable", "true"); // Makes it editable
        inputBox.textContent = "New Note"; // Optional placeholder text
        notesContainer.appendChild(inputBox); // Add note to container
        
        //Save the updated notes to localStorage
        updateStorage();
    });

    // Save changes to localStorage when notes are edited
     notesContainer.addEventListener("input", () => {
     updateStorage();
    });

    


