/**
 * External dependencies
 */
import { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

/**
 * Internal dependencies
 */
import { fetchSettingsGeneral } from 'woocommerce/state/sites/settings/general/actions';
import { areSettingsGeneralLoaded } from 'woocommerce/state/sites/settings/general/selectors';

class QuerySettingsGeneral extends Component {
	fetch( siteId ) {
		this.props.actions.fetchSettingsGeneral( siteId );
	}

	componentWillMount() {
		const { siteId, loaded } = this.props;

		if ( siteId && ! loaded ) {
			this.fetch( siteId );
		}
	}

	componentWillReceiveProps( { siteId, loaded } ) {
		//site ID changed, fetch new zones
		if ( siteId !== this.props.siteId && ! loaded ) {
			this.fetch( siteId );
		}
	}

	render() {
		return null;
	}
}

QuerySettingsGeneral.propTypes = {
	siteId: PropTypes.number,
};

export default connect(
	( state ) => ( {
		loaded: areSettingsGeneralLoaded( state ),
	} ),
	( dispatch ) => ( {
		actions: bindActionCreators(
			{
				fetchSettingsGeneral,
			}, dispatch
		)
	} ) )( QuerySettingsGeneral );
