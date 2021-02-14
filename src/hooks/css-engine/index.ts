import { CSSEngineClass } from "./interfaces";

const styleElement = document.createElement("style");
let classes: Array<CSSEngineClass> = [];

function generateClassRule(engineClass: CSSEngineClass) {
  let chain = `${engineClass.name}{`;
  engineClass.props.forEach((prop) => {
    chain = chain + `${prop.name} : ${prop.data};`;
  });
  chain = chain + "}";

  return chain;
}

function updateClass(engineClass: CSSEngineClass, renew = true) {
  if (styleElement.sheet) {
    if (!renew) {
      styleElement.sheet.deleteRule(engineClass.index);
    }
    styleElement.sheet.insertRule(
      generateClassRule(engineClass),
      engineClass.index
    );
  }
}
function deleteClass(className: string) {
  // Remove it from the style sheet
  const engineClass = classes.find((x) => x.name == className);
  if (styleElement.sheet && engineClass) {
    styleElement.sheet.deleteRule(engineClass.index);
    // Remove it from the array
    classes = classes.filter((x) => x.index == engineClass.index);
  }
}

function inject(className: string, propertyName: string, propertyData: string) {
  const cssClass = classes.find((x) => x.name == className);
  if (!cssClass) {
    // Create a new class
    classes.push({
      index: classes.length,
      name: className,
      props: [{ name: propertyName, data: propertyData }],
    });
    const newClass = classes[classes.length - 1];
    updateClass(newClass);
  } else {
    cssClass.props.push({ name: propertyName, data: propertyData });
    updateClass(cssClass, false);
  }
}
function injectObject(
  className: string,
  propObject: {
    [key: string]: string;
  },
  clearOld = true,
  injectOnce = false
) {
  const cssClass = classes.find((x) => x.name == className);
  if (!cssClass) {
    // Create a new class
    classes.push({
      index: classes.length,
      name: className,
      props: [],
    });

    const newClass = classes[classes.length - 1];
    Object.entries(propObject).forEach((prop) => {
      const [key, value] = prop;
      newClass.props.push({ name: key, data: value });
    });
    updateClass(newClass);
  } else if (!injectOnce) {
    // Clear old props
    if (clearOld) cssClass.props = [];
    Object.entries(propObject).forEach((prop) => {
      const [key, value] = prop;
      cssClass.props.push({ name: key, data: value });
    });
    updateClass(cssClass, false);
  }
}

function init() {
  styleElement.id = "cssEngineSheet";
  // Check for older style elements
  const oldElement = document.getElementById("cssEngineSheet");
  // Remove old style
  if (oldElement) {
    document.head.removeChild(oldElement);
  }
  // Add the new element
  document.head.appendChild(styleElement);
  classes = [];
  if (styleElement.sheet) {
    console.log(styleElement.sheet);
  }
}

const cssEngine = {
  init,
  inject,
  injectObject,
  deleteClass,
  updateClass,
};

export default cssEngine;
