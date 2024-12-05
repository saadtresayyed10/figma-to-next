export interface PropertyCardProps {
  address: string;
  price: string;
  beds: number;
  baths: number;
  sqft: string;
  agentName: string;
  agentImage: string;
  propertyImage: string;
}

export interface LocationCardProps {
  city: string;
  listings: number;
  image: string;
}

export interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
}

export interface NavItemProps {
  label: string;
  isActive?: boolean;
}
