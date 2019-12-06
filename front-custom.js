 wrapper;
class glass1 extends HTMLElement {
    constructor() {
        super();
    }
   
    connectedCallback() {
        this.wrapper = document.createElement('div');
        this.wrapper.setAttribute('class', 'glass1-wrap');

        let div1 = document.createElement('div');
        div1.setAttribute('class', 'glass2-half-seg')
        let div2 = document.createElement('div');
        div2.setAttribute('class', 'glass2-half-seg')
        let div = document.createElement('div');
        div.setAttribute('class', 'glass2-half-seg')

        this.wrapper.appendChild(div)
        this.wrapper.appendChild(div1)
        this.wrapper.appendChild(div2)

        this.appendChild(this.wrapper);
    }

}

class glass2 extends HTMLElement {
    constructor() {
        super();
    }
    wrapper;
    connectedCallback() {
        this.wrapper = document.createElement('div');
        this.wrapper.setAttribute('class', 'glass2-wrap');

        let div1 = document.createElement('div');
        div1.setAttribute('class', 'glass2-half')
        let div2 = document.createElement('div');
        div2.setAttribute('class', 'glass2-half')

        let seg1 = document.createElement('div')
        seg1.setAttribute('class', 'glass2-half-seg')
        let seg2 = document.createElement('div')
        seg2.setAttribute('class', 'glass2-half-seg')

        div2.appendChild(seg1)
        div2.appendChild(seg2)
        div2.appendChild(document.createElement('div'))
        this.wrapper.appendChild(div1)
        this.wrapper.appendChild(div2)

        this.appendChild(this.wrapper);
    }
}

class glass3 extends HTMLElement {
    constructor() {
        super();
    }
    wrapper;
    connectedCallback() {
        this.wrapper = document.createElement('div');
        this.wrapper.setAttribute('class', 'glass2-wrap');

        let div1 = document.createElement('div');
        div1.setAttribute('class', 'glass3-half')
        let div2 = document.createElement('div');
        div2.setAttribute('class', 'glass3-half')
        let div = document.createElement('div');
        div.setAttribute('class', 'glass3-half')
        div.style = 'background :#a48372;';

        let seg1 = document.createElement('div')
        seg1.setAttribute('class', 'glass2-half-seg')
        let seg2 = document.createElement('div')
        seg2.setAttribute('class', 'glass2-half-seg')

        div2.appendChild(seg1)
        div2.appendChild(seg2)
        div2.appendChild(document.createElement('div'))

        this.wrapper.appendChild(div)
        this.wrapper.appendChild(div1)
        this.wrapper.appendChild(div2)

        this.appendChild(this.wrapper);
    }
}

class glass2r extends HTMLElement {
    constructor() {
        super();
    }
    wrapper;
    connectedCallback() {
        let col = 3;
        let position_grey = 'l';
        let color = '#a37d6a'
        if(this.hasAttribute('col')) {
            col = this.getAttribute('col');
        }
        if(this.hasAttribute('pos')) {
            position_grey = this.getAttribute('pos');
        }
        if(this.hasAttribute('color')) {
            color = this.getAttribute('color');
        }
        this.wrapper = document.createElement('div');



        this.wrapper.setAttribute('class', 'glass2r-wrap');
        if(position_grey != 'n') {
            let dd = document.createElement('div')
            dd.setAttribute('class', 'glass2r-brown-' + position_grey)
            dd.style = `background: ${color}`
            if (col == 2)
                dd.style = `width:48%;background: ${color}`
            this.wrapper.appendChild(dd)
        }

        for (let i = 1; i <= 3; i++) {
            let div = document.createElement('div')
            div.setAttribute('class', 'glass2r-row')
            if (i === 1 || i === 3) {
                for (let j = 1; j <= col; j++) {
                    let div1 = document.createElement('div')
                    div1.setAttribute('class', 'glass2r-box')
                    if (col == 2) {
                        div1.style = 'width: 50%;';
                    }
                    if (j == 1 || j == 3) {
                        let d = document.createElement('div')
                        d.setAttribute('class', 'glass2r-bo');
                        div1.appendChild(d)
                    }

                    div.appendChild(div1)
                }
            }
            if (i == 2)
                div.style = 'height : 25%;background: white;'
            this.wrapper.appendChild(div)
        }

        this.appendChild(this.wrapper);

    }
}
customElements.define('glass-2', glass2);
customElements.define('glass-3', glass3);
customElements.define('glass-1', glass1);
customElements.define('glass-2r', glass2r);
