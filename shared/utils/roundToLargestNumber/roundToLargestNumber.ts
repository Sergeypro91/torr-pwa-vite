type TRoundToLargestNumberOptions = {
  numberArr: number[];
  number: number;
};

export const roundToLargestNumber = ({
  numberArr,
  number,
}: TRoundToLargestNumberOptions) => {
  // Filter the array to leave only those numbers that are greater than a given number
  const largerNumbers = numberArr.filter((item) => item > number);

  // If there are no numbers greater than a given number, return it
  if (largerNumbers.length === 0) {
    return number;
  }

  // Finding the smallest of large numbers
  return Math.min(...largerNumbers);
};
