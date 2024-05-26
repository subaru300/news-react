export interface IPaginationProps {
  totalPages: number;
  currentPage: number;
  onNextPageHandler: () => void;
  onPrevPageHandler: () => void;
  onClickPageHandler: (page: number) => void;
}
