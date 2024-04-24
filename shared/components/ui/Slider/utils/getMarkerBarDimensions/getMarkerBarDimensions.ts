type TGetMarkerBarDimensionsOptions = {
  markerBarElem: HTMLDivElement;
  visibleMarkersCount: number;
};

export const getMarkerBarDimensions = ({
  markerBarElem,
  visibleMarkersCount,
}: TGetMarkerBarDimensionsOptions) => {
  const markerBarRect = markerBarElem.getBoundingClientRect();
  const markerSlidesElem = Array.from(markerBarElem?.children ?? []);
  const markerSlidesElemWidth = markerSlidesElem.map(
    (markerElem) => markerElem.getBoundingClientRect().width,
  );
  const markerSlideMinWidth = Math.min(...markerSlidesElemWidth);
  const markerSlideMaxWidth = Math.max(...markerSlidesElemWidth);
  const markerSlideGap =
    parseInt(getComputedStyle(markerBarElem).columnGap, 10) ??
    parseInt(getComputedStyle(markerBarElem).padding, 10);
  const markerBarWidth =
    markerSlideMinWidth * visibleMarkersCount +
    markerSlideGap * (visibleMarkersCount - 1);

  return {
    markerBarRect,
    markerBarWidth,
    markerSlideMinWidth,
    markerSlideMaxWidth,
    markerSlideGap,
  };
};
