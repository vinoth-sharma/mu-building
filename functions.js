function createRow15Front(no){
    let row1 = document.getElementById('row'+no)
    let e1 = document.createElement('glass-1')
    let e2 = document.createElement('glass-1')
    let e3 = document.createElement('glass-3')
    let e4 = document.createElement('glass-2')
    let e5 = document.createElement('glass-1')
    let e6 = document.createElement('glass-3')
    let e7 = document.createElement('glass-1')
    let e8 = document.createElement('glass-3')
    let e9 = document.createElement('glass-2')
    let e10 = document.createElement('glass-1')
    let e11 = document.createElement('div')
    e11.setAttribute('class','box_l')
    let e12 = document.createElement('glass-2')
    let e13 = document.createElement('glass-1')
    let e14 = document.createElement('glass-2')
    let e15 = document.createElement('glass-3')
    let e16 = document.createElement('glass-1')
    let arr = [e1,e2,e3,e4,e5,e6,e7,e8,e9,e10,e11,e12,e13,e14,e15,e16]
    arr.forEach(ele=>{
        row1.appendChild(ele);
    })                
}

function createRow2Front(no){
    let row2 = document.getElementById('row'+no)

    let e1 = document.createElement('glass-2r')
    e1.setAttribute('col',3)
    e1.setAttribute('pos','r')
    e1.setAttribute('color','#f0c08f')
    let e2 = document.createElement('glass-2r')
    e2.setAttribute('col',2)
    e2.setAttribute('pos','r')
    let e3 = document.createElement('glass-1')
    let e4 = document.createElement('glass-2')
    let e5 = document.createElement('glass-2r')
    e5.setAttribute('col',3)
    e5.setAttribute('pos','c')
    e5.setAttribute('color','#f0c08f')
    let e6 = document.createElement('glass-1')
    let e7 = document.createElement('glass-2r')
    e7.setAttribute('col',2)
    e7.setAttribute('pos','n')
    let e8 = document.createElement('glass-3')
    let e9 = document.createElement('glass-2')
    let e10 = document.createElement('glass-2r')

    let e11 = document.createElement('glass-1')
    let e12 = document.createElement('glass-2')
    let e13 = document.createElement('glass-2')

    let arr = [e1,e2,e3,e4,e5,e6,e7,e8,e9,e10,e11,e12,e13]
    arr.sort(()=>Math.random() - 0.5);
    arr.forEach(ele=>{
        row2.appendChild(ele);
    })   
}

function createLeftPanel(no,id){
    let column = document.getElementById('sideWrap'+id)
    for (let index = 0; index < no; index++) {
        let myDiv = document.createElement('glass-side')
        column.appendChild(myDiv)
    }
}