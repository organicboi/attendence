let text = "";

for ( let i=1 ; i < 151;i++){
    text += `<label class="label"
    > ${i}
    <input id="input" type="checkbox" />
    <span class="checkmark"></span>
  </label>`;
}

document.getElementById("container-1").innerHTML = text;































// text = ""
// for ( let i=11 ; i < 21;i++){
    
//     text += `<label class="container"
//     > ${i}
//     <input type="checkbox" />
//     <span class="checkmark"></span>
//   </label>`;
// }
// document.getElementById("container-2").innerHTML = text;


// text = ""
// for ( let i=21 ; i < 31;i++){
//     text += `<label class="container"
//     > ${i}
//     <input type="checkbox" />
//     <span class="checkmark"></span>
//   </label>`;
// }

// document.getElementById("container-3").innerHTML = text;