import { LinkRestProps } from "next/link";

export type PostCardUtilityProps = {
  children?: React.ReactNode;
  className?: string;
};
export type ContainerProps = {
  children?: React.ReactNode;
  className?: string;
};
export type HashTagProps = {
  children?: React.ReactNode;
  className?: string;
};
export interface PostCardProps {
  id?: string;
  title: string;
  author: string;
  created_at: string;
  image: string;
  content: string;
}
export type DeviderProps = {
  title?: string;
  className?: string;
};
export interface IconImageProps {
  src: string;
  alt: string;
  href?: any;
  width?: number;
  height?: number;
}
export type SlideProps = {
  title: string;
  image: string;
  bgColor: string;
  textColor: string;
  type: string;
};
export type NavLinkProps = {
  src: string;
  alt: string;
  title: string;
  href?: any;
};
export type navListProps = {
  title: string;
  href: any;
  src: string;
  alt: string;
};
export type NavListProps = {
  drawerOpen: boolean;
  isMobileMode: boolean;
};
export type SearchModalProps = {
  handleSearchModal: () => void;
};
export type InputBlackBorderProps = {
  className?: string;
  type?: string;
  name: string;
  required?: boolean;
};

export type TextAreaBlackBorderProps = {
  row?: number;
  name: string;
  className?: string;
  type?: string;
};
