type TSetSlideElemProp = {
  element: Element | HTMLElement | null;
  propName: string;
  propValue: string;
};

export const setElemProp = ({
  element,
  propName,
  propValue,
}: TSetSlideElemProp) => {
  if (element) {
    (element as HTMLElement).style.setProperty(propName, propValue);
  }
};
