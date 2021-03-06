export const config = {
  // The MDC sidenav hasn't been implemented yet.
  skippedPackages: ['mdc-sidenav'],
  skippedExports: {
    'mdc-chips': [
      // These components haven't been implemented for MDC due to a different accessibility pattern.
      'MatChipListChange',
      'MatChipList'
    ],
    'mdc-autocomplete': [
      // Private base classes that are only exported for MDC.
      '_MatAutocompleteBase',
      '_MatAutocompleteTriggerBase',
      '_MatAutocompleteOriginBase'
    ],
    'mdc-core': [
      // Private base classes that are only exported for MDC.
      '_MatOptionBase',
      '_MatOptgroupBase'
    ],
    'mdc-dialog': [
      // Private base classes and utility function that are only exported for MDC.
      '_MatDialogBase',
      '_MatDialogContainerBase',
      '_closeDialogVia',
    ],
    'mdc-input': [
      // TODO: an MDC version of this directive has to be implemented.
      'MatTextareaAutosize'
    ],
    'mdc-menu': [
      // Private base class that is only exported for MDC.
      '_MatMenuBase'
    ],
    'mdc-paginator': [
      // Private base class that is only exported for MDC.
      '_MatPaginatorBase'
    ],
    'mdc-radio': [
      // Private base classes that are only exported for MDC.
      '_MatRadioGroupBase',
      '_MatRadioButtonBase',
    ],
    'mdc-select': [
      // Private base class that is only exported for MDC.
      '_MatSelectBase'
    ],
    'mdc-slide-toggle': [
      // Private module used to provide some common functionality.
      '_MatSlideToggleRequiredValidatorModule'
    ],
    'mdc-snack-bar': [
      // Private interface used to ensure consistency for MDC package.
      '_SnackBarContainer'
    ],
    'mdc-tabs': [
      // Private base classes that are only exported for MDC.
      '_MatTabBodyBase',
      '_MatTabHeaderBase',
      '_MatTabNavBase',
      '_MatTabLinkBase',
      '_MatTabGroupBase'
    ]
  }
};
