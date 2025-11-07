export interface Country {
  name: string
  flag: string
  prefix: string
  code: string
}

export const COUNTRIES: Country[] = [
  { name: "United States", flag: "🇺🇸", prefix: "+1", code: "US" },
  { name: "Canada", flag: "🇨🇦", prefix: "+1", code: "CA" },
  { name: "United Kingdom", flag: "🇬🇧", prefix: "+44", code: "GB" },
  { name: "Ireland", flag: "🇮🇪", prefix: "+353", code: "IE" },
  { name: "Spain", flag: "🇪🇸", prefix: "+34", code: "ES" },
  { name: "France", flag: "🇫🇷", prefix: "+33", code: "FR" },
  { name: "Germany", flag: "🇩🇪", prefix: "+49", code: "DE" },
  { name: "Italy", flag: "🇮🇹", prefix: "+39", code: "IT" },
  { name: "Portugal", flag: "🇵🇹", prefix: "+351", code: "PT" },
  { name: "Netherlands", flag: "🇳🇱", prefix: "+31", code: "NL" },
  { name: "Belgium", flag: "🇧🇪", prefix: "+32", code: "BE" },
  { name: "Switzerland", flag: "🇨🇭", prefix: "+41", code: "CH" },
  { name: "Austria", flag: "🇦🇹", prefix: "+43", code: "AT" },
  { name: "Poland", flag: "🇵🇱", prefix: "+48", code: "PL" },
  { name: "Czech Republic", flag: "🇨🇿", prefix: "+420", code: "CZ" },
  { name: "Sweden", flag: "🇸🇪", prefix: "+46", code: "SE" },
  { name: "Norway", flag: "🇳🇴", prefix: "+47", code: "NO" },
  { name: "Denmark", flag: "🇩🇰", prefix: "+45", code: "DK" },
  { name: "Finland", flag: "🇫🇮", prefix: "+358", code: "FI" },
  { name: "Greece", flag: "🇬🇷", prefix: "+30", code: "GR" },
  { name: "Russia", flag: "🇷🇺", prefix: "+7", code: "RU" },
  { name: "Ukraine", flag: "🇺🇦", prefix: "+380", code: "UA" },
  { name: "Mexico", flag: "🇲🇽", prefix: "+52", code: "MX" },
  { name: "Brazil", flag: "🇧🇷", prefix: "+55", code: "BR" },
  { name: "Argentina", flag: "🇦🇷", prefix: "+54", code: "AR" },
  { name: "Chile", flag: "🇨🇱", prefix: "+56", code: "CL" },
  { name: "Colombia", flag: "🇨🇴", prefix: "+57", code: "CO" },
  { name: "Peru", flag: "🇵🇪", prefix: "+51", code: "PE" },
  { name: "Venezuela", flag: "🇻🇪", prefix: "+58", code: "VE" },
  { name: "Australia", flag: "🇦🇺", prefix: "+61", code: "AU" },
  { name: "New Zealand", flag: "🇳🇿", prefix: "+64", code: "NZ" },
  { name: "Japan", flag: "🇯🇵", prefix: "+81", code: "JP" },
  { name: "China", flag: "🇨🇳", prefix: "+86", code: "CN" },
  { name: "India", flag: "🇮🇳", prefix: "+91", code: "IN" },
  { name: "Thailand", flag: "🇹🇭", prefix: "+66", code: "TH" },
  { name: "Singapore", flag: "🇸🇬", prefix: "+65", code: "SG" },
  { name: "Malaysia", flag: "🇲🇾", prefix: "+60", code: "MY" },
  { name: "Indonesia", flag: "🇮🇩", prefix: "+62", code: "ID" },
  { name: "Philippines", flag: "🇵🇭", prefix: "+63", code: "PH" },
  { name: "Vietnam", flag: "🇻🇳", prefix: "+84", code: "VN" },
  { name: "South Korea", flag: "🇰🇷", prefix: "+82", code: "KR" },
  { name: "Hong Kong", flag: "🇭🇰", prefix: "+852", code: "HK" },
  { name: "Taiwan", flag: "🇹🇼", prefix: "+886", code: "TW" },
  { name: "Pakistan", flag: "🇵🇰", prefix: "+92", code: "PK" },
  { name: "Bangladesh", flag: "🇧🇩", prefix: "+880", code: "BD" },
  { name: "Middle East - UAE", flag: "🇦🇪", prefix: "+971", code: "AE" },
  { name: "Saudi Arabia", flag: "🇸🇦", prefix: "+966", code: "SA" },
  { name: "Israel", flag: "🇮🇱", prefix: "+972", code: "IL" },
  { name: "South Africa", flag: "🇿🇦", prefix: "+27", code: "ZA" },
  { name: "Egypt", flag: "🇪🇬", prefix: "+20", code: "EG" },
  { name: "Nigeria", flag: "🇳🇬", prefix: "+234", code: "NG" },
]

export const getCountryByPrefix = (prefix: string): Country | undefined => {
  return COUNTRIES.find((c) => c.prefix === prefix)
}

export const searchCountries = (query: string): Country[] => {
  const lowerQuery = query.toLowerCase()
  return COUNTRIES.filter(
    (c) =>
      c.name.toLowerCase().includes(lowerQuery) ||
      c.prefix.includes(lowerQuery) ||
      c.code.toLowerCase().includes(lowerQuery),
  )
}
