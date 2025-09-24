import React from 'react'
import { connect } from 'react-redux'
import Card from './Card'

const Sorteio = (props) => {
    const { min, max } = props
    return (
        <Card title="Sorteio de Números" purple>
            <div>
                <span>
                    <span>Resultado:</span>
                    <strong>{Math.floor(Math.random() * (max - min + 1)) + min} </strong>
                    {/* {Math.floor(Math.random() * (max - min + 1)) + min} */}
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

export default connect(mapStateToProps)(Sorteio);