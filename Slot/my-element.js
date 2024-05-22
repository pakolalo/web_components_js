class myElement extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' })
    }
    getTemplate() {
        const template = document.createElement('template');
        template.innerHTML = `
        <section>
            <h2 class="title"><slot name="title"></slot></h2>
        </section>
        <div>
            <p><slot name="parrafo"></slot></p>
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