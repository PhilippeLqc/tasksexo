/**
 * utilisez la décomposition pour extraire la premiere et la 2e case du tableau
 * retournez les dans un nouveau tableau
 *
 * exemple: [1, 2, 3] => [1, 2]
 *
 * astuce: vous pouvez utiliser la décomposition directement dans les arguments de la fonction
 *
 * contrainte:
 *  - interdiction d'utiliser [0] et [1]
 *  - interdiction d'utiliser slice ou splice
 */

const extractFirstTwo = (array) => {
  const [first, second] = array;
  return [first, second];
};

/**
 * utilisez la décomposition pour extraire la premiere case du tableau et le reste du tableau
 * retournez uniquement le reste du tableau
 *
 * exemple: [1, 2, 3] => [2, 3]
 */

const extractRest = (array) => {
  const [first, ...rest] = array;
  return rest;
};

/**
 * utilisez la décomposition pour extraire le champ "name" de l'objet passé en paramètre
 * retournez le champ "name"
 *
 * exemple: {name: "toto", age: 42} => "toto"
 *
 * astuce: vous pouvez utiliser la décomposition directement dans les arguments de la fonction
 *
 * contrainte:
 * - interdiction d'utiliser l'opérateur "." pour accéder au champ "name"
 */

const extractName = () => {
  const user = { name: "toto", age: 42 };
  const { name } = user;
  return name;
};

/**
 * utilisez la décomposition pour retourner l'objet utilisateur sans le champ "password"
 *
 * exemple: {name: "toto", password: "1234"}
 *
 * contrainte:
 *    - interdiction d'utiliser "delete"
 *    - interdiction d'utiliser l'opérateur "." pour accéder au champ "password"
 *
 */

const removePassword = () => {
  const user = { name: "toto", password: "1234" };
  const { password, ...rest } = user;
  return rest;
};

module.exports = { extractFirstTwo, extractRest, extractName, removePassword };
