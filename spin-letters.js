/** Class containing all LetterScroller logic. */
class LetterScroller extends HTMLElement {
    constructor() {
        super();
        this.string = {};
        this.width = 500;
        this.height = 300;
        this.padding = 10;
        this.x = {};
        this.y = {};
    }

    addStyles() {
    // This is where ill add the styles to the text and what not, i think having custom styles using params would be cool but dont know how to do that.
    }

    drawCanvas() {
        this.svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        this.svg.setAttribute('width', this.width);
        this.svg.setAttribute('height', this.height);
        this.svg.setAttribute('viewBox', `0 0 ${this.width} ${this.height}`);
        this.shadow.append(this.svg);
    // This is where i need to set up the actual container, uni-grade uses svg but i dont really think that is applicable here.
    }

    splitLetters() {
        let v = this.value == null ? 'example' : this.value;
        const vSplit = v.split("");
        for (let i = 0; i < vSplit.length; i++) {
            this.scrollLetter(vSplit[i]);
        }
    }

    async scrollLetter(letter) {
        console.log(letter);
    }

    connectedCallback () {
        ['text'].forEach(
            a => (this[a] = this.getAttribute(a) || false)
        );

        console.log(this.text);

        this.shadow = this.attachShadow({ mode: 'closed'});
        this.drawCanvas();
        this.splitLetters();
    }

    get value() {
        return this.getAttribute('text');
    }

    set value(newText) {
        this.setAttribute('text', newText);
        this.scrollLetters();
    }
}

customElements.define('letter-scroller', LetterScroller);