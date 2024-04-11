type TSetSlideElemProp = {
  slideElem: HTMLElement | null;
  propName: string;
  propsValue: string;
};

export const setSlideElemProp = ({
  slideElem,
  propName,
  propsValue,
}: TSetSlideElemProp) => {
  if (slideElem) {
    slideElem.style.setProperty(propName, propsValue);
  }
};
