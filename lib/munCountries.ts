import countries from "i18n-iso-countries";
import enLocale from "i18n-iso-countries/langs/en.json";

countries.registerLocale(enLocale);

export const getCountryData = (input: string) => {
  const sanitized = input.trim();
  
  if (sanitized.length === 2) {
    const name = countries.getName(sanitized.toUpperCase(), "en");
    if (name) return { name, code: sanitized.toLowerCase() };
  }

  const code = countries.getAlpha2Code(sanitized, "en");
  if (code) {
    return { 
      name: countries.getName(code, "en"), 
      code: code.toLowerCase() 
    };
  }
  return null;
};

// NEW: Export all countries for the search-as-you-type list
export const getAllCountries = () => {
  const allNames = countries.getNames("en");
  return Object.entries(allNames).map(([code, name]) => ({
    name,
    code: code.toLowerCase(),
  }));
};