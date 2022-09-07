import { INodeProperties } from 'n8n-workflow';

import * as order from './order';
import * as candle from './candle';
import * as exchange from './exchange';
import * as leverage from './leverage';
import * as position from './position';

export const properties: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['future'],
			},
		},
		options: [
			{
				name: 'Account',
				value: 'account',
				description: 'Get the account',
				action: 'Get the account',
			},
			{
				name: 'Candle',
				value: 'candle',
				description: 'Get the candles',
				action: 'Get the candles',
			},
			{
				name: 'Exchange',
				value: 'exchange',
				description: 'Get the exchange info',
				action: 'Get the exchange',
			},
			{
				name: 'Leverage',
				value: 'leverage',
				action: 'Update leverage',
				description: 'Update leverage',
			},
			{
				name: 'Order',
				value: 'order',
				action: 'Buy or sell a cryptocurrency',
				description: 'Buy or sell a cryptocurrency',
			},
			{
				name: 'Position',
				value: 'position',
				action: 'Get position info',
				description: 'Get position info',
			},
		],
		default: 'account',
	},

	...order.properties,
	...candle.properties,
	...exchange.properties,
	...leverage.properties,
	...position.properties,
];
