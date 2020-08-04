import { connect } from 'react-redux'
import { selectedOptionsSelector } from './options.selectors.js'
import { toggleOption } from './options.actions.js'
import Options from './Options.jsx'

const mapStateToProps = state => {
    return {
        options: selectedOptionsSelector(state)
    }
}

const mapDispatch = {
    moveOption: toggleOption,
}

export default connect(mapStateToProps, mapDispatch)(Options);