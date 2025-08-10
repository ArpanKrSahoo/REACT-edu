const constRender = (ReactElement, container) => {
    const domElement = document.createElement(ReactElement.type);
    domElement.innerHTML = ReactElement.children;
    for (const prop in ReactElement.props) {
        if (prop === 'children') continue;
        domElement.setAttribute(prop, ReactElement.props[prop]);
    }
    container.appendChild(domElement);
}


const ReactElement = {
    type: 'a',
    props: {
        href: 'https://www.google.com',
        target: '_blank'
    },
    children: 'Google'
}


const newContainer = document.querySelector('#root');
constRender(ReactElement, newContainer);