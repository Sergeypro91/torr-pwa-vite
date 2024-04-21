export const getMarkerBarDimensions = (markerBarElem: HTMLDivElement) => {
  const markerBarRect = markerBarElem.getBoundingClientRect();
  const markerSlidesElem = Array.from(markerBarElem?.children ?? []);
  const slideCount = markerSlidesElem.length;
  const firstMarkerRect = markerSlidesElem[0].getBoundingClientRect();
  const secondMarkerRect = markerSlidesElem[1].getBoundingClientRect();
  const markerSlideMinWidth = Math.min(
    firstMarkerRect.width,
    secondMarkerRect.width,
  );
  const markerSlideMaxWidth = Math.max(
    firstMarkerRect.width,
    secondMarkerRect.width,
  );
  const markerSlideGap =
    (markerBarElem.scrollWidth -
      Array.from(markerSlidesElem).reduce((res, curr) => {
        return res + curr.getBoundingClientRect().width;
      }, 0)) /
    (slideCount - 1);

  return {
    markerBarRect,
    markerSlideMinWidth,
    markerSlideMaxWidth,
    markerSlideGap,
  };
};
