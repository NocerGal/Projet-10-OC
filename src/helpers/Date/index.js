// Corrections : modification de l'objet month en partant de 0 à 11 et non pas de 1 à 12.

export const MONTHS = {
  0: 'janvier',
  1: 'février',
  2: 'mars',
  3: 'avril',
  4: 'mai',
  5: 'juin',
  6: 'juillet',
  7: 'août',
  8: 'septembre',
  9: 'octobre',
  10: 'novembre',
  11: 'décembre',
};

export const getMonth = (date) => MONTHS[date.getMonth()];
