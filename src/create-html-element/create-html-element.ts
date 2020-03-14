/**
 * 
 */

 interface ElementInterface{
     elementType: string;
     elementText?: string;
     elementClass?: string[];
     elementId?: string;
     elementName?: string;
     innerHTML?: string;
     otherAttr?: object;
 }

 const createHTMLElement = (params: ElementInterface)=>{
    //  destructure params
     const {elementType, elementClass, elementId, elementName, elementText, innerHTML, otherAttr} = params;

    //  Element variable
    let newElement: any = null;

    //  create new HTML element
    if(elementType){
        newElement = document.createElement(elementType);
    } else{
        return false;
    }

    // Append ID
    if(elementId) newElement.id = elementId;

    // Append Name
    if(elementName) newElement.setAttribute('name', elementName);

    // Append Text Content
    if(elementText) newElement.textContent = elementText;

    // Append Inner HTML
    if(innerHTML) newElement.innerHTML = innerHTML;

    // Append other attributes
    // Correct and appropriate HTML attribute must be used
    if(otherAttr){
        for(let [key, value] of Object.entries(otherAttr)){
            newElement.setAttribute(key, value)
        }
    }

    // Append Class(es)
    if(elementClass){
        if(typeof elementClass === 'object'){
            elementClass.forEach((_class: any) =>{
                // check if child is also an array
                if(typeof _class === 'object'){
                    _class.forEach((innerClass: string) =>{
                        newElement.classList.add(innerClass);
                    });
                } else {
                    newElement.classList.add(_class);
                }
            })
        } else{
            newElement.className = elementClass;
        }
    }

    return newElement;
 }

 export default createHTMLElement;