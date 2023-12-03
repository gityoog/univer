// This file provide operations to change selection of sheets.

import type { IOperation } from '@univerjs/core';
import { CommandType } from '@univerjs/core';
import type { TextRange } from '@univerjs/engine-render';

import { TextSelectionManagerService } from '../../services/text-selection-manager.service';

export interface ISetTextSelectionsOperationParams {
    unitId: string;
    pluginName: string;
    ranges: TextRange[];
}

export const SetTextSelectionsOperation: IOperation<ISetTextSelectionsOperationParams> = {
    id: 'doc.operation.set-selections',

    type: CommandType.OPERATION,

    handler: (accessor, params) => {
        const textSelectionManagerService = accessor.get(TextSelectionManagerService);

        textSelectionManagerService.replaceTextRangesWithNoRefresh(params!.ranges);

        return true;
    },
};