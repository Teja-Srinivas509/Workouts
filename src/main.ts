// import { bootstrapApplication } from '@angular/platform-browser';
// import { AppComponent } from './app/app.component';
// import { appConfig } from './app/app.config';
// import { HttpClientModule } from '@angular/common/http';

// bootstrapApplication(AppComponent, appConfig)
//   .catch(err => console.error(err));
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';
import { provideHttpClient, withFetch } from '@angular/common/http';

bootstrapApplication(AppComponent, {
  ...appConfig,
  providers: [
    ...appConfig.providers,
    provideHttpClient(withFetch())
  ]
})
  .catch(err => console.error(err));
