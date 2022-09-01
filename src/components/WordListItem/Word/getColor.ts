export const getColor = (group: number) => {
  switch (group) {
    case 0: return 'A1';
    case 1: return 'A2';
    case 2: return 'B1';
    case 3: return 'B2';
    case 4: return 'C1';
    default: return 'C2';
  }
};
