import { Version } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-webpart-base';

import { escape } from '@microsoft/sp-lodash-subset';

import * as strings from 'StkTableWpWebPartStrings';

/** Include Angular Elements JS and Style */
import 'stk-table/dist/StkTable/bundle.js';
require('../../../node_modules/stk-table/dist/StkTable/styles.css');

export interface IStkTableWpWebPartProps {
  description: string;
}

export default class StkTableWpWebPart extends BaseClientSideWebPart<IStkTableWpWebPartProps> {

  public render(): void {
    this.domElement.innerHTML = `<app-stk-table-wp-web-part description="${ this.properties.description }"></app-stk-table-wp-web-part>`;
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
