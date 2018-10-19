import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { PerfumeModule } from 'perfume.js/angular';

const PerfumeConfig = {
  firstContentfulPaint: true,
  firstInputDelay: true,
};

@NgModule({
  imports: [
    PerfumeModule.forRoot(PerfumeConfig)
  ]
})
export class CorePerfumeModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CorePerfumeModule
    };
  }

  constructor(
    @Optional()
    @SkipSelf()
    parentModule: CorePerfumeModule
  ) {
    if (parentModule) {
      throw new Error('CorePerfumeModule is already loaded.');
    }
  }
}
