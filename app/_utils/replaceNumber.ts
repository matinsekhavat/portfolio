const e2p = (s: number | string): string => {
  return s
    .toString()
    .replace(/\d/g, (d: string) => "۰۱۲۳۴۵۶۷۸۹"[parseInt(d, 10)]);
};

const p2e = (s: string): string => {
  return s.replace(/[۰-۹]/g, (d: string) => "۰۱۲۳۴۵۶۷۸۹".indexOf(d).toString());
};

const sp = (number: number): string => {
  const seperatedNumber = number
    .toString()
    .match(/(\d+?)(?=(\d{3})+(?!\d)|$)/g);
  if (!seperatedNumber) {
    throw new Error("Invalid number");
  }
  const joinedNumber = seperatedNumber.join(",");
  return e2p(joinedNumber);
};

export { e2p, p2e, sp };
