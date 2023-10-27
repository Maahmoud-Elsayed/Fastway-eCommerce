import React from "react";

import { useSelector, useDispatch } from "react-redux";
import { selectionActions } from "../../store/selection-slice";
import { uiActions } from "../../store/ui-slice";
import Selections from "./Selections";

const countries = [
  { code: "us", more: "English" },
  { code: "gb", more: "English" },
  { code: "sa", more: "العربية" },
  { code: "fr", more: "français" },
  { code: "de", more: "Deutsch" },
  { code: "nl", more: "Nederlands" },
  { code: "ie", more: "Gaeilge" },
  { code: "jp", more: "日本語" },
  { code: "cn", more: "中文" },
  { code: "kr", more: "한국어" },
  { code: "in", more: "हिन्दी" },
  { code: "br", more: "Português" },
  { code: "pt", more: "Português" },
  { code: "es", more: "Español" },
  { code: "mx", more: "Español" },
  { code: "ar", more: "Español" },
  { code: "it", more: "Italiano" },
  { code: "gr", more: "Ελληνικά" },
  { code: "tr", more: "Türkçe" },
  { code: "pl", more: "Polski" },
  { code: "cz", more: "Čeština" },
  { code: "sk", more: "Slovenčina" },
  { code: "hu", more: "Magyar" },
  { code: "ru", more: "Русский" },
  { code: "ua", more: "Українська" },
  { code: "kz", more: "Қазақ" },
  { code: "za", more: "Afrikaans" },
  { code: "ke", more: "Kiswahili" },
  { code: "th", more: "ไทย" },
  { code: "vn", more: "Tiếng Việt" },
  { code: "ph", more: "Tagalog" },
  { code: "ch", more: "Deutsch" },
  { code: "at", more: "Deutsch" },
  { code: "be", more: "Nederlands" },
  { code: "ro", more: "Română" },
  { code: "bg", more: "български" },
  { code: "dk", more: "Dansk" },
  { code: "no", more: "Norsk" },
  { code: "se", more: "Svenska" },
  { code: "fi", more: "Suomi" },
  { code: "is", more: "Íslenska" },
  { code: "jm", more: "English" },
  { code: "pa", more: "Spanish" },
];
const SuggestedLang = [
  { code: "sa", more: "العربية" },
  { code: "us", more: "English (US)" },
  { code: "ru", more: "Русский" },
  { code: "fr", more: "français" },
  { code: "de", more: "Deutsch" },
];

const CountryList = () => {
  const selectedCountry = useSelector((state) => state.selection.language);
  const show = useSelector((state) => state.ui.languagesIsVisible);
  const dispatch = useDispatch();

  const toggShowLanHandler = () => {
    dispatch(uiActions.langShowToggle());
  };
  const languagueSelectHandler = (countryCode) => {
    dispatch(uiActions.langShowToggle());
    dispatch(selectionActions.countryLangPicker(countryCode));
  };
  return (
    <Selections
      onShow={show}
      onShowHandler={toggShowLanHandler}
      flag={true}
      suggested={SuggestedLang}
      all={countries}
      onSelect={languagueSelectHandler}
      selected={selectedCountry}
    />
  );
};

export default CountryList;
