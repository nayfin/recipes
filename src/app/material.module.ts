import { NgModule } from '@angular/core';
import { MdToolbarModule,
         MdIconModule,
         MdAutocompleteModule,
         MdDatepickerModule,
         MdInputModule,
         MdRadioModule,
         MdSelectModule,
         MdCheckboxModule,
         MdSliderModule,
         MdSlideToggleModule,
         MdMenuModule,
         MdSidenavModule,
         MdListModule,
         MdGridListModule,
         MdCardModule,
         MdTabsModule,
         MdButtonModule,
         MdButtonToggleModule,
         MdChipsModule,
         MdProgressSpinnerModule,
         MdProgressBarModule,
         MdDialogModule,
         MdTooltipModule,
         MdSnackBarModule,
         } from '@angular/material';

@NgModule({
  imports: [    // TODO: Move all MdModules to own barrel module
    MdToolbarModule,
    MdIconModule,
    MdAutocompleteModule,
    MdDatepickerModule,
    MdInputModule,
    MdRadioModule,
    MdSelectModule,
    MdCheckboxModule,
    MdSliderModule,
    MdSlideToggleModule,
    MdMenuModule,
    MdSidenavModule,
    MdListModule,
    MdGridListModule,
    MdCardModule,
    MdTabsModule,
    MdButtonModule,
    MdButtonToggleModule,
    MdChipsModule,
    MdProgressSpinnerModule,
    MdProgressBarModule,
    MdDialogModule,
    MdTooltipModule,
    MdSnackBarModule,
  ],
  exports: [
    MdToolbarModule,
    MdIconModule,
    MdAutocompleteModule,
    MdDatepickerModule,
    MdInputModule,
    MdRadioModule,
    MdSelectModule,
    MdCheckboxModule,
    MdSliderModule,
    MdSlideToggleModule,
    MdMenuModule,
    MdSidenavModule,
    MdListModule,
    MdGridListModule,
    MdCardModule,
    MdTabsModule,
    MdButtonModule,
    MdButtonToggleModule,
    MdChipsModule,
    MdProgressSpinnerModule,
    MdProgressBarModule,
    MdDialogModule,
    MdTooltipModule,
    MdSnackBarModule,
  ]
})
export class MaterialModule { }