/**
 * Core angular modules
 */
import { TestBed, async } from '@angular/core/testing';
import { NgModule  } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

/**
 * Third party library modules - bootstrap, primeng etc
 */
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

/**
 * Travelclick library tc-angular-components modules
 */
import { DropdownModule } from 'tc-angular-components';

/**
 * Application level components
 */
import { SearchProductListComponent } from './search-product-list.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        SearchProductListComponent
      ],
      imports: [
          FormsModule,
          NgbModule.forRoot(),
          HttpClientModule,
          DropdownModule
      ]
    }).compileComponents();
  }));

  /**
   * Test case to check wether app is rendering
   */
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(SearchProductListComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
