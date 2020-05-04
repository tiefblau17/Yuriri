import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';

import QuitModal from '../components/quit';
import StoreState from '../storeState';

interface HomePageProps {
  showBonus: boolean
}

interface HomePageState {
  modalShow: boolean
}

class HomePage extends Component<HomePageProps, HomePageState> {

  constructor(props: HomePageProps) {
    super(props);
    this.state = {
      modalShow: false
    }
  }

  render() {
    return (
      <div>
        <ul>
          <li>
            <Link to="/">New Game</Link>
          </li>
          <li>
            <Link to="/">Continue</Link>
          </li>
          <li>
            <Link to="/setting">Config</Link>
          </li>
          {
            this.props.showBonus &&
              <li>
            <Link to="/bonus">Bonus</Link>
            </li>
          }
          <li>
            <Link to="/main_window" onClick={() => this.setState({ modalShow: true })}>Quit</Link>
            <QuitModal 
              show={this.state.modalShow}
              onHide={() => this.setState({ modalShow: false })}
            />
          </li>
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state: StoreState) => ({
  showBonus: state.bonus.show
})

export default connect(mapStateToProps)(HomePage);