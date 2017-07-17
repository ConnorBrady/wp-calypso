/**
 * External dependencies
 */
import { expect } from 'chai';
import deepFreeze from 'deep-freeze';

/**
 * Internal dependencies
 */
import { getUploadedPluginId } from 'state/selectors';

const siteId = 77203074;

describe( 'getUploadedPluginId', () => {
	it( 'should return null by default', () => {
		const state = deepFreeze( {
			plugins: {
				upload: {
					uploadedPluginId: {}
				}
			}
		} );
		expect( getUploadedPluginId( state, siteId ) ).to.be.null;
	} );

	it( 'should return current value for site', () => {
		const state = deepFreeze( {
			plugins: {
				upload: {
					uploadedPluginId: {
						[ siteId ]: 'hello-dolly',
					}
				}
			}
		} );
		expect( getUploadedPluginId( state, siteId ) ).to.be.equal( 'hello-dolly' );
	} );
} );
