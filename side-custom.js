class sideGlass extends HTMLElement {
    constructor() {
        super();
    }

    wrapper;

    connectedCallback() {
        this.wrapper = document.createElement('div');
        this.wrapper.setAttribute('class', 'ls_box');
        
        [1,2].forEach(ele=>{
            let div = document.createElement('div');
            [1,2,3].forEach(ele=>{
                let d = document.createElement('div');
                d.setAttribute('class','ls_box_sm');
                div.appendChild(d) 
            })
            let div1 = document.createElement('div');
            [1,2].forEach(ele=>{
                let d = document.createElement('div');
                d.setAttribute('class','ls_box_sm');
                d.style = 'height: 49%;'
                div1.appendChild(d) 
            })
            this.wrapper.appendChild(div)
            this.wrapper.appendChild(div1)
        })
        


        this.appendChild(this.wrapper);

    }
}

customElements.define('glass-side', sideGlass);
