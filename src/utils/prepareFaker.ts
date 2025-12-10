type FakerJAType = (typeof import("@faker-js/faker"))["fakerJA"];

let fakerJA: FakerJAType | undefined = undefined;

const importFakerJA = async () => {
  fakerJA = (await import("@faker-js/faker")).fakerJA;
};

const getPreparedFakerJA = async () => {
  if (fakerJA === undefined) {
    await importFakerJA();
  }

  return fakerJA;
};

const getFakerJA = () => {
  return fakerJA as FakerJAType;
};

export { importFakerJA, getPreparedFakerJA, getFakerJA };
