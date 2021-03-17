import React from 'react';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {selectStadt} from "../actions/index";

class StadtList extends React.Component {
    showStadtList() {

        return this.props.stadt.map((stadt) => {
            return (
                <li onClick={()=>this.props.select(stadt)} key={stadt.id}>{stadt.name}</li>
            )
        })
    }

    render() {
        return (
            <ol>
                {this.showStadtList()}
            </ol>
        )
    }
};

function mapStateToProps(state) {
    return {
        stadt: state.stadt
    }
}

function matchDispatchToProps(dispatch){
    return bindActionCreators({select:selectStadt},dispatch)
}

export default connect(mapStateToProps,matchDispatchToProps)(StadtList);


