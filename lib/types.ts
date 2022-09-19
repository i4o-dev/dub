export interface LinkProps {
  key: string;
  url: string;
  title: string;
  timestamp: number;
}

export interface ProjectProps {
  name: string;
  slug: string;
  domain: string;
  domainVerified: boolean;
  plan: string;
  usageLimit: number;
  links: LinkProps[];
}

export type DomainVerificationStatusProps =
  | "Valid Configuration"
  | "Invalid Configuration"
  | "Pending Verification"
  | "Domain Not Found";