const viewMethods = ['get_average_price'] as const;
const changeMethods = ['set_last_price'] as const;

export const contractMethods = { viewMethods, changeMethods };

type ChangeMethods = {
  [Property in typeof changeMethods[number]]: (
    args?: { [x: string]: number | string },
    gas?: string,
    yoctoNEAR?: string,
  ) => void;
};

type ViewMethods = {
  [Property in typeof viewMethods[number]]: () => any;
};

export type Methods = ChangeMethods & ViewMethods;
