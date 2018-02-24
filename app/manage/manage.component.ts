import { Component } from '@angular/core';
import { MockService } from '../shared/mock.service';
import { Page, actionBarHiddenProperty } from "ui/page";
import { Button } from "ui/button";
import { TextField } from "ui/text-field";
import { FlexboxLayout } from "tns-core-modules/ui/layouts/flexbox-layout";
import { AbsoluteLayout } from "tns-core-modules/ui/layouts/absolute-layout";
import { StackLayout } from "tns-core-modules/ui/layouts/stack-layout";
import { Image } from "tns-core-modules/ui/image";
import { ScrollView } from "ui/scroll-view";

@Component({
	selector: 'ns-manage',
	moduleId: module.id,
	templateUrl: './manage.component.html',
	styleUrls: ['./manage.components.css']
})
export class ManageComponent {
	resMocData: any[] = [];
	constructor(private mockService: MockService) {
		this.mockService.getMockData()
			.then((mockData: any) => {
				if (mockData && mockData.length > 0)
					this.resMocData = mockData;
			});
	}

	partClicked(strPart) {
		console.log(strPart + ' part clicked');
	}
}
