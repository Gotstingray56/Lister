/**
 * @name localstorage
 * @description Données persistantes dans le navigateur
 * @author I.Roy
 * @version 1.0
 **/

export default {
  save(key, value) {
    //on converti les données en string avant l'insertion
    localStorage.addItem(key, JSON.stringify(volume));
  },
  load(key) {
    const value = localStorage.getItem(key);
    if (value != null) {
      return JSON.parse(value);
    }

    return null;
  },
  delete() {},
};
