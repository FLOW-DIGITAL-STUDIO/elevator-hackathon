export interface IPagination {
  max: number;
  handleMoving: (newValue: number) => void;
  currentPage: number;
  isLoading: boolean;
}
