export type TActionButton = {
  children?: React.ReactElement[] | React.ReactElement;
  icon?: React.ReactElement;
  id?: string;
  text?: string;
  isFetch?: boolean;
  handleUpdate: () => void;
};
