import './Intervalo.css'
import React from 'react'
import { connect } from 'react-redux'
import Card from './Card'
import { set_min, set_max } from '../store/storeConfig' 
import { alterarNumeroMin } from '../store/actions/numeros'

const Intervalo = (props) => {
    const { min, max } = props
    
    return (
        <Card title="Intervalo de Números" green>
            <div className="Intervalo">
                <span>
                    <strong>Mínimo: </strong>
                    <input type="number" value={min} onChange={e => props.changeMin(+e.target.value)} />
                </span>

                <span>
                    <strong>Máximo: </strong>
                    <input type="number" value={max}  onChange={e => props.changeMax(+e.target.value)} />
                </span>
            </div>

        </Card>
    )
}

function mapStateToProps(state) {
    return {
        min: state.numeros.min,
        max: state.numeros.max,
    }
}
function mapDispatchToProps(dispatch) {
    return {
        changeMin(newMin) {
            // Dispatch the set_min action with the new value
            const action = set_min(newMin)
            dispatch(action)
        },
        changeMax(newMax) {
            // Dispatch the set_max action with the new value
            const action = set_max(newMax)
            dispatch(action)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Intervalo);