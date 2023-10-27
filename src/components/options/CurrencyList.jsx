import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectionActions } from "../../store/selection-slice";
import { uiActions } from "../../store/ui-slice";
import Selections from "./Selections";

const currencies = [
  { code: "USD", more: "United States" },
  { code: "GBP", more: "British Pound" },
  { code: "SAR", more: "Saudi Riyal" },
  { code: "EUR", more: "Euro" },
  { code: "JPY", more: "Japanese Yen" },
  { code: "CNY", more: "Chinese Yuan" },
  { code: "KRW", more: "South Korean Won" },
  { code: "INR", more: "Indian Rupee" },
  { code: "BRL", more: "Brazilian Real" },
  { code: "MXN", more: "Mexican Peso" },
  { code: "ARS", more: "Argentine Peso" },
  { code: "TRY", more: "Turkish Lira" },
  { code: "PLN", more: "Polish Zloty" },
  { code: "CZK", more: "Czech Koruna" },
  { code: "SKK", more: "Slovak Koruna" },
  { code: "HUF", more: "Hungarian Forint" },
  { code: "RUB", more: "Russian Ruble" },
  { code: "UAH", more: "Ukrainian Hryvnia" },
  { code: "KZT", more: "Kazakhstani Tenge" },
  { code: "ZAR", more: "South African Rand" },
  { code: "KES", more: "Kenyan Shilling" },
  { code: "THB", more: "Thai Baht" },
  { code: "VND", more: "Vietnamese Dong" },
  { code: "PHP", more: "Philippine Peso" },
  { code: "BEF", more: "Belgian Franc" },
  { code: "RON", more: "Romanian Leu" },
  { code: "BGN", more: "Bulgarian Lev" },
  { code: "DKK", more: "Danish Krone" },
  { code: "NOK", more: "Norwegian Krone" },
  { code: "SEK", more: "Swedish Krona" },
  { code: "ISK", more: "Icelandic Krona" },
  { code: "JMD", more: "Jamaican Dollar" },
  { code: "PAB", more: "Panamanian Balboa" },
];

const suggestedCurrency = [
  { code: "EGP", more: "Egyptian Pound" },
  { code: "GBP", more: "British Pound" },
  { code: "SAR", more: "Saudi Riyal" },
  { code: "EUR", more: "Euro" },
  { code: "JPY", more: "Japanese Yen" },
];

const CurrencyList = () => {
  const selectedCurrency = useSelector((state) => state.selection.currency);
  const show = useSelector((state) => state.ui.currenciesIsVisible);
  const dispatch = useDispatch();

  const toggShowLanHandler = () => {
    dispatch(uiActions.currShowToggle());
  };
  const currencySelectHandler = (countryCode) => {
    dispatch(selectionActions.countryCurrPicker(countryCode));
    dispatch(uiActions.currShowToggle());
  };
  return (
    <Selections
      onShow={show}
      onShowHandler={toggShowLanHandler}
      flag={false}
      suggested={suggestedCurrency}
      all={currencies}
      onSelect={currencySelectHandler}
      selected={selectedCurrency}
    />
  );
};

export default CurrencyList;
