export type Pacient = {
  firsName: string;
  surName: string;
  age: number;
  details: {
    height: number;
    weight: number;
    hair: {
      length: string,
      type: string,
      color: string
    };
    eyes: {
      width: number;
      type: string;
      color: string;
    };
  };
  clothes: {
    head: string;
    top: string;
    bottom: string;
    boots: string;
  };
};
