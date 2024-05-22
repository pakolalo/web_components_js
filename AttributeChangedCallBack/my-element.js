class myElement extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' })

    }

    static get observedAttributes() {
        return ['title', 'parrafo', 'img']
    }

    attributeChangedCallback(attr, oldVal, newVal) {
        if(attr === 'title') {
            this.title = newVal;
        }
        if(attr === 'parrafo') {
            this.parrafo = newVal
        }
        if(attr === 'img') {
            this.img = newVal
        }
        return oldVal;
    }
    getTemplate() {
        const template = document.createElement('template');
        template.innerHTML = `
        <section>
            <h2 class="title">${this.title}</h2>
        </section>
        <div>
            <p>${this.parrafo}</p>
            <img src="${this.img}" alt=""/>
        </div>
        ${this.getStyles()}
        `;
        return template;
    }

    getStyles() {
        return `
        <style>
        .title {
            color: red;
        }
        </style>
        `;
    }
    render() {
        this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true));
    }
    connectedCallback() {
        this.render();
    }
}
customElements.define('my-element', myElement);