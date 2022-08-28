import { Job } from "utils/types";

export const getItem = (item: string) =>  {
  const elementsStringify = window.localStorage.getItem(item);
  if (elementsStringify) {
    const elementsJSON: Job[] = JSON.parse(elementsStringify ?? []);
    return elementsJSON;
  }
  return [];
}

export const setItem = (item: string, values: Job[]) => {
  localStorage.setItem(item, JSON.stringify(values));
}

export const removeItem = (item: string) => {
  localStorage.removeItem(item);
}

export const getElementById = (item: string, id: string) => {
  const elementsJSON: Job[] = getItem(item);
  return elementsJSON.find(element => element.id === id);
}

export const addElement = (item: string, value: Job) => {
  const elementsJSON: Job[] = getItem(item);
  elementsJSON.push(value);
  setItem(item, elementsJSON);
}

export const updateElementById = (item: string, id: string, newElem: string) => {
  const elementsJSON: Job[] = getItem(item);
  if (elementsJSON) { // Otra opción acá era usar splice
    const newElements = elementsJSON.map((elem: Job) => {
      if (elem.id === id) {
        newElem;
      }
      return elem;
    });
    setItem(item, newElements);
  }
}

export const removeElementById = (item: string, id: string) => {
  const elementsJSON: Job[] = getItem(item);
  const newElements = elementsJSON.filter(elem => elem.id !== id);
  setItem(item, newElements);
}
