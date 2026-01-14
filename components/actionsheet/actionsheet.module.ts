import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ActionSheetComponent } from './actionsheet.component';

@NgModule({
    imports: [CommonModule],
    declarations: [ActionSheetComponent],
    exports: [ActionSheetComponent]
})
export class ActionSheetModule {}
