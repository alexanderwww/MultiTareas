 // ------------------------------------------------------------------Envio de Form por Form Data
let form=document.querySelector('form');
form.addEventListener('submit',(e)=>{
    e.preventDefault()
    const formDt=new FormData(form);
    subir(formDt);

})

async function subir(form){

    fetch('ctrl.php',{
        method:'POST',
        body: form,

    })

}

 // ------------------------------------------------------------------Select mutiples Checbox

let checkGeneral=document.querySelector('#selecionarAll');
let allCheck=document.querySelectorAll('.check');


// Selecionar y deselecionar todos los Checkbox
checkGeneral.addEventListener('click',(e)=>{

    if(checkGeneral.checked){
        allCheck.forEach(item=>{
            item.checked=true;
        })
    }
    else{
        allCheck.forEach(item=>{
            item.checked=false;
        })
    }
})

// Verificar si todo los checkbox estan selecionados o no 
// Para quitar o poner el checkbox General en selecionado o no
allCheck.forEach(item=>{

    // Click a algun item 
    item.addEventListener('click',element=>{

        let array=[];
        // Verificar si estan marcados todos 
        allCheck.forEach(e=>{
            if(!e.checked){
                array.push('no selecionadato todos');
            }

        })

        if(!array.length==0){
                checkGeneral.checked=false;
        }else{
            checkGeneral.checked=true;
        }

    })
})
// let Bio='https://www.techiedelight.com/es/check-existence-attribute-javascript/'

