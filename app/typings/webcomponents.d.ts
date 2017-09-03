interface Document {
    registerElement(tagName: string, obj: any): void;
  }
  
  interface HTMLElement {
    createdCallback(): void;
    attributeChangedCallback(attributeName: string, oldValue: any, newValue: any): void;
  }