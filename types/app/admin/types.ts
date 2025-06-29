type SideLayoutProps = {
  title: string;
  path: string;
};
export type SideTabProps = {
  title: string;
  href?: string;
  subs?: SideLayoutProps[];
};
export type SliderContextType = {
  sliderList: [];
  setSliderList: (value: boolean) => any[];
  openDrawer: false;
  setOpenDrawer: (value: boolean) => void;
};
export interface TProps {
  children: React.ReactNode;
  row?: boolean;
  center?: boolean;
}
