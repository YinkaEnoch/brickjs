interface SVGElement{
    viewBox: string;
    path: string;
    width?: string;
}

const createSVGElement = (params: SVGElement)=>{
    // destructure params
    const {viewBox, path, width} = params;

    // create new SVG Element
    let newSVGElement = document.createElementNS("http://www.w3.org/2000/svg", "svg");

    // Add viewBox
    if(viewBox){
        newSVGElement.setAttribute('viewBox', viewBox);
    } else{
        return false;
    }

    // Add path
    if(path){
        let SVGPath = document.createElementNS("http://www.w3.org/2000/svg", "path");
        SVGPath.setAttribute("d", path);
        newSVGElement.appendChild(SVGPath);
    } else{
        return false;
    }

    // Set SVG Width
    (width)? newSVGElement.setAttribute('width', width) : newSVGElement.setAttribute('width', '1em');
    
    return newSVGElement;
}

export default createSVGElement;