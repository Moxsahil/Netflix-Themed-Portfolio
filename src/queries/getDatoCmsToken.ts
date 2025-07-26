// getDatoCmsToken.ts

export const getDatoCmsToken = (): string => {
  const hostname = window.location.hostname;

  switch (hostname) {
    case "ror.localhost":
    case "localhost":
      return process.env.REACT_APP_DATOCMS_ROR_TOKEN ?? "";

    case "netflix-themed-portfolio.vercel.app":
      return process.env.REACT_APP_DATOCMS_NETFLIX_PORTFOLIO_TOKEN ?? "";

    default:
      throw new Error(`No DatoCMS token configured for hostname: ${hostname}`);
  }
};
