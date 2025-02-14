import * as React from 'react';
import { GridFilterItem } from './gridFilterItem';
import { GridCellParams } from './params/gridCellParams';
import type { GridColDef } from './colDef/gridColDef';
import type { GridValidRowModel } from './gridRows';

/**
 * Filter operator definition interface.
 */
export interface GridFilterOperator<R extends GridValidRowModel = any, V = any, F = V> {
  /**
   * The label of the filter operator.
   */
  label?: string;
  /**
   * The name of the filter operator.
   * It will be matched with the `operator` property of the filter items.
   */
  value: string;
  /**
   * The callback that generates a filtering function for a given filter item and column.
   * This function can return `null` to skip filtering for this item and column.
   * @param {GridFilterItem} filterItem The filter item with which we want to filter the column.
   * @param {GridColDef} column The column from which we want to filter the rows.
   * @returns {null | ((params: GridCellParams) => boolean)} The function to call to check if a row pass this filter item or not.
   */
  getApplyFilterFn: (
    filterItem: GridFilterItem,
    column: GridColDef<R, V, F>,
  ) => null | ((params: GridCellParams<R, V, F>) => boolean);
  /**
   * The input component to render in the filter panel for this filter operator.
   */
  InputComponent?: React.JSXElementConstructor<any>;
  /**
   * The props to pass to the input component in the filter panel for this filter operator.
   */
  InputComponentProps?: Record<string, any>;
  /**
   * If `false`, filter operator doesn't require user-entered value to work.
   * Usually should be set to `false` for filter operators that don't have `InputComponent` (for example `isEmpty`)
   * @default true
   */
  requiresFilterValue?: boolean;
}
