import { DataProps } from "./types";

export default function amountsOfMovies(array:DataProps[], id: number) {
    const quantities = array.reduce((counter: number, item: DataProps) => {
      if (item.id === id) {
        return counter + 1;
      }
      return counter;
    }, 0);
  
    return quantities;
  }
  