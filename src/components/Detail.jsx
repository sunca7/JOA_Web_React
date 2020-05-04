import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types';
import Spinner from './layout/Spinner';

class Detail extends Component {

    constructor(props) {
        super(props);
        this.state = {
          place: {
            id : '',
          }
        }
      }

    componentDidMount() {
        console.log("this.props.match.params.id ", this.props.match.params.id);

        this.props.getPlace(this.props.match.params.id);

    }

    static propTypes = {
        loading : PropTypes.bool,
        place: PropTypes.object.isRequired,
        getPlace: PropTypes.func.isRequired
    }

    render () {
        // const {
        //     name,
        //     id
        // } = this.props.place;

        const { loading } = this.props;

        console.log("props", this.props.place);
        // console.log("props place id ", this.props.place.id);
        if (loading) return <Spinner />;
        else {
            return (
                <Fragment>
                    <h2>hey</h2>
                </Fragment>
            );
        }
    }
}

Detail.propTypes = {

}

export default Detail

