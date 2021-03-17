import React from 'react';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {selectTier} from './../actions/index';

class TierList extends React.Component {
    showTier() {
        
        return this.props.tier.map((t) => {
            return (
                <li onClick={()=>this.props.selected(t)} key={t.id}>{t.name}</li>
            )
        })
    };

    render() {
        return (<ol>
            {this.showTier()}
        </ol>)
    }
}

function mapStateToProps(state) {
    return {
    tier: state.tier}
}

function matchDispatchToProps(dispatch){
    return bindActionCreators({selected: selectTier},dispatch)

}

export default connect(mapStateToProps,matchDispatchToProps)(TierList)