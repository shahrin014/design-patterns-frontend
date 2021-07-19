import { html } from '../../../../lib/web-components-js/utilities.js'

class WcJsButton extends HTMLElement {
    constructor() {
        super();
        this.shadow = this.attachShadow({ mode: 'open' });

        const dom = html`
            <div>
                <button data-id="add" type="button">+</button>
                <span data-id="text" ></span>
                <button data-id="minus"type="button">-</button>
            </div>
            
        `;
        this.textElement = dom.querySelector(`span[data-id="text"]`)
        this.buttonAdd = dom.querySelector(`span[data-id="add"]`)
        this.buttonMinus = dom.querySelector(`span[data-id="minus"]`)
        
        this.render()
        this.shadow.appendChild(dom);
    }

    get value() {
        return this.getAttribute('value');
    }
    set value(newValue) {
        this.setAttribute('value', newValue);
    }

    static get observedAttributes() {
        return ['value'];
      }
  
    attributeChangedCallback(name, oldValue, newValue) {
        if (name === 'value') {
            this.render()
        }
    }

    render() {
        this.textElement.innerHTML = `${this.getAttribute('value') || 0} times`
    }
}

export {
    WcJsButton,
}
  