import { ReactNode } from 'react';
import { Player } from './type';

/* eslint-disable no-unused-vars */
namespace props {
  interface ContainerProps {
    children: ReactNode;
  }
  interface FlexProps extends ContainerProps {
    className?: string;
    flex?: 'flex' | 'inline-flex';
    flexDirection?: 'flex-row' | 'flex-row-reverse' | 'flex-col' | 'flex-col-reverse';
    flexWrap?: 'flex-wrap' | 'flex-wrap-reverse' | 'flex-no-wrap';
    justifyContent?:
      | 'justify-start'
      | 'justify-end'
      | 'justify-center'
      | 'justify-between'
      | 'justify-around'
      | 'justify-evenly';
    alignItems?: 'items-start' | 'items-end' | 'items-center' | 'items-baseline' | 'items-stretch';
    alignContent?:
      | 'content-start'
      | 'content-end'
      | 'content-center'
      | 'content-between'
      | 'content-around'
      | 'content-evenly'
      | 'content-stretch';
  }
  interface TableContentProps {
    player: Player;
  }
  interface PlayersTableProps {
    players: Player[];
  }
  interface PaginationProps {
    goToPage: (page: number) => void;
    prevPage: () => void;
    nextPage: () => void;
    maxPage: number;
  }
}

export default props;
