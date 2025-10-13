export const CURRENCIES = [
  { code: "USD", label: "United States Dollar", flag: "🇺🇸" },
  { code: "EUR", label: "Euro", flag: "🇪🇺" },
  { code: "GBP", label: "British Pound", flag: "🇬🇧" },
  { code: "BRL", label: "Brazilian Real", flag: "🇧🇷" },
  { code: "JPY", label: "Japanese Yen", flag: "🇯🇵" },
];

export enum PAYMENT_TERMS {
  NONE = "none",
  NET_7 = "net-7",
  NET_15 = "net-15",
  NET_30 = "net-30",
  NET_60 = "net-60",
  DUE_ON_RECEIPT = "due-on-receipt",
  CUSTOM = "custom",
}
export const PAYMENT_TERMS_DAYS: Record<PAYMENT_TERMS, number | null> = {
  [PAYMENT_TERMS.NONE]: null,
  [PAYMENT_TERMS.NET_7]: 7,
  [PAYMENT_TERMS.NET_15]: 15,
  [PAYMENT_TERMS.NET_30]: 30,
  [PAYMENT_TERMS.NET_60]: 60,
  [PAYMENT_TERMS.DUE_ON_RECEIPT]: 0,
  [PAYMENT_TERMS.CUSTOM]: null,
};

// gera options automaticamente a partir do enum
export const PAYMENT_TERMS_OPTIONS = [
  { value: "none", label: "None" },
  { value: "net-7", label: "Net 7" },
  { value: "net-15", label: "Net 15" },
  { value: "net-30", label: "Net 30" },
  { value: "net-60", label: "Net 60" },
  { value: "due-on-receipt", label: "Due On Receipt" },
  { value: "custom", label: "Custom" },
];