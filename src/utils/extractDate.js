export const verifyString = (
  dataFormatoDDMMYYYY,
  string,
) => {
  var partesData = dataFormatoDDMMYYYY.split('-');

  var dataNaString = new Date(string);
  var diaNaString = dataNaString.getUTCDate();
  var mesNaString =
    dataNaString.getUTCMonth() + 1;
  var anoNaString = dataNaString.getUTCFullYear();

  if (
    parseInt(partesData[0]) === diaNaString &&
    parseInt(partesData[1]) === mesNaString &&
    parseInt(partesData[2]) === anoNaString
  ) {
    return true;
  } else {
    return false;
  }
};

export const verifyArray = (
  dateDDMMYYYY,
  array,
) => {
  for (let i = 0; i < array.length; i++) {
    let object = array[i];
    let date = object['date.start'];

    if (verifyString(dateDDMMYYYY, date)) {
      return true;
    }
  }

  return false;
};
