/**
 * Created by huangpeng on 1/29/16.
 */

var React = require('react');
var RaisedButton = require('material-ui/lib/raised-button');
var Dialog = require('material-ui/lib/dialog');
var Colors = require('material-ui/lib/styles/colors');
var FlatButton = require('material-ui/lib/flat-button');
var getMuiTheme = require('material-ui/lib/styles/getMuiTheme');
var themeDecorator = require('material-ui/lib/styles/theme-decorator');
var EnhancedSwitch = require('material-ui/lib/enhanced-switch');
var FloatingActionButton = require('material-ui/lib/floating-action-button');
var ContentAdd = require('material-ui/lib/svg-icons/content/add');

const styles = {
  container: {
    textAlign: 'center'
  },
    btn: {
        height: '50px'
    },
    btn2: {
     margin: 12
    }

};

const muiTheme = getMuiTheme({
  accent1Color: Colors.deepOrange500,
});

var MaterialMain = React.createClass({
    getInitialState: function() {
        return { open: false };
    },

    handleRequestClose: function() {
        this.setState({
        open: false
        });
    },

    handleTouchTap: function() {
        this.setState({ open: true });
    },

  render: function() {
    const standardActions = (
      <FlatButton
        label="Okey"
        secondary={true}
        onMouseUp={this.handleRequestClose}
      />
    );

    return (
      <div style={styles.container}>
        <Dialog
          open={this.state.open}
          title="Super Secret Password"
          actions={standardActions}
          onRequestClose={this.handleRequestClose}
        >
          1-2-3-4-5
        </Dialog>
        <h1>material-ui</h1>
        <h2>example project</h2>
       <RaisedButton label="Primary" primary={true} style={styles.btn2}
       onMouseUp={this.handleTouchTap }/>
       <FlatButton label="Okey"
        secondary={true}
                   onMouseUp={this.handleTouchTap} />
          <FloatingActionButton style={styles.btn2}>
      <ContentAdd />
    </FloatingActionButton>
      </div>
    );
  }
});

module.exports = MaterialMain;
