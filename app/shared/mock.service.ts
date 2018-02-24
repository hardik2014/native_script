import { Injectable } from '@angular/core';

@Injectable()
export class MockService {
	constructor() { }

	getMockData() {
		return new Promise((resolve, reject) => {
			resolve([{
				color: '#9dcfb8',
				time: '13:00',
				amount: '222',
				name: 'אאאאא',
				message: 'אא אאא אאא אאא א אאא'
			}, {
				color: '#6e4544',
				time: '14:00',
				amount: '223',
				name: 'בבבבב',
				message: 'בבב ב ב בב בבב בב'
			}, {
				color: '#9d883b',
				time: '15:00',
				amount: '225',
				name: 'גגגגגגג',
				message: 'ג גג גגג גג גג גג ג ג גג ג'
			}, {
				color: '#f9bc02',
				time: '16:00',
				amount: '226',
				name: 'דדדדדדדדד',
				message: 'דדדד ד דד דד דדד דדד דד דד'
			}, {
				color: '#c656b6',
				time: '17:00',
				amount: '227',
				name: 'הההההההה',
				message: 'ההההה ההההה ההה ה ההה הה ה ה ה'
			}]);
		});
	}
}
